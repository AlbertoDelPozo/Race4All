
import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase/app';
import 'firebase/auth'
import { useEffect, useState } from 'react';

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  signInSuccessUrl: "/",
  credentialHelper: "none",
  callbacks: {
    sigInSuccessWithAuthresult: () => false,
  },
};

export default function Auth () {
    const [renderAuth, setRenderAuth] = useState(false)
    useEffect(()=>{
        setRenderAuth(true)
    }, [])
    return (
        <div>
            {renderAuth ? (
                <StyledFirebaseAuth
                uiConfig={firebaseAuthConfig}
                firebaseAuth={firebase.auth()}
                />
            ) : null}
        </div>
    )
}