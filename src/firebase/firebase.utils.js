import cuid from 'cuid';
import 'firebase/analytics';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { reviewHtml } from '../components/questionnaire/questionnaire.component';

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env;

const config = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const usersRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await usersRef.get();

  if (!snapshot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await usersRef.set(
        {
          email,
          createdAt,
          ...additionalData,
        },
        { merge: true }
      );
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }

  return usersRef;
};

export const joinWaitlistWithEmail = async (email, state = 'N/A', service = 'N/A') => {
  const waitlistRef = firestore.collection('waitlist').doc(email);

  const snapshot = await waitlistRef.get();

  if (!snapshot.exists) {
    const joinedDate = new Date();

    try {
      await waitlistRef.set(
        {
          email,
          state,
          service,
          joinedDate,
        },
        { merge: true }
      );
      return { error: false };
    } catch (e) {
      return { error: true, message: e.message };
    }
  }

  return { error: true, message: 'This email is already on the waitlist!' };
};

export const logZipCode = async (zipcode, mailing_state) => {
  const zipcodesRef = firestore.collection('zipcodes').doc();

  const snapshot = await zipcodesRef.get();

  if (!snapshot.exists) {
    const date = new Date();

    try {
      await zipcodesRef.set(
        {
          date,
          zipcode: zipcode,
          mailing_state: mailing_state,
        },
        { merge: true }
      );
      return true;
    } catch (e) {
      return false;
    }
  }

  return false;
};

export const createVisit = async (service) => {
  const visitRef = firestore.collection('visits').doc();

  const snapshot = await visitRef.get();

  if (!snapshot.exists) {
    const date = new Date();

    try {
      await visitRef.set(
        {
          date,
          visit_reason: service,
          status: 'initiated',
          visit_id: visitRef.id,
        },
        { merge: true }
      );
      return { error: false, visitId: visitRef.id };
    } catch (e) {
      return { error: true, message: e.message };
    }
  }

  return { error: true, message: 'Failed to setip visit!' };
};

export const convertDoctorsListSnapshotToMap = (doctors) => {
  const transformedCollection = doctors.docs.map((doc) => {
    const {
      uid,
      first_name,
      last_name,
      professional_title,
      accepted_insurances,
      med_school,
      practice_name,
      mailing_address,
      mailing_city,
      mailing_zipcode,
      med_residency,
      provider_bio,
      rating,
      total_ratings,
      slug,
      tag,
    } = doc.data();

    //route name is the URL route for the doctor
    return {
      routeName: encodeURI(`${first_name.toLowerCase()}_${last_name.toLowerCase()}`),
      uid,
      first_name,
      last_name,
      professional_title,
      accepted_insurances,
      med_school,
      practice_name,
      mailing_address,
      mailing_city,
      mailing_zipcode,
      med_residency,
      provider_bio,
      rating,
      total_ratings,
      slug,
      tag,
    };
  });

  return transformedCollection;
};

export const convertVisitSnapshotToMap = (visit) => {
  const {
    date,
    insurance_info,
    original_patient_information,
    provider_id,
    seen_doctor,
    status,
    visit_reason,
    visit_id,
  } = visit;

  return {
    date,
    insurance_info,
    original_patient_information,
    provider_id,
    seen_doctor,
    status,
    visit_reason,
    visit_id,
  };
};

export const convertQuestionnaireSnapshotToPageMap = (
  visitName,
  questionsDocument,
  popLast = false
) => {
  let elements = [];
  let questionMapIndex = 0;

  while (questionMapIndex < questionsDocument['screening_questions'].length) {
    const questionMap = questionsDocument['screening_questions'][questionMapIndex];
    const questionSchema = convertQuestionToSurveySchema(questionMap);
    elements.push(questionSchema.element);
    if (questionSchema.sub_questions.length > 0) {
      questionsDocument['screening_questions'].splice(
        questionMapIndex + 1,
        0,
        ...questionSchema.sub_questions
      );
    }
    questionMapIndex++;
  }

  if (popLast) elements.pop();

  return {
    elements: elements,
    name: visitName,
    navigationTitle: visitName,
    questionTitleLocation: 'top',
  };
};

export const convertQuestionToSurveySchema = (questionMap) => {
  const { question, type, options, visibleIf } = questionMap;

  let element = {};
  let subQuestions = [];
  if (type === 'SC') {
    element.type = 'radiogroup';
  } else if (type === 'MC') {
    element.type = 'checkbox';
  } else {
    element.type = 'text';
  }

  element.name = question;
  element.title = question;
  element.isRequired = true;
  element.colCount = 4;

  if (type === 'SC' || type === 'MC') {
    element.choices = options.map((option) => {
      if (option.has_sub_questions) {
        subQuestions = subQuestions.concat(option.sub_questions);
        option.sub_questions.map((subQuestion) => {
          const updatedSubQuestion = subQuestion;
          updatedSubQuestion.visibleIf = `{${question}} contains ["${option.value}"]`;
          return updatedSubQuestion;
        });
      }
      return option.value;
    });
  }

  element.visibleIf = visibleIf;

  return { element: element, sub_questions: subQuestions };
};

export const mergePagesIntoSurveySchema = (pages) => {
  const reviewPage = {
    elements: [
      {
        type: 'html',
        name: 'review',
        html: reviewHtml,
      },
    ],
    name: 'Finish',
    navigationTitle: 'Finish',
    questionTitleLocation: 'top',
  };
  pages.push(reviewPage);
  const surveySchema = {
    pages: pages,
    showCompletedPage: false,
    showProgressBar: 'top',
    showQuestionNumbers: 'on',
    progressBarType: 'buttons',
    clearInvisibleValues: 'onHidden',
  };

  return surveySchema;
};

export const saveQuestionnaireResponse = async (visitID, questionnaire) => {
  const questionnaireRef = firestore.collection(`visits/${visitID}/questionnaire`).doc('answers');

  try {
    await questionnaireRef.set({
      answered_date: new Date(),
      answers: questionnaire,
    });
    await updateVisit(visitID, { status: 'filled_out' });
    return { error: false };
  } catch (e) {
    return { error: true, message: e.message };
  }
};

export const updateVisit = async (visitID, updatedVisitData) => {
  const visitRef = firestore.collection(`visits`).doc(visitID);

  try {
    await visitRef.set(updatedVisitData, { merge: true });
    return { error: false };
  } catch (e) {
    return { error: true, message: e.message };
  }
};

export const uploadToFirebaseStorage = async (file, visitId) => {
  const storageRef = storage.ref();
  const fileName = cuid();
  return storageRef.child(`visits/${visitId}/${fileName}`).put(file);
};

firebase.initializeApp(config);
firebase.analytics();

export const NON_PERSITANCE = firebase.auth.Auth.Persistence.SESSION;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
