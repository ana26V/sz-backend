const express = require("express");
const router = express.Router();
const Apartments = require('../models/apartment');



router.get("/getAllApartments", async (req, res) => {
    try {


        //const rooms = await Room.find({})
        //return res.json(rooms); 
    
        const apartments = await Apartments.find().populate('roomID')
        res.status(200).json(apartments);

    } catch (error) {
        return res.status(400).json({ message: error });
    }
});
router.get("/:id", async (req, res) => {
   
    try {
        const apartment = await Apartments.findById(req.params.id);
        res.send(apartment)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;