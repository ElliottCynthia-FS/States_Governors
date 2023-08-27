const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const State = require("../models/State");
const { getState, getStateById, createState, updateState, deleteState } = require("../controllers/stateController");

router.get("/", getState);

// router.post("/", createState);

router.post("/", async (req, res) => {
    try {
        const newState = new State({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            age: req.body.age,
            established: {
                year: req.body.established.year,
                description: req.body.established.description,
            },
            bird: req.body.bird,
            flower: req.body.flower,
            counties: req.body.counties,
            governor: req.body.governor,
        });
    const result = await newState.save()
        // .then(result => {
        //     console.log(result);
            res.status(201).json({
                message: "State created successfully",
                state: {
                    name: result.name,
                    age: result.age,
                    established: {
                        year: result.established.year,
                        description: result.established.description,
                    },
                    bird: result.bird,
                    flower: result.flower,
                    counties: result.counties,
                    governor: result.governor,
                    metadata: {
                        method: req.method,
                        host: req.hostname,
                    }
                }
            })
        } catch (err) {
            console.log(err.message);
            res.status(500).json({
                error: {
                    message: err.message,
                }
            })
            
        }
    });

    //* Original code for createState before Schema was created
    // res.status(200).json({
    //     status: "success",
    //     message: `${req.method} - State addition made`,
    // });
// });

router.get("/:id", getStateById);

router.put("/:id", updateState);

router.delete("/:id", deleteState);

module.exports = router;