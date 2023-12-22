const mongoose = require('mongoose')
const url = "mongodb+srv://ayush121:993642@cluster0.apysa.mongodb.net/";

mongoose.connect(url,)
.then(()=>{
    console.log("database is connected")
})
.catch((err)=>{
    console.error(err)
})

module.exports = mongoose;




// const {MongoClient}= require('mongodb')
// const uri="mongodb://localhost:27017/Hospital"

// const client = new MongoClient(uri,)

// async function connectTodb() {
//     try{
//         await client.connect();
//         console.log("connected")

//     }catch(err){
//         console.error("not connected")
//     }
    
// }

// connectTodb();
