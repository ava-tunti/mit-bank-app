// const UserContext = React.createContext(null);

// function UserProvider({ children }) {
//   const [user, setUser] = React.useState({ email: '' });

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// MOST UPDATED WORKING ONE
// const UserContext = React.createContext({
//     user: { email: '' },
//     setUser: () => {}
//   });
  
//   function UserProvider({ children }) {
//     const [user, setUser] = React.useState({ email: '' });
  
//     return (
//       <UserContext.Provider value={{ user, setUser }}>
//         {children}
//       </UserContext.Provider>
//     );
//   }
  


  const UserContext = React.createContext({
    user: {
      email: '',
      balance: 0
    },
    setUser: () => {}
  });

  function UserProvider({ children }) {
    const [user, setUser] = React.useState({ email: '' });
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  }
  