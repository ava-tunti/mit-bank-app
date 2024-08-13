// function CreateAccount(){
//   const [show, setShow]     = React.useState(true);
//   const [status, setStatus] = React.useState('');

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Create Account"
//       status={status}
//       body={show ? 
//         <CreateForm setShow={setShow}/> : 
//         <CreateMsg setShow={setShow}/>}
//     />
//   )
// }

// function CreateMsg(props){
//   return(<>
//     <h5>Success</h5>
//     <button type="submit" 
//       className="btn btn-light" 
//       onClick={() => props.setShow(true)}>Add another account</button>
//   </>);
// }

// function CreateForm(props){
//   const [name, setName]         = React.useState('');
//   const [email, setEmail]       = React.useState('');
//   const [password, setPassword] = React.useState('');

//   function handle(){
//     console.log(name,email,password);
//     const url = `/account/create/${name}/${email}/${password}`;
//     (async () => {
//         var res  = await fetch(url);
//         var data = await res.json();    
//         console.log(data);        
//     })();
//     props.setShow(false);
//   }    

//   return (<>

//     Name<br/>
//     <input type="input" 
//       className="form-control" 
//       placeholder="Enter name" 
//       value={name} 
//       onChange={e => setName(e.currentTarget.value)} /><br/>

//     Email address<br/>
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

//     <button type="submit" 
//       className="btn btn-light" 
//       onClick={handle}>Create Account</button>

//   </>);
// }
// WORKING ONE ^

// MOST UPDATED WORKING ONE AUG 9
function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const { setUser } = React.useContext(UserContext);

  return (
    <Card
      customBgColor="#3E4F85"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow} setStatus={setStatus} setUser={setUser}/> : 
        <CreateMsg setShow={setShow} />}
    />
  );
}

function CreateMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button type="submit" className="btn btn-light" onClick={() => props.setShow(true)}>
        Add another account
      </button>
    </>
  );
}

function CreateForm(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handle() {
    console.log(name, email, password);
    const url = `/account/create/${name}/${email}/${password}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    props.setUser({ email });
    props.setShow(false);
  }

  return (
    <>
      Name<br />
      <input type="input" className="form-control" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br />
      Email address<br />
      <input type="input" className="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
      Password<br />
      <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
      <button type="submit" className="btn btn-light" onClick={handle}>
        Create Account
      </button>
    </>
  );
}
// MOST UPDATED WORKING ONE AUG 9 ^

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

// // Initialize Firebase if not already initialized
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app();
// }

// function CreateAccount() {
//   const [show, setShow] = React.useState(true);
//   const [status, setStatus] = React.useState('');
//   const { setUser } = React.useContext(UserContext);

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Create Account"
//       status={status}
//       body={show ? 
//         <CreateForm setShow={setShow} setStatus={setStatus} setUser={setUser}/> : 
//         <CreateMsg setShow={setShow} />}
//     />
//   );
// }

// function CreateMsg(props) {
//   return (
//     <>
//       <h5>Success</h5>
//       <button type="submit" className="btn btn-light" onClick={() => props.setShow(true)}>
//         Add another account
//       </button>
//     </>
//   );
// }

// function CreateForm(props) {
//   const [name, setName] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   async function handle() {
//     const auth = firebase.auth();

//     auth.createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         // Optionally, you can update the user's profile with the name
//         user.updateProfile({
//           displayName: name,
//         }).then(() => {
//           console.log('User profile updated with name:', name);
//         }).catch((error) => {
//           console.error('Error updating user profile:', error);
//         });

//         props.setUser({ email: user.email });
//         props.setStatus('');
//         props.setShow(false);
//         console.log('User account created:', user);
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         props.setStatus(errorMessage);
//         console.log('Error creating account:', errorMessage);
//       });
//   }

//   return (
//     <>
//       Name<br />
//       <input type="input" className="form-control" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br />
//       Email address<br />
//       <input type="input" className="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
//       Password<br />
//       <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
//       <button type="submit" className="btn btn-light" onClick={handle}>
//         Create Account
//       </button>
//     </>
//   );
// }

