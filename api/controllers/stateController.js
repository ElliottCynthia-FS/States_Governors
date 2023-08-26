const State = require('../models/State');

exports.getState = async (req, res) => {
    const states = await State.find();
    res.status(200).json({
        data: states,
        status: "success",
        message: `${req.method} - State request made`,
    });
};

exports.createState = async (req, res) => {
    const { state } = req.body;
    const newState = await State.create(state);
    res.status(200).json({
        data: newState,
        status: "success",
        message: `${req.method} - State addition made`,
    });
};

exports.getStateById = async (req, res) => {
    const { id } = req.params;
    const state = await State.findById(id);
    res.status(200).json({
        data: state,
        status: "success",
        message: `${req.method} - state by Id request made`,
    });
    
};

exports.updateState = async (req, res) => {
    const { id } = req.params;
    const state = await State.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        data: state,
        status: "success",
        message: `${req.method} - State update by Id made`,
    })

};

exports.deleteState = async (req, res) => {
    const { id } = req.params;
    // do not need to store the deleted state in a variable since we are not returning it
    await State.findByIdAndDelete(id);
    res.status(200).json({
        id,
        status: "success",
        message: `${req.method} - State deletion by Id made`,
    });
};