import firebase from 'firebase/app';
import 'firebase/firestore';

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
} = process.env;

const config = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
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
      slug,
    } = doc.data();

    //route name is the URL route for the doctor
    return {
      routeName: encodeURI(
        `${first_name.toLowerCase()}_${last_name.toLowerCase()}`
      ),
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
      slug,
    };
  });

  return transformedCollection;
};

export const convertVisitSnapshotToMap = (visit) => {
  //Since it is retrieved from a collection, it is a list
  const transformedCollection = visit.docs.map((visit) => {
    const {
      date,
      insurance_info,
      original_patient_information,
      provider_id,
      seen_doctor,
      status,
      visit_reason,
      visit_id,
    } = visit.data();

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
  });

  return transformedCollection;
};

export const convertQuestionnaireSnapshotToMap = (questionsDocument) => {
  //Since it is retrieved from a collection, it is a list
  const transformedCollection = questionsDocument['screening_questions'].map(
    (questionMap) => {
      const { question, type, options } = questionMap;

      return {
        question,
        type,
        options,
      };
    }
  );

  return transformedCollection;
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;
