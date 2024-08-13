// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// let db = null;

// // connect to mongo
// MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
//     console.log("Connected successfully to db server");

//     // connect to myproject database
//     db = client.db('myproject');
// });

// // create user account using the collection.insertOne function
// function create(name, email, password) {
//     return new Promise((resolve, reject) => {
//         const collection = db.collection('users');
//         const doc = {name, email, password, balance:0};
//         collection.insertOne(doc, {w:1}, function(err, result) {
//             err ? reject(err) : resolve(doc);
//         });
//     }) 
// }

// // find user account 
// function find(email) {
//     return new Promise((resolve, reject) => {
//         const customers = db
//             .collection('users')
//             .find({ email: email })
//             .toArray(function (err, docs) {
//                 err ? reject(err) : resolve(docs);
//             });
//     })
// }

// // find user account
// function findOne(email) {
//     return new Promise((resolve, reject) => {
//         const customers = db
//             .collection('users')
//             .findOne({ email: email })
//             .then((doc) => resolve(doc))
//             .catch((err) => reject(err));
//     })
// }

// // update - deposit/withdraw amount
// function update(email, amount) {
//     return new Promise((resolve, reject) => {
//         const customers = db
//             .collection('users')
//             .findOneAndUpdate(
//                 { email: email },
//                 { $inc: { balance: amount } },
//                 { returnOriginal: false },
//                 function (err, documents) {
//                     err ? reject(err) : resolve(documents);
//                 }
//             );


//     });
// }

// // return all users by using the collection.find method
// function all() {
//     return new Promise((resolve, reject) => {
//         const customers = db
//             .collection('users')
//             .find({})
//             .toArray(function(err, docs) {
//                 err ? reject(err) : resolve(docs);
//             });
//     })
// }


// module.exports = { create, findOne, find, update, all };

const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI || "mongodb+srv://avaananda:3qRUmG3QkMbFMx2T@fullbankapp.pr2f6.mongodb.net/?retryWrites=true&w=majority&appName=fullbankapp" || "mongodb://localhost:27017";
let db = null;

// connect to mongo
async function connectToDatabase() {
    if (!db) {
        const client = await MongoClient.connect(url, { useUnifiedTopology: true });
        console.log("Connected successfully to db server");
        db = client.db('fullbankapp');
    }
}

// create user account using the collection.insertOne function
async function create(name, email, password) {
    await connectToDatabase();
    const collection = db.collection('users');
    const doc = { name, email, password, balance: 0 };
    return collection.insertOne(doc);
}

// find user account
async function find(email) {
    await connectToDatabase();
    const customers = db.collection('users').find({ email: email }).toArray();
    return customers;
}

// find user account
async function findOne(email) {
    await connectToDatabase();
    const customer = db.collection('users').findOne({ email: email });
    return customer;
}

// update - deposit/withdraw amount
async function update(email, amount) {
    await connectToDatabase();
    const result = db.collection('users').findOneAndUpdate(
        { email: email },
        { $inc: { balance: amount } },
        { returnOriginal: false }
    );
    return result;
}

// return all users by using the collection.find method
async function all() {
    await connectToDatabase();
    const customers = db.collection('users').find({}).toArray();
    return customers;
}

module.exports = { create, findOne, find, update, all };

