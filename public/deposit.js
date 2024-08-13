// function Deposit(){
//   const [show, setShow]     = React.useState(true);
//   const [status, setStatus] = React.useState('');  

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Deposit"
//       status={status}
//       body={show ? 
//         <DepositForm setShow={setShow} setStatus={setStatus}/> :
//         <DepositMsg setShow={setShow} setStatus={setStatus}/>}
//     />
//   )
// }

// function DepositMsg(props){
//   return (<>
//     <h5>Success</h5>
//     <button type="submit" 
//       className="btn btn-light" 
//       onClick={() => {
//           props.setShow(true);
//           props.setStatus('');
//       }}>
//         Deposit again
//     </button>
//   </>);
// } 

// function DepositForm(props){
//   const [email, setEmail]   = React.useState('');
//   const [amount, setAmount] = React.useState('');

//   function handle(){
//     fetch(`/account/update/${email}/${amount}`)
//     .then(response => response.text())
//     .then(text => {
//         try {
//             const data = JSON.parse(text);
//             props.setStatus(JSON.stringify(data.value));
//             props.setShow(false);
//             console.log('JSON:', data);
//         } catch(err) {
//             props.setStatus('Deposit failed')
//             console.log('err:', text);
//         }
//     });
//   }

//   return(<>

//     Email<br/>
//     <input type="input" 
//       className="form-control" 
//       placeholder="Enter email" 
//       value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      
//     Amount<br/>
//     <input type="number" 
//       className="form-control" 
//       placeholder="Enter amount" 
//       value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

//     <button type="submit" 
//       className="btn btn-light" 
//       onClick={handle}>Deposit</button>

//   </>);
// }
// WORKING ONE ^

// ALSO WORKING
// function Deposit(){
//   const [show, setShow] = React.useState(true);
//   const [status, setStatus] = React.useState('');  

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Deposit"
//       status={status}
//       body={show ? 
//         <DepositForm setShow={setShow} setStatus={setStatus}/> :
//         <DepositMsg setShow={setShow} setStatus={setStatus}/>}
//     />
//   );
// }

// function DepositMsg(props){
//   return (
//     <>
//       <h5>Success</h5>
//       <button type="submit" 
//         className="btn btn-light" 
//         onClick={() => {
//           props.setShow(true);
//           props.setStatus('');
//         }}>
//           Deposit again
//       </button>
//     </>
//   );
// }

// function DepositForm(props){
//   const [amount, setAmount] = React.useState('');
//   const [error, setError] = React.useState('');
//   const ctx = React.useContext(UserContext);

//   function handle(){
//     if (!ctx.user.email) {
//       setError('User email is not available.');
//       return;
//     }
//     if (amount <= 0) {
//       setError('Please enter a valid amount.');
//       return;
//     }

//     fetch(`/account/update/${ctx.user.email}/${amount}`)
//       .then(response => response.text())
//       .then(text => {
//         try {
//           const data = JSON.parse(text);
//           props.setStatus(`Deposit of $${amount} was successful.`);
//           props.setShow(false);
//           console.log('JSON:', data);
//         } catch(err) {
//           props.setStatus('Deposit failed');
//           setError('Deposit failed. Please try again.');
//           console.log('err:', text);
//         }
//       });
//   }

//   return (
//     <>
//       {error && <div className="alert alert-danger">{error}</div>}
      
//       Amount<br/>
//       <input type="number" 
//         className="form-control" 
//         placeholder="Enter amount" 
//         value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

//       <button type="submit" 
//         className="btn btn-light" 
//         onClick={handle}>Deposit</button>
//     </>
//   );
// }

// MOST MOST UPDATED WORKING
// function Deposit() {
//   const [show, setShow] = React.useState(true);
//   const [status, setStatus] = React.useState('');
//   const { user, setUser } = React.useContext(UserContext);

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Deposit"
//       status={status}
//       body={show ? 
//         <DepositForm setShow={setShow} setStatus={setStatus} email={user.email} setUser={setUser} /> :
//         <DepositMsg setShow={setShow} setStatus={setStatus} />}
//     />
//   );
// }

