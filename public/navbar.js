// function NavBar(){
//   return(

//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">Centsational Bank</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a className="nav-link" href="#/CreateAccount/">Create Account</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/login/">Login</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/deposit/">Deposit</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/withdraw/">Withdraw</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/balance/">Balance</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/alldata/">AllData</a>
//           </li>          
//         </ul>
//       </div>
//     </nav>

//   );
// }
// WORKING ONE ^


// function NavBar() {
//   const ctx = React.useContext(UserContext);  
//   const email = ctx.user.email;

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">Centsational Bank</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a className="nav-link" href="#/CreateAccount/">Create Account</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/login/">Login</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/deposit/">Deposit</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/withdraw/">Withdraw</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/balance/">Balance</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/alldata/">All Data</a>
//           </li>
//         </ul>
//         {'Not logged in yet' && (
//           <span className="navbar-text ml-auto">
//             Logged in as: {email}
//           </span>
//         )}
//       </div>
//     </nav>
//   );
// }

// function NavBar() {
//   const ctx = React.useContext(UserContext);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">Centsational Bank</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a className="nav-link" href="#/CreateAccount/">Create Account</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/login/">Login</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/deposit/">Deposit</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/withdraw/">Withdraw</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/balance/">Balance</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/alldata/">All Data</a>
//           </li>
//         </ul>
//         {ctx && ctx.user.email && (
//           <span className="navbar-text ml-auto">
//             Logged in as: {ctx.user.email}
//           </span>
//         )}

//       </div>
//     </nav>
//   );
// }



function NavBar() {
  const ctx = React.useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Centsational Bank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">All Data</a>
          </li>
        </ul>
        {ctx && ctx.user.email && (
          <span className="navbar-text ml-auto">
            Logged in as: {ctx.user.email}
          </span>
        )}
      </div>
    </nav>
  );
}
