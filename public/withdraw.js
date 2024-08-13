// function Withdraw(){
//   const [show, setShow]     = React.useState(true);
//   const [status, setStatus] = React.useState('');  

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Withdraw"
//       status={status}
//       body={show ? 
//         <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
//         <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
//     />
//   )
// }

// function WithdrawMsg(props){
//   return(<>
//     <h5>Success</h5>
//     <button type="submit" 
//       className="btn btn-light" 
//       onClick={() => {
//         props.setShow(true);
//         props.setStatus('');
//       }}>
//         Withdraw again
//     </button>
//   </>);
// }

// function WithdrawForm(props){
//   const [email, setEmail]   = React.useState('');
//   const [amount, setAmount] = React.useState('');

//   function handle(){
//     fetch(`/account/update/${email}/-${amount}`)
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
//       value={email} 
//       onChange={e => setEmail(e.currentTarget.value)}/><br/>

//     Amount<br/>
//     <input type="number" 
//       className="form-control" 
//       placeholder="Enter amount" 
//       value={amount} 
//       onChange={e => setAmount(e.currentTarget.value)}/><br/>

//     <button type="submit" 
//       className="btn btn-light" 
//       onClick={handle}>
//         Withdraw
//     </button>

//   </>);
// }
// WORKING ONE ^

// MOST UPDATED WORKING ONE
// function Withdraw() {
//   const [show, setShow] = React.useState(true);
//   const [status, setStatus] = React.useState('');
//   const { user } = React.useContext(UserContext);

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Withdraw"
//       status={status}
//       body={show ? 
//         <WithdrawForm setShow={setShow} setStatus={setStatus} email={user.email}/> : 
//         <WithdrawMsg setShow={setShow} setStatus={setStatus} />}
//     />
//   );
// }

// function WithdrawMsg(props) {
//   return (
//     <>
//       <h5>Success</h5>
//       <button type="submit" className="btn btn-light" onClick={() => {
//         props.setShow(true);
//         props.setStatus('');
//       }}>
//         Withdraw again
//       </button>
//     </>
//   );
// }

// // function WithdrawForm(props) {
// //   const [amount, setAmount] = React.useState('');

// //   async function handle() {
// //     const url = `/account/update/${props.email}/-${amount}`;
// //     const res = await fetch(url);
// //     const text = await res.text();

// //     try {
// //       const data = JSON.parse(text);
// //       props.setStatus(JSON.stringify(data.value));
// //       props.setShow(false);
// //       console.log('JSON:', data);
// //     } catch (err) {
// //       props.setStatus('Withdraw failed');
// //       console.log('err:', text);
// //     }
// //   }

// function WithdrawForm(props){
//     const [amount, setAmount] = React.useState('');
//     const [error, setError] = React.useState('');
//     const ctx = React.useContext(UserContext);
  
//     function handle(){
//       if (!ctx.user.email) {
//         setError('User email is not available.');
//         return;
//       }
//       if (amount <= 0) {
//         setError('Please enter a valid amount.');
//         return;
//       }
  
//       fetch(`/account/update/${ctx.user.email}/-${amount}`)
//         .then(response => response.text())
//         .then(text => {
//           try {
//             const data = JSON.parse(text);
//             props.setStatus(`Withdrawal of $${amount} was successful. Your current balance is: ${ctx.user.email}/${amount}`);
//             props.setShow(false);
//             console.log('JSON:', data);
//           } catch(err) {
//             props.setStatus('Withdraw failed');
//             setError('Withdraw failed. Please try again.');
//             console.log('err:', text);
//           }
//         });
//     }
  
//   return (
//     <>

//       {error && <div className="alert alert-danger">{error}</div>}

//       Amount<br />
//       <input type="number" className="form-control" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br />
//       <button type="submit" className="btn btn-light" onClick={handle}>
//         Withdraw
//       </button>
//     </>
//   );
// }