// function DepositMsg(props) {
//   return (
//     <>
//       <h5>Success</h5>
//       <button type="submit" 
//         className="btn btn-light" 
//         onClick={() => {
//           props.setShow(true);
//           props.setStatus('');
//         }}>
//           Deposit again
//       </button>
//     </>
//   );
// }

// function DepositForm(props) {
//   const [amount, setAmount] = React.useState('');
//   const [error, setError] = React.useState('');
//   const { user, setUser } = React.useContext(UserContext);

//   function handle() {
//     if (!user.email) {
//       setError('User email is not available.');
//       return;
//     }
//     if (amount <= 0) {
//       setError('Please enter a valid amount.');
//       return;
//     }

//     fetch(`/account/update/${user.email}/${amount}`)
//       .then(response => response.text())
//       .then(text => {
//         try {
//           const data = JSON.parse(text);
//           props.setStatus(`Deposit of $${amount} was successful. Your new balance is $${data.value.balance}.`);
//           setUser(prevUser => ({
//             ...prevUser,
//             balance: data.value.balance
//           }));
//           props.setShow(false);
//           console.log('JSON:', data);
//         } catch (err) {
//           props.setStatus('Deposit failed');
//           setError('Deposit failed. Please try again.');
//           console.log('err:', text);
//         }
//       });
//   }

//   return (
//     <>
//       {error && <div className="alert alert-danger">{error}</div>}
      
//       Current Balance: ${user.balance}<br /><br />
      
//       Amount<br/>
//       <input type="number" 
//         className="form-control" 
//         placeholder="Enter amount" 
//         value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

//       <button type="submit" 
//         className="btn btn-light" 
//         onClick={handle}>Deposit</button>
//     </>
//   );
// }

// SORT OF WORKING ONE? ABOVE ONE MUCH BETTER THOUGH
// function Deposit() {
//   const [show, setShow] = React.useState(true);
//   const [status, setStatus] = React.useState('');
//   const [balance, setBalance] = React.useState(null);
//   const ctx = React.useContext(UserContext);

//   React.useEffect(() => {
//     async function fetchBalance() {
//       const url = `/account/findOne/${ctx.user.email}`;
//       const res = await fetch(url);
//       const text = await res.text();
      
//       try {
//         const data = JSON.parse(text);
//         setBalance(data.balance);
//       } catch (err) {
//         setStatus('Failed to fetch balance');
//         console.log('err:', text);
//       }
//     }
    
//     if (ctx.user.email) {
//       fetchBalance();
//     }
//   }, [ctx.user.email]);

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Deposit"
//       status={status}
//       body={show ? 
//         <DepositForm setShow={setShow} setStatus={setStatus} balance={balance} /> :
//         <DepositMsg setShow={setShow} setStatus={setStatus} />}
//     />
//   );
// }

// function DepositMsg(props) {
//   return (
//     <>
//       <h5>Success</h5>
//       <button type="submit" 
//         className="btn btn-light" 
//         onClick={() => {
//           props.setShow(true);
//           props.setStatus('');
//         }}>
//           Deposit again
//       </button>
//     </>
//   );
// }

// function DepositForm(props) {
//   const [amount, setAmount] = React.useState('');
//   const [error, setError] = React.useState('');
//   const ctx = React.useContext(UserContext);

//   function handle() {
//     if (!ctx.user.email) {
//       setError('User email is not available.');
//       return;
//     }
//     if (amount <= 0) {
//       setError('Please enter a valid amount.');
//       return;
//     }

