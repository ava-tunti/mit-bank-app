// function AllData(){
//     const [data, setData] = React.useState('');    

//     React.useEffect(() => {
        
//         // fetch all accounts from API
//         fetch('/account/all')
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 setData(JSON.stringify(data));                
//             });

//     }, []);

//     return (<>
//         <h5>All Data in Store:</h5>
//         {data}
//     </>);
// }

// MOST UPDATED WORKING ONE AUG 10
function AllData() {
    const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
      // Fetch all accounts from API
      fetch('/account/all')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setData(data); // Update state with fetched data
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
        <Card
          customBgColor="#3E4F85"
          header="All Data in Store"
          body={(
            <>
              {data ? (
                <div className="container top-spacing">
                  {data.map((account, index) => (
                    <div key={index} className="row mb-3">
                      <div className="col">
                        <strong>Name:</strong> {account.name}<br />
                        <strong>Email:</strong> {account.email}<br />
                        <strong>Password:</strong> {account.password}<br />
                        <strong>Balance:</strong> ${account.balance}<br />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </>
          )}
        />
      );
      
  }
// MOST UPDATED WORKING ONE AUG 10

// import 'firebase/database'; 

// // Initialize Firebase
// if (!firebase.apps.length) {
//     const app = firebase.initializeApp({
//       apiKey: "AIzaSyAJZjvAoaF3S7uHw8KbKkA6sWSR1YpzqXs",
//       authDomain: "mit-full-stack-banking-app.firebaseapp.com",
//       databaseURL: "https://mit-full-stack-banking-app-default-rtdb.firebaseio.com",
//       projectId: "mit-full-stack-banking-app",
//       storageBucket: "mit-full-stack-banking-app.appspot.com",
//       messagingSenderId: "265626287175",
//       appId: "1:265626287175:web:8ac0226cd3dd67e0dbc562"
//     });
//   }
  
//   const database = firebase.database(); // Correctly get a reference to the database
  
//   function AllData() {
//     const [data, setData] = React.useState(null);
  
//     React.useEffect(() => {
//       const usersRef = database.ref('users'); // Get reference to 'users' node in Realtime Database
//       usersRef.once('value', (snapshot) => {
//         const usersData = snapshot.val();
//         if (usersData) {
//           const formattedData = Object.keys(usersData).map(key => ({
//             ...usersData[key],
//             email: key,
//           }));
//           setData(formattedData);
//         }
//       }, (error) => {
//         console.error('Error fetching data:', error);
//       });
//     }, []);
  
//     return (
//       <Card
//         customBgColor="#3E4F85"
//         header="All Data in Store"
//         body={(
//           <>
//             {data ? (
//               <div className="container">
//                 {data.map((account, index) => (
//                   <div key={index} className="row mb-3">
//                     <div className="col">
//                       <strong>Name:</strong> {account.name}<br />
//                       <strong>Email:</strong> {account.email}<br />
//                       <strong>Password:</strong> {account.password}<br />
//                       <strong>Balance:</strong> ${account.balance}<br />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>Loading...</p>
//             )}
//           </>
//         )}
//       />
//     );
//   }
  