import { init } from 'next-firebase-auth'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const initAuth = () => {
    init({
      authPageURL: "/auth",
      appPageURL: "/",
      loginAPIEndpoint: "/api/login", // required
      logoutAPIEndpoint: "/api/logout", // required
      firebaseAdminInitConfig: {
        credential: {
          projectId: "my-example-app-id",
          clientEmail: "firebase-adminsdk-hgxx7@race4all-17734.iam.gserviceaccount.com",
          // The private key must not be accessible on the client side.
          privateKey: process.env.FIREBASE_PRIVATE_KEY,
        },
      },
      firebaseClientInitConfig: {
        apiKey: "AIzaSyBxPDO3d3cp4u-FJMV2Cgp0G-8hkidd-Y0", // required
        authDomain: "race4all-17734.firebaseapp.com",
        projectId: "race4all-17734",
      },
      cookies: {
        name: "race4all-cookie-app", // required
        // Keys are required unless you set `signed` to `false`.
        // The keys cannot be accessible on the client side.
        keys: [
          process.env.COOKIE_SECRET_CURRENT,
          process.env.COOKIE_SECRET_PREVIOUS,
        ],
        httpOnly: true,
        maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
        overwrite: true,
        path: "/",
        sameSite: "strict",
        secure: true, // set this to false in local (non-HTTPS) development
        signed: true,
      },
    });
}

export default initAuth;