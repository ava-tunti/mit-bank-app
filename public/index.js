// const containerStyles = {
//   backgroundColor: '#6692D4', 
//   minHeight: '100vh', // Ensure the entire window height is filled
// };

// //working one
// function Spa() {
//   return (
//     <HashRouter>
//       <div style={containerStyles}>
//         <NavBar/>        
//         <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
//           <div className="container" style={{padding: "20px"}}>
//             <Route path="/" exact component={Home} />
//             <Route path="/CreateAccount/" component={CreateAccount} />
//             <Route path="/login/" component={Login} />
//             <Route path="/deposit/" component={Deposit} />
//             <Route path="/withdraw/" component={Withdraw} />
//             {/* <Route path="/transactions/" component={Transactions} /> */}
//             <Route path="/balance/" component={Balance} />
//             <Route path="/alldata/" component={AllData} />
//           </div>
//         </UserContext.Provider>
//       </div>
//     </HashRouter>
//   );
// }

// ReactDOM.render(
//   <Spa/>,
//   document.getElementById('root')
// );
// // working one ^

const UserContext = React.createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = React.useState({ email: '' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}


const containerStyles = {
  backgroundColor: '#6692D4',
  minHeight: '100vh', // Ensure the entire window height is covered
};

function Spa() {
  return (
    <UserProvider>
      <HashRouter>
        <div style={containerStyles}>
          <NavBar/>

            <div className="container" style={{padding: "20px"}}>
              <Route path="/" exact component={Home} />
              <Route path="/CreateAccount/" component={CreateAccount} />
              <Route path="/login/" component={Login} />
              <Route path="/deposit/" component={Deposit} />
              <Route path="/withdraw/" component={Withdraw} />
              <Route path="/balance/" component={Balance} />
              <Route path="/alldata/" component={AllData} />
            </div>

        </div>
      </HashRouter>
    </UserProvider>
  );
}

ReactDOM.render(
  <Spa />,
  document.getElementById('root')
);
