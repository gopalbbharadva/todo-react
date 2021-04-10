import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAc61IcNHnWYWgKMX9PSkLB0ZnXc362KPo",
    authDomain: "todoappreact-a522d.firebaseapp.com",
    projectId: "todoappreact-a522d",
    storageBucket: "todoappreact-a522d.appspot.com",
    messagingSenderId: "544581738292",
    appId: "1:544581738292:web:f707f305c96f10e0a8cf61"
  };


  firebase.initializeApp(firebaseConfig);

  const firebaseDB=firebase.firestore();

  export {firebaseDB};