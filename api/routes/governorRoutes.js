const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Governor = require("../models/Governor");
const { getGovernor, getGovernorById, createGovernor, updateGovernor, deleteGovernor } = require("../controllers/governorController");

router.get("/", getGovernor);

// router.post("/", createGovernor);

router.post("/", async (req, res) => {
    try {
    const newGovernor = new Governor({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        party: req.body.party,
        timeInOffice: {
            years: req.body.timeInOffice.years,
            startYear: req.body.timeInOffice.startYear,
        },
        website: req.body.website,
        bio: req.body.bio,
        state: req.body.state,
    });
    // Write to database
    const result = await newGovernor.save()

        // .then(result => {
        //     console.log(result);

            res.status(201).json({
                message: "Governor created successfully",
                governor: {
                    id: result._id,
                    name: result.name,
                    party: result.party,
                    timeInOffice: {
                        years: result.timeInOffice.years,
                        startYear: result.timeInOffice.startYear,
                    },
                    website: result.website,
                    bio: result.bio,
                    state: result.state,
                    metadata: {
                        method: req.method,
                        host: req.hostname,
                    }
                }
            })
        } catch(err) {
            console.log(err.message);
            res.status(500).json({
                error: {
                    message: err.message,
                }
            })
        }
    });

router.get("/:id", getGovernorById);

router.put("/:id", updateGovernor);

router.delete("/:id", deleteGovernor);

module.exports = router;