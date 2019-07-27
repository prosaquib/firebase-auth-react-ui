import firebase from 'firebase/app';
import 'firebase/auth';

  const config = {
    apiKey: "AIzaSyAmHJITFJV0GnuhAXoIj0CenMho0JQuXu0",
    authDomain: "test-react-auth-9cb7b.firebaseapp.com",
    databaseURL: "https://test-react-auth-9cb7b.firebaseio.com",
    projectId: "test-react-auth-9cb7b",
    storageBucket: "test-react-auth-9cb7b.appspot.com",
    messagingSenderId: "370596994641"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
      auth
  };