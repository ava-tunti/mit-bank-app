// function Login(){
//   const [show, setShow]     = React.useState(true);
//   const [status, setStatus] = React.useState('');    

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Login"
//       status={status}
//       body={show ? 
//         <LoginForm setShow={setShow} setStatus={setStatus}/> :
//         <LoginMsg setShow={setShow} setStatus={setStatus}/>}
//     />
//   ) 
// }

// function LoginMsg(props){
//   return(<>
//     <h5>Success</h5>
//     <button type="submit" 
//       className="btn btn-light" 
//       onClick={() => props.setShow(true)}>
//         Authenticate again
//     </button>
//   </>);
// }

// function LoginForm(props){
//   const [email, setEmail]       = React.useState('');
//   const [password, setPassword] = React.useState('');

//   function handle(){
//     fetch(`/account/login/${email}/${password}`)
//     .then(response => response.text())
//     .then(text => {
//         try {
//             const data = JSON.parse(text);
//             props.setStatus('');
//             props.setShow(false);
//             console.log('JSON:', data);
//             // console.log(email);
//         } catch(err) {
//             props.setStatus(text)
//             console.log('err:', text);
//         }
//     });
//   }


//   return (<>

//     Email<br/>
//     <input type="input" 
//       className="form-control" 
//       placeholder="Enter email" 
//       value={email} 
//       onChange={e => setEmail(e.currentTarget.value)}/><br/>

//     Password<br/>
//     <input type="password" 
//       className="form-control" 
//       placeholder="Enter password" 
//       value={password} 
//       onChange={e => setPassword(e.currentTarget.value)}/><br/>

//     <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
   
//   </>);
// }
// WORKING ONE ^

//MOST UPDATED WORKING ONE
// function Login() {
//   const [show, setShow] = React.useState(true);
//   const [status, setStatus] = React.useState('');
//   const { setUser } = React.useContext(UserContext);

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Login"
//       status={status}
//       body={show ? 
//         <LoginForm setShow={setShow} setStatus={setStatus} setUser={setUser}/> : 
//         <LoginMsg setShow={setShow} />}
//     />
//   );
// }

// function LoginMsg(props) {
//   return (
//     <>
//       <h5>Success!</h5>
//       <button type="submit" className="btn btn-light" onClick={() => props.setShow(true)}>
//         Login again
//       </button>
//     </>
//   );
// }

