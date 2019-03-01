import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
  apiKey: "AIzaSyBObXMfhpLNUOPl05rMhkj0YRNJdjIEoWA",
  authDomain: "tidyspace.firebaseapp.com",
  databaseURL: "https://tidyspace.firebaseio.com",
  projectId: "tidyspace",
  storageBucket: "tidyspace.appspot.com",
  messagingSenderId: "367121613358"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');

  // *** Todos API ***
  todo = todoid => this.db.ref(`todos/${todoid}`);
  todos = () => this.db.ref('todos');
}

export default Firebase;