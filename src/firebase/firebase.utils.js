import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyB-a5woz_SNTcblGC3Ae8c54DRk7q62E-E',
	authDomain: 'crwn-db-6fe2b.firebaseapp.com',
	projectId: 'crwn-db-6fe2b',
	storageBucket: 'crwn-db-6fe2b.appspot.com',
	messagingSenderId: '444472156150',
	appId: '1:444472156150:web:f48079b4aeaafcd6fa71d7',
	measurementId: 'G-L1NH7BMGHN',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
