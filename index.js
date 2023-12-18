const express= require("express")
const app= express()

const port = 4000;

app.get('/',(req,res)=>{
    res.send("Hi , Maya server is ready ");
})

app.listen(port, ()=>{
    console.log(`server is live at ${port}`)
})