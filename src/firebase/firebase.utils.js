import firebase from 'firebase/app';
import 'firebase/auth';
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

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;
