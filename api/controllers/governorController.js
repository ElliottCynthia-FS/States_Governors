const Governor = require('../models/Governor');

exports.getGovernor = async (req, res) => {
    const governors = await Governor.find();
    res.status(200).json({
        data: governors,
        status: "success",
        message: `${req.method} - Governor request made`,
    });
};

// use try/catch instead of .then()/.catch()
// exports.createGovernor = async (req, res) => {
//     try {
//         const { governor } = req.body;
//         const newGovernor = new Governor({
//             name: req.body.name,
//         })
//         // save governor to database
//         const result = await newGovernor.save();

//         // Send response with governor data
//         res.status(201).json({
//             data: result,
//             status: "success",
//             message: `${req.method} - Governor addition made`,
//         })
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             error: {
//                 message: err.message
//             }
//         });
//     }
// }

exports.createGovernor = async (req, res,) => {
    const { governor } = req.body;
    const newGovernor = await Governor.create(governor);
    res.status(200).json({
        data: newGovernor,
        status: "success",
        message: `${req.method} - Governor addition made`,
    });
};

exports.getGovernorById = async (req, res) => {
    const { id } = req.params;
    const governor = await Governor.findById(id);
    res.status(200).json({
        data: governor,
        status: "success",
        message: `${req.method} - Governor by Id request made`,
    });
    
};

exports.updateGovernor = async (req, res) => {
    const { id } = req.params;
    const governor = await Governor.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        data: governor,
        status: "success",
        message: `${req.method} - Governor update by Id made`,
    })

};

exports.deleteGovernor = async (req, res) => {
    const { id } = req.params;
    // do not need to store the deleted governor in a variable since we are not returning it
    await Governor.findByIdAndDelete(id);
    res.status(200).json({
        id,
        status: "success",
        message: `${req.method} - Governor deletion by Id made`,
    });
};

