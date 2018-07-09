import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCW6lGme6kxjd9M6Yh3zIJpGJfVxJ6zocM",
    authDomain: "comitesrica-393a6.firebaseapp.com",
    databaseURL: "https://comitesrica-393a6.firebaseio.com",
    projectId: "comitesrica-393a6",
    storageBucket: "comitesrica-393a6.appspot.com",
    messagingSenderId: "379893927399"
  };

  firebase.initializeApp(config);
  export const firebaseAuth = firebase.auth()
  export default firebase;