// NOT REALLY WORKING BUT SORTA
// function Withdraw() {
//   const [show, setShow] = React.useState(true);
//   const [status, setStatus] = React.useState('');
//   const { user, setUser } = React.useContext(UserContext);

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Withdraw"
//       status={status}
//       body={show ? 
//         <WithdrawForm setShow={setShow} setStatus={setStatus} email={user.email} setUser={setUser} /> : 
//         <WithdrawMsg setShow={setShow} setStatus={setStatus} />}
//     />
//   );
// }

// function WithdrawMsg(props) {
//   return (
//     <>
//       <h5>Success</h5>
//       <button type="submit" className="btn btn-light" onClick={() => {
//         props.setShow(true);
//         props.setStatus('');
//       }}>
//         Withdraw again
//       </button>
//     </>
//   );
// }

// function WithdrawForm(props) {
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
//     if (amount > user.balance) {
//       setError('Insufficient balance.');
//       return;
//     }

//     fetch(`/account/update/${user.email}/-${amount}`)
//       .then(response => response.text())
//       .then(text => {
//         try {
//           const data = JSON.parse(text);
//           props.setStatus(`Withdrawal of $${amount} was successful. Your new balance is $${data.value.balance}.`);
//           setUser(prevUser => ({
//             ...prevUser,
//             balance: data.value.balance
//           }));
//           props.setShow(false);
//           console.log('JSON:', data);
//         } catch (err) {
//           props.setStatus('Withdraw failed');
//           setError('Withdraw failed. Please try again.');
//           console.log('err:', text);
//         }
//       });
//   }

//   return (
//     <>
//       {error && <div className="alert alert-danger">{error}</div>}
//       Current Balance: ${user.balance}<br /><br />
//       Amount<br />
//       <input type="number" className="form-control" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br />
//       <button type="submit" className="btn btn-light" onClick={handle}>
//         Withdraw
//       </button>
//     </>
//   );
// }


// MOST UPDATED WORKING ONE AUG 9
function Withdraw() {
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
        setStatus('Failed to fetch balance');
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
      setStatus('Failed to fetch balance');
      console.log('err:', text);
    }
  };

  return (
    <Card
      customBgColor="#3E4F85"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus} balance={balance} updateBalance={updateBalance} /> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus} />}
    />
  );
}

function WithdrawMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button type="submit" className="btn btn-light" onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Withdraw again
      </button>
    </>
  );
}

// function WithdrawForm(props) {
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
//     if (amount > props.balance) {
//       setError('Insufficient balance.');
//       return;
//     }

//     const res = await fetch(`/account/update/${ctx.user.email}/-${amount}`);
//     const text = await res.text();
    
//     try {
//       const data = JSON.parse(text);
//       props.setStatus(`Withdrawal of $${amount} was successful.`);
//       props.setShow(false);
//       // Update both the local state and context
//       await props.updateBalance();
//       console.log('JSON:', data);
//     } catch (err) {
//       props.setStatus('Withdraw failed');
//       setError('Withdraw failed. Please try again.');
//       console.log('err:', text);
//     }
//   }

function WithdrawForm(props) {
  const [amount, setAmount] = React.useState('');
  const [error, setError] = React.useState('');
  const ctx = React.useContext(UserContext);

  async function handle() {
    setError(''); // Reset error state before each operation

    if (!ctx.user.email) {
      setError('User email is not available.');
      return;
    }
    if (amount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
    if (amount > props.balance) {
      setError('Insufficient balance.');
      return;
    }

    try {
      const res = await fetch(`/account/update/${ctx.user.email}/-${amount}`, { method: 'PATCH' });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const text = await res.text();
      const data = JSON.parse(text);

      // Check if the response indicates success
      if (data.success) {
        props.setStatus(`Withdrawal of $${amount} was successful.`);
        props.setShow(false);
        await props.updateBalance();
        console.log('JSON:', data);
      } else {
        throw new Error('Withdrawal failed due to server response.');
      }
    } catch (err) {
      // Handle errors appropriately
      props.setStatus('Withdraw failed');
      setError('Withdraw failed. Please try again.');
      console.log('Error during withdrawal:', err.message);
    }
  }

  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}
      {props.balance !== null && <div>Current Balance: ${props.balance}</div>}
      
      Amount<br/>
      <input type="number" 
        className="form-control" 
        placeholder="Enter amount" 
        value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br />
      
      <button type="submit" className="btn btn-light" onClick={handle}>
        Withdraw
      </button>
    </>
  );
}


  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}
      {props.balance !== null && <div>Current Balance: ${props.balance}</div>}
      
      Amount<br/>
      <input type="number" 
        className="form-control" 
        placeholder="Enter amount" 
        value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br />
      
      <button type="submit" className="btn btn-light" onClick={handle}>
        Withdraw
      </button>
    </>
  );
}
// MOST UPDATED WORKING ONE AUG 9 ^
// function Withdraw() {
//   const [show, setShow] = React.useState(true);
//   const [status, setStatus] = React.useState('');
//   const [balance, setBalance] = React.useState(null);
//   const ctx = React.useContext(UserContext);