//     fetch(`/account/update/${ctx.user.email}/${amount}`)
//       .then(response => response.text())
//       .then(text => {
//         try {
//           const data = JSON.parse(text);
//           props.setStatus(`Deposit of $${amount} was successful. Your current balance is: $${data.balance}`);
//           props.setShow(false);
//           console.log('JSON:', data);
//         } catch(err) {
//           props.setStatus('Deposit failed');
//           setError('Deposit failed. Please try again.');
//           console.log('err:', text);
//         }
//       });
//   }

//   return (
//     <>
//       {error && <div className="alert alert-danger">{error}</div>}
//       {props.balance !== null && <div>Current Balance: ${props.balance}</div>}
      
//       Amount<br/>
//       <input type="number" 
//         className="form-control" 
//         placeholder="Enter amount" 
//         value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
      
//       <button type="submit" 
//         className="btn btn-light" 
//         onClick={handle}>Deposit</button>
//     </>
//   );
// }


// MOST UPDATED WORKING ONE AUG 9
function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [balance, setBalance] = React.useState(null);
  const ctx = React.useContext(UserContext);

  React.useEffect(() => {
    async function fetchBalance() {
      const url = `/account/findOne/${ctx.user.email}`;
      const res = await fetch(url);
      const text = await res.text();
      
      try {
        const data = JSON.parse(text);
        setBalance(data.balance);
        // Update context with the fetched balance
        ctx.setUser(prevUser => ({
          ...prevUser,
          balance: data.balance
        }));
      } catch (err) {
        // setStatus('Failed to fetch balance');
        console.log('err:', text);
      }
    }
    
    if (ctx.user.email) {
      fetchBalance();
    }
  }, [ctx.user.email]);

  const updateBalance = async () => {
    const url = `/account/findOne/${ctx.user.email}`;
    const res = await fetch(url);
    const text = await res.text();
    
    try {
      const data = JSON.parse(text);
      setBalance(data.balance);
      // Update context with the fetched balance
      ctx.setUser(prevUser => ({
        ...prevUser,
        balance: data.balance
      }));
    } catch (err) {
      // setStatus('Failed to fetch balance');
      console.log('err:', text);
    }
  };

  return (
    <Card
      customBgColor="#3E4F85"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus} balance={balance} updateBalance={updateBalance} /> :
        <DepositMsg setShow={setShow} setStatus={setStatus} />}
    />
  );
}

function DepositMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => {
          props.setShow(true);
          props.setStatus('');
        }}>
          Deposit again
      </button>
    </>
  );
}

function DepositForm(props) {
  const [amount, setAmount] = React.useState('');
  const [error, setError] = React.useState('');
  const ctx = React.useContext(UserContext);

  async function handle() {
    if (!ctx.user.email) {
      setError('User email is not available.');
      return;
    }
    if (amount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }

    const res = await fetch(`/account/update/${ctx.user.email}/${amount}`);
    const text = await res.text();
    
    try {
      const data = JSON.parse(text);
      props.setStatus(`Deposit of $${amount} was successful.`);
      props.setShow(false);
      // Update both the local state and context
      await props.updateBalance();
      console.log('JSON:', data);
    } catch (err) {
      // props.setStatus('Deposit failed');
      // setError('Deposit failed. Please try again.');
      console.log('err:', text);
    }
  }

  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}
      
      Amount<br/>
      <input type="number" 
        className="form-control" 
        placeholder="Enter amount" 
        value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
      
      <button type="submit" 
        className="btn btn-light" 
        onClick={handle}>Deposit</button>
    </>
  );
}
// MOST UPDATED WORKING ONE AUG 9

// // Initialize Firebase
// if (!firebase.apps.length) {
//   var app = firebase.initializeApp({
//     apiKey: "AIzaSyAJZjvAoaF3S7uHw8KbKkA6sWSR1YpzqXs",
//     authDomain: "mit-full-stack-banking-app.firebaseapp.com",
//     databaseURL: "https://mit-full-stack-banking-app-default-rtdb.firebaseio.com",
//     projectId: "mit-full-stack-banking-app",
//     storageBucket: "mit-full-stack-banking-app.appspot.com",
//     messagingSenderId: "265626287175",
//     appId: "1:265626287175:web:8ac0226cd3dd67e0dbc562"
//   });
// }

