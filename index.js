const express = require('express')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://singhpratham191:pratham808121@cluster0.ye7pub7.mongodb.net/";
const client =new MongoClient(url);
var app= express()

const port = process.env.PORT ||3000


async function data(){
    let result = await client.connect()
    let db= await result.db('login')
    let collection= await db.collection('users')
    let data = await collection.find({})
   return data
}
app.get('/',(req,res)=>{
  res.send("hello")
})
app.get('/data',  async (req,res)=>{
  await data().then( async (a)=>{
    console.log( await a.toArray())
    res.send(await a.toArray())
  })
 
})



app.listen(port)
