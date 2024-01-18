import { envs } from "@/src/Utils/config/envs";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: envs.API_KEY,
  authDomain: envs.DOMAIN,
  projectId: envs.PROJECT_ID,
  storageBucket: envs.STORAGE_BUCKET,
  messagingSenderId: envs.MESSAGING_SENDER_ID,
  appId: envs.APP_ID,
  measurementId: envs.MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: "user@example.com",
});

export default async function googleAuthentication() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      return user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.messag;
      console.log("error message:", errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
