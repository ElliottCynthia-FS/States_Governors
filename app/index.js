const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const governorRoutes = require('../api/routes/governorRoutes')
const stateRoutes = require('../api/routes/stateRoutes');

app.use(morgan('dev'));
//* parsing middleware
app.use(express.urlencoded({
    extended: true
}));
//* Middleware that all reqs are JSON
app.use(express.json())

//* Middleware to handle CORS policy
app.use((req, res, next) => {
    // bypass CORS policy
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    // set conditions
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, PUT, GET, PATCH, DELETE")
    }
    next();
});

app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Service is up and running",
        method: req.method,
    })
})

app.use("/governors", governorRoutes);
app.use("/states", stateRoutes);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        }
    })
});

//* Connect mongoose
mongoose.connect(process.env.mongoDBURL)
   

module.exports = app;