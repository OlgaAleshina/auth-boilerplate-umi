import firebase from '../../firebaseConfig';

export function login (email, pass) {
    return firebase.auth().signInWithEmailAndPassword(email, pass)
};

export function signup (email, pass) {
    return firebase.auth().createUserWithEmailAndPassword(email, pass)
};

