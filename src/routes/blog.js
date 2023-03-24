const router = require('express').Router();
const Details = require('../models/Blog')

// Your routing code goes here

router.post("/v1/events", async (req, res) => {
    try {
        let user = await Details.create({
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            startTime: req.body.startTime,
            endTime: req.body.endTime
        });
        res.status(201).json({
            user
        })
    }
    catch (e) {
        res.status(400).json({
            status: `Missing Reuired Field ${e}`,
            message: e.message
        })
    }
})
router.get("/v1/events", async (req, res) => {
    try {
        let user = await Details.find(req.body.id);
        res.status(200).send({
            user
        })
    }
    catch (e) {
        console.log(e);
    }
});


router.get("/v1/events/:id", async (req, res) => {
    try {
        // Code to update the document
        console.log(req.body)
        const user = await Details.findOne({ _id: req.params.id }, req.body);

        res.status(200).json({
            status: "Sucess",
            user
        })

    } catch (e) {
        res.status(404).json({
            status: "failed",
            message: e.message
        })
    }
});


router.put("/v1/events/:id", async (req, res) => {
    try {
        // Code to update the document
        console.log(req.body)
        const user = await Details.updateOne({ _id: req.params.id }, req.body);

        res.status(200).json({
            status: "Sucess",
            user
        })

    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
});

router.delete("/v1/events/:id", async (req, res) => {
    try {
        // Code to update the document
        const user = await Details.deleteOne({ _id: req.params.id });

        res.status(200).json({
            status: "Sucess",
            user
        })

    } catch (e) {
        res.status(204).json({
            status: "failed",
            message: e.message
        })
    }
});

router.patch("/v1/events/:id", async (req, res) => {
    try {
        // Code to update the document
        console.log(req.body)
        const user = await Details.findOne({ _id: req.params.id }, req.body);
        if (!user) {
            res.status(200).json({
                status: "No User found",
                user
            })
        }
    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

module.exports = router;