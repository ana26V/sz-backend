
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Room = require('../models/room');
const Inventory = require('../models/inventory');
const Facilities=require('../models/facilities')
const Apartments = require('../models/apartment');

router.get("/getallrooms", async (req, res) => {
    try {

        //const rooms = await Room.find({})
        //return res.json(rooms); 
        const rooms = await Room.find().populate('inventoryID')
            .populate('suppliesID') // Populate the suppliesID field
            .populate('facilitiesID');
        res.status(200).json(rooms);

    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.get("/:id", async (req, res) => {
    //const roomid=req.body.roomid;

    try {
        const room = await Room.findById(req.params.id);
        res.send(room)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});


router.post('/getInventoryById', async (req, res) => {
    const { inventoryID } = req.body;

    try {
        const inventory = await Inventory.findOne({ _id: inventoryID });


        // Send the inventory data as a response
        res.send(inventory);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post('/getFacilitiesById', async (req, res) => {
    const { facilitiesID } = req.body;

    try {
        const facilities = await Facilities.findOne({ _id: facilitiesID });


        // Send the facilities data as a response
        res.send(facilities);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});
// router.get('/:id', async (req, res) => {
//     try {
//         const inventory = await Inventory.findById(req.params.id)

//         res.send(inventory);
//     } catch (error) {
//         return res.status(400).json({ message: error });
//     }
// });


module.exports = router;