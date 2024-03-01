import React, { useState } from 'react';
import {auth} from './firebase-config';
// import 'firebase/auth';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithPhoneNumber
  } from "firebase/auth";

const SignInWithPhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);

  const handleSendCode = () => {
    const recaptchaVerifier = new auth.RecaptchaVerifier('recaptcha-container');
       auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
      .then((verificationId) => {
        setVerificationId(verificationId);
        console.log('Verification code sent:', verificationId);
      })
      .catch((error) => {
        console.error('Error sending verification code:', error);
      });
  };

  const handleVerifyCode = () => {
    const credential = auth.PhoneAuthProvider.credential(verificationId, verificationCode);
      auth().signInWithCredential(credential)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user);
      })
      .catch((error) => {
        console.error('Error verifying code:', error);
      });
  };

  return (
    <div>
      <h1>Sign In with Phone Number</h1>
      <div id="recaptcha-container"></div>
      <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
      <button onClick={handleSendCode}>Send Verification Code</button>
      <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} placeholder="Verification Code" />
      <button onClick={handleVerifyCode}>Verify Code</button>
    </div>
  );
};

export default SignInWithPhoneNumber;