// function LoginForm(props) {
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   async function handle() {
//     const url = `/account/login/${email}/${password}`;
//     const res = await fetch(url);
//     const text = await res.text();

//     try {
//       const data = JSON.parse(text);
//       props.setUser({ email });
//       props.setStatus('');
//       props.setShow(false);
//       console.log('JSON:', data);
//     } catch (err) {
//       props.setStatus(text);
//       console.log('err:', text);
//     }
//   }

//   return (
//     <>
//       Email<br />
//       <input type="input" className="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
//       Password<br />
//       <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
//       <button type="submit" className="btn btn-light" onClick={handle}>
//         Login
//       </button>
//     </>
//   );
// }
// MOST UPDATED WORKING ONE ^

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAJZjvAoaF3S7uHw8KbKkA6sWSR1YpzqXs",
//   authDomain: "mit-full-stack-banking-app.firebaseapp.com",
//   databaseURL: "https://mit-full-stack-banking-app-default-rtdb.firebaseio.com",
//   projectId: "mit-full-stack-banking-app",
//   storageBucket: "mit-full-stack-banking-app.appspot.com",
//   messagingSenderId: "265626287175",
//   appId: "1:265626287175:web:8ac0226cd3dd67e0dbc562"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// function Login() {
//   const [show, setShow] = React.useState(true);
//   const [status, setStatus] = React.useState('');
//   const { setUser } = React.useContext(UserContext);

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Login"
//       status={status}
//       body={show ? 
//         <LoginForm setShow={setShow} setStatus={setStatus} setUser={setUser}/> : 
//         <LoginMsg setShow={setShow} />}
//     />
//   );
// }

// function LoginMsg(props) {
//   return (
//     <>
//       <h5>Success!</h5>
//       <button type="submit" className="btn btn-light" onClick={() => props.setShow(true)}>
//         Login again
//       </button>
//     </>
//   );
// }

// function LoginForm(props) {
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   async function handle() {
//     const auth = firebase.auth();

//     auth.signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         props.setUser({ email: user.email });
//         props.setStatus('');
//         props.setShow(false);
//         console.log('User logged in:', user);
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         props.setStatus(errorMessage);
//         console.log('Error logging in:', errorMessage);
//       });
//   }

//   return (
//     <>
//       Email<br />
//       <input type="input" className="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
//       Password<br />
//       <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
//       <button type="submit" className="btn btn-light" onClick={handle}>
//         Login
//       </button>
//     </>
//   );
// }
//----

// import { auth, provider } from './firebase'; // Import the Firebase auth and provider
// import { signInWithPopup } from 'firebase/auth';

// function Login() {
//   const [show, setShow] = React.useState(true);
//   const [status, setStatus] = React.useState('');
//   const { setUser } = React.useContext(UserContext);

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Login"
//       status={status}
//       body={show ? 
//         <LoginForm setShow={setShow} setStatus={setStatus} setUser={setUser}/> : 
//         <LoginMsg setShow={setShow} />}
//     />
//   );
// }

// function LoginMsg(props) {
//   return (
//     <>
//       <h5>Success!</h5>
//       <button type="submit" className="btn btn-light" onClick={() => props.setShow(true)}>
//         Login again
//       </button>
//     </>
//   );
// }

// function LoginForm(props) {
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   async function handleLogin() {
//     const url = `/account/login/${email}/${password}`;
//     const res = await fetch(url);
//     const text = await res.text();

//     try {
//       const data = JSON.parse(text);
//       props.setUser({ email });
//       props.setStatus('');
//       props.setShow(false);
//       console.log('JSON:', data);
//     } catch (err) {
//       props.setStatus(text);
//       console.log('err:', text);
//     }
//   }

//   async function handleGoogleSignIn() {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       props.setUser({ email: user.email });
//       props.setStatus('');
//       props.setShow(false);
//       console.log('Google Sign-In Success:', user);
//     } catch (error) {
//       props.setStatus(error.message);
//       console.log('Google Sign-In Error:', error);
//     }
//   }

//   return (
//     <>
//       Email<br />
//       <input 
//         type="input" 
//         className="form-control" 
//         placeholder="Enter email" 
//         value={email} 
//         onChange={e => setEmail(e.currentTarget.value)} 
//       /><br />
//       Password<br />
//       <input 
//         type="password" 
//         className="form-control" 
//         placeholder="Enter password" 
//         value={password} 
//         onChange={e => setPassword(e.currentTarget.value)} 
//       /><br />
//       <button type="submit" className="btn btn-light" onClick={handleLogin}>
//         Login
//       </button>
//       <hr />
//       <button type="button" className="btn btn-light" onClick={handleGoogleSignIn}>
//         Sign in with Google
//       </button>
//     </>
//   );
// }
// --
// import React from 'react';
import initializeApp from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJZjvAoaF3S7uHw8KbKkA6sWSR1YpzqXs",
  authDomain: "mit-full-stack-banking-app.firebaseapp.com",
  databaseURL: "https://mit-full-stack-banking-app-default-rtdb.firebaseio.com",
  projectId: "mit-full-stack-banking-app",
  storageBucket: "mit-full-stack-banking-app.appspot.com",
  messagingSenderId: "265626287175",
  appId: "1:265626287175:web:8ac0226cd3dd67e0dbc562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Check if auth and provider are initialized successfully
if (auth && provider && app) {
  console.log("Firebase Auth and GoogleAuthProvider initialized successfully.");
} else {
  console.error("Failed to initialize Firebase Auth or GoogleAuthProvider.");
}

function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const { setUser } = React.useContext(UserContext);

  return (
    <Card
      customBgColor="#3E4F85"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus} setUser={setUser}/> : 
        <LoginMsg setShow={setShow} />}
    />
  );
}

function LoginMsg(props) {
  return (
    <>
      <h5>Success!</h5>
      <button type="button" className="btn btn-light" onClick={() => props.setShow(true)}>
        Login again
      </button>
    </>
  );
}

function LoginForm(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleLogin() {
    const url = `/account/login/${email}/${password}`;
    const res = await fetch(url);
    const text = await res.text();

    try {
      const data = JSON.parse(text);
      props.setUser({ email });
      props.setStatus('');
      props.setShow(false);
      console.log('Login JSON:', data);
    } catch (err) {
      props.setStatus('Error: you have not entered in any credentials.');
      console.log('Login error:', text);
    }
  }

  const handleGoogleSignIn = () => {
    google.accounts.id.initialize({
      client_id: "265626287175-k1qua8h6r8hkkio0vsrb04eb7nn3g0g0.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });

    google.accounts.id.prompt();
  };

  const handleCredentialResponse = (response) => {
    const credential = GoogleAuthProvider.credential(response.credential);
    signInWithCredential(auth, credential)
      .then((result) => {
        const user = result.user;
        console.log("Google sign-in successful:", user);
        props.setUser({ email: user.email });
        props.setStatus('');
        props.setShow(false);
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
        props.setStatus('Error during Google sign-in.');
      });
  };

  return (
    <>
      <div>
        Email<br />
        <input 
          type="email" 
          className="form-control" 
          placeholder="Enter email" 
          value={email} 
          onChange={e => setEmail(e.currentTarget.value)} 
        />
      </div>
      <div>
        Password<br />
        <input 
          type="password" 
          className="form-control" 
          placeholder="Enter password" 
          value={password} 
          onChange={e => setPassword(e.currentTarget.value)} 
        />
      </div>
      <hr />
      <button type="button" className="btn btn-light" onClick={handleLogin}>
        Login
      </button>
      <hr />
      <button type="button" className="btn btn-light" onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
    </>
  );
}