//   React.useEffect(() => {
//     async function fetchBalance() {
//       const url = `/account/findOne/${ctx.user.email}`;
//       try {
//         const res = await fetch(url);
//         if (!res.ok) throw new Error('Network response was not ok');
//         const text = await res.text();
//         const data = JSON.parse(text);
//         setBalance(data.balance);
//         ctx.setUser(prevUser => ({
//           ...prevUser,
//           balance: data.balance
//         }));
//       } catch (err) {
//         setStatus('Failed to fetch balance');
//         console.error('Error fetching balance:', err);
//       }
//     }

//     if (ctx.user.email) {
//       fetchBalance();
//     }
//   }, [ctx.user.email]);

//   const updateBalance = async () => {
//     const url = `/account/findOne/${ctx.user.email}`;
//     try {
//       const res = await fetch(url);
//       if (!res.ok) throw new Error('Network response was not ok');
//       const text = await res.text();
//       const data = JSON.parse(text);
//       setBalance(data.balance);
//       ctx.setUser(prevUser => ({
//         ...prevUser,
//         balance: data.balance
//       }));
//     } catch (err) {
//       setStatus('Failed to fetch balance');
//       console.error('Error updating balance:', err);
//     }
//   };

//   return (
//     <Card
//       customBgColor="#3E4F85"
//       header="Withdraw"
//       status={status}
//       body={show ? 
//         <WithdrawForm setShow={setShow} setStatus={setStatus} balance={balance} updateBalance={updateBalance} /> :
//         <WithdrawMsg setShow={setShow} setStatus={setStatus} />}
//     />
//   );
// }

// function WithdrawMsg(props) {
//   return (
//     <>
//       <h5>Success</h5>
//       <button type="button" className="btn btn-light" onClick={() => {
//         props.setShow(true);
//         props.setStatus('');
//       }}>
//         Withdraw again
//       </button>
//     </>
//   );
// }

// function WithdrawForm(props) {
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
//     if (amount > props.balance) {
//       setError('Insufficient balance.');
//       return;
//     }

//     const url = `/account/update/${ctx.user.email}/-${amount}`;
//     try {
//       const res = await fetch(url, { method: 'POST' });
//       if (!res.ok) throw new Error('Network response was not ok');
//       const text = await res.text();
//       const data = JSON.parse(text);
//       props.setStatus(`Withdrawal of $${amount} was successful.`);
//       props.setShow(false);
//       await props.updateBalance(); // Refresh balance
//     } catch (err) {
//       props.setStatus('Withdraw failed');
//       setError('Withdraw failed. Please try again.');
//       console.error('Error during withdrawal:', err);
//     }
//   }

//   return (
//     <>
//       {error && <div className="alert alert-danger">{error}</div>}
//       {props.balance !== null && <div>Current Balance: ${props.balance}</div>}
      
//       Amount<br />
//       <input
//         type="number"
//         className="form-control"
//         placeholder="Enter amount"
//         value={amount}
//         onChange={e => setAmount(e.currentTarget.value)}
//       /><br />
      
//       <button type="button" className="btn btn-light" onClick={handle}>
//         Withdraw
//       </button>
//     </>
//   );
// }

//--

