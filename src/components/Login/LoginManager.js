import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';

export const initrializefarmework = () => {
    firebase.initializeApp(firebaseConfig);
}

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();    
    return firebase.auth().signInWithPopup(provider)
    .then( res => {
        const{displayName, email, photoURL} = res.user;
        const signInUser = {
        isSignIn: true,
        name: displayName, 
        email: email,
        photo: photoURL,
        };
        return signInUser;
    })
    .catch(err => console.log(err));
}

export const handleSignOut = () => {
    return firebase.auth().signOut().then(function() {
      const usersignOut = {
        isSignIn: false,
        name: '',
        email: '',
        photo: '',
      }
      return usersignOut;
    }).catch(function(error) {
      // An error happened.
    });
}

const updateName = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function() {
      console.log(`Update successful.`)
    }).catch(function(error) {
      console.log('An error happened.')
    });
}

export const CustomUserLogin = () => {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res => {
      const newUserInfo = {...user};
      newUserInfo.success = true;
      newUserInfo.error = '';
      setUser(newUserInfo);
      setLoggedInUser(newUserInfo);
      history.replace(from);
      console.log(res);
    })
    .catch(function(error) {
      const newUserInfo = {...user};
      newUserInfo.success = false;
      newUserInfo.error = error.message;
      setUser(newUserInfo);
    });
}

export const customUserCreate = () => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res => {
      const newUserInfo = {...user};
      newUserInfo.success = true;
      newUserInfo.error = '';
      setUser(newUserInfo);
      updateName(user.name);
    })
    .catch(error => {
      const newUserInfo = {...user};
      newUserInfo.success = false;
      newUserInfo.error = error.message;
      setUser(newUserInfo);
    });
}