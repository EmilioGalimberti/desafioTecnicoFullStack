//import {run, client} from "../data/confingdb.js";
//import {People} from "../models/models.js"
import axios from "axios";
import fetch from "node-fetch"

// run()
// Provide the name of the database and collection you want to use.
// If the database and/or collection do not exist, the driver and Atlas
// will create them automatically when you first write data.
// const dbName = "myDatabase";
// const collectionName = "recipes";

// Create references to the database and collection in order to run
// operations on them.
// const database = client.db(dbName);
// const collection = database.collection(collectionName);

const getPeople = async(req,res)=>{
    const url = ""

    try{
        const promesa = await fetch('https://swapi.dev/api/people/');
        let data = await promesa.json()
        res.status(200)
        res.send(data)
    }
    catch(error){
        console.log("error!!", error)
    }
}

export default{
    getPeople
}