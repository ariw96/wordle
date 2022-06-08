// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



  const firebaseConfig = {
    apiKey: "AIzaSyDFKNS1866kmTwG1D2qvKi-sPKC5sXy95A",
    authDomain: "fir-auth-ex-2466a.firebaseapp.com",
    projectId: "fir-auth-ex-2466a",
    storageBucket: "fir-auth-ex-2466a.appspot.com",
    messagingSenderId: "59040808559",
    appId: "1:59040808559:web:f77f5f54e05382b321579a"
  };
  

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
 export default app;