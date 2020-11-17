  import firebase from 'firebase'
  
  var firebaseConfig = {
    apiKey: "AIzaSyDmNZZyXVuarlzjN14jMDBDSuubSAJlotU",
    authDomain: "buzzerapp-3926e.firebaseapp.com",
    databaseURL: "https://buzzerapp-3926e.firebaseio.com",
    projectId: "buzzerapp-3926e",
    storageBucket: "buzzerapp-3926e.appspot.com",
    messagingSenderId: "776692178099",
    appId: "1:776692178099:web:2e69f254365c545e2524c6",
    measurementId: "G-3N8F40D11S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database()