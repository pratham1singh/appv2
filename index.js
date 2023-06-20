const express = require('express')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://singhpratham191:pratham808121@cluster0.ye7pub7.mongodb.net/";
const client =new MongoClient(url);
var app= express()

const port = process.env.PORT ||3000

async function data(){
    let result = await client.connect()
    let db=result.db('login')
    let collection= db.collection('users')
    let data = await collection.find({})
   return data
}
app.get('/', async (req,res)=>{
 (await data()).toArray().then((a)=>{
    res.send(a)
 })
})

app.listen(port)
