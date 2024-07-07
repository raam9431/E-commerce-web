const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path");
const ownersRouter = require('./routes/ownersRouter.js');
const productsRouter = require('./routes/productsRouter.js');
const usersRouter = require('./routes/usersRouter.js');
const mongoose = require('mongoose');
// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/yourDatabaseName')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


app.get("/owners", ownersRouter);
app.get("/users", usersRouter);
app.get("/products", productsRouter);

app.listen(3000);

