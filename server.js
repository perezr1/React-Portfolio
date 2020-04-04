const express = required("express");            //Backend framework
const mongoose = required("mongoose");          //ORM to connect to mongoDB 
const bodyParser = required("body-parser");     //Allow to take request and get data from the body.

// initialized express in a variable called app
const app = express();

app.use(bodyParser.json());