// const database = firebase.getDatabase(app);

// function Deposit() {
//   const [show, setShow] = React.useState(true);
//   const [status, setStatus] = React.useState('');
//   const [balance, setBalance] = React.useState(null);
//   const ctx = React.useContext(UserContext);

//   React.useEffect(() => {
//     async function fetchBalance() {
//       const balanceRef = database.ref(`users/${ctx.user.email}/balance`);
//       balanceRef.once('value', (snapshot) => {
//         const data = snapshot.val();
//         if (data !== null) {
//           setBalance(data);
//           // Update context with the fetched balance
//           ctx.setUser(prevUser => ({
//             ...prevUser,
//             balance: data
//           }));
//         } else {
//           setStatus('Failed to fetch balance');
//         }
//       }, (error) => {
//         setStatus('Failed to fetch balance');
//         console.log('Error:', error);
//       });
//     }
    
//     if (ctx.user.email) {
//       fetchBalance();
//     }
//   }, [ctx.user.email]);

//   const updateBalance = async () => {
//     const balanceRef = database.ref(`users/${ctx.user.email}/balance`);
//     balanceRef.once('value', (snapshot) => {
//       const data = snapshot.val();
//       if (data !== null) {
//         setBalance(data);
//         // Update context with the fetched balance
//         ctx.setUser(prevUser => ({
//           ...prevUser,
//           balance: data
//         }));
//       } else {
//         setStatus('Failed to fetch balance');
//       }
//     }, (error) => {
//       setStatus('Failed to fetch balance');
//       console.log('Error:', error);
//     });
//   };

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Deposit"
//       status={status}
//       balance={balance} // Pass balance to Card
//       body={show ? 
//         <DepositForm setShow={setShow} setStatus={setStatus} balance={balance} updateBalance={updateBalance} /> :
//         <DepositMsg setShow={setShow} setStatus={setStatus} />}
//     />
//   );
// }

// function DepositMsg(props) {
//   return (
//     <>
//       <h5>Success</h5>
//       <button type="submit" 
//         className="btn btn-light" 
//         onClick={() => {
//           props.setShow(true);
//           props.setStatus('');
//         }}>
//           Deposit again
//       </button>
//     </>
//   );
// }

// function DepositForm(props) {
//   const [amount, setAmount] = React.useState('');
//   const [error, setError] = React.useState('');
//   const ctx = React.useContext(UserContext);

//   async function handle() {
//     if (!ctx.user.email) {
//       setError('User email is not available.');
//       return;
//     }
//     if (amount <= 0) {
//       setError('Please enter a valid amount.');
//       return;
//     }

//     const userRef = database.ref(`users/${ctx.user.email}`);
//     userRef.transaction((user) => {
//       if (user) {
//         user.balance += parseFloat(amount); // Increase the balance
//         return user;
//       }
//     }, (error, committed) => {
//       if (error) {
//         props.setStatus('Deposit failed');
//         setError('Deposit failed. Please try again.');
//         console.log('Error:', error);
//       } else if (committed) {
//         props.setStatus(`Deposit of $${amount} was successful.`);
//         props.setShow(false);
//         // Update both the local state and context
//         props.updateBalance();
//       }
//     });
//   }

//   return (
//     <>
//       {error && <div className="alert alert-danger">{error}</div>}
//       {props.balance !== null && <div>Current Balance: ${props.balance}</div>}
      
//       Amount<br/>
//       <input type="number" 
//         className="form-control" 
//         placeholder="Enter amount" 
//         value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
      
//       <button type="submit" 
//         className="btn btn-light" 
//         onClick={handle}>Deposit</button>
//     </>
//   );
// }
