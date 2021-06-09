import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
};

export const convertDoctorsListSnapshotToMap = (doctors) => {
  const transformedCollection = doctors.docs.map((doc) => {
    const {
      uid,
      first_name,
      last_name,
      accepted_insurances,
      med_school,
      practice_name,
    } = doc.data();

    //route name is the URL route for the doctor
    return {
      routeName: encodeURI(
        `${first_name.toLowerCase()}_${last_name.toLowerCase()}`
      ),
      uid,
      first_name,
      last_name,
      accepted_insurances,
      med_school,
      practice_name,
    };
  });

  return transformedCollection;
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;