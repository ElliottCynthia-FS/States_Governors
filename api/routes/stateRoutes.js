const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res
    .status(200)
    .json({
        status: "success",
        message: `${req.method} - State request made`,
    });
});

router.post("/", (req, res, next) => {
    res
    .status(200)
    .json({
        status: "success",
        message: `${req.method} - State addition made`,
    });
});

router.get("/:id", (req, res, next) => {
    const { id } = req.params;
    res
    .status(200)
    .json({
        id,
        status: "success",
        message: `${req.method} - State by Id request made`,
    });
});

router.put("/:id", (req, res, next) => {
    const { id } = req.params;
    res
    .status(200)
    .json({
        id,
        status: "success",
        message: `${req.method} - State update by Id made`,
    });
});

router.delete("/:id", (req, res, next) => {
    const { id } = req.params;
    res
    .status(200)
    .json({
        id,
        status: "success",
        message: `${req.method} - State deletion by Id made`,
    });
});

module.exports = router;