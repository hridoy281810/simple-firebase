/**
 *            ------------------------------------
 *                  INITIAL SETUP
 *  ---------------------------------
 * 1. visit: console.firebase.google.com  
 * 1. create project (skip google analytics) 
 * 1. Register app (create config) 
 * 1. Install firebase: npm install firebase
 * 1. add config file to your project
 * 1. DANGER: Do not publish or make firebase config to public by pushing those to  github
 * 
 *             ------------------------------------------------
 *                       INTEGRATION
 *        --------------------------------------
 * 
 * 1. visit: Go to Docs > Build > Authentication > web > Get started
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 * 
 *               ---------------------------------------------------
 *                     PROVIDER SETUP
 *         --------------------------------------
 * 11. import GoogleAuthProvider and Create a new provider
 * 12. use signInWithPopUp and pass auth and provider 
 * 13. activate sign-in method (google , facebook,github, etc)
 * 14. [vite]: change 127.0.0.1 to localhost
 * 
 * **/ 