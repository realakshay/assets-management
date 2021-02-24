const express = require("express")
const router = express.Router();
const Device = require("../models/DeviceModel");
const {insertValidation} = require("../Validation");

router.get("/", async (req, res)=>{
    try{
        const devices = await Device.find();
        res.status(200).json(devices)
    }catch(err){
        res.status(400).json({message: err})
    }
})

router.post("/", async (req, res)=>{

    const {error} = insertValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    const device = new Device({
        id: req.body.id,
        deviceName: req.body.deviceName,
        deviceType: req.body.deviceType,
        company: req.body.company,
        imei: req.body.imei,
        osVersion: req.body.osVersion,
        os: req.body.os,
        ram: req.body.ram,
        rom: req.body.rom,
        isActivated: req.body.activated,
        isAvailable: req.body.available,
        releaseDate: req.body.releaseDate
    })
    
    try{
        const saveDevice = await device.save();
        res.status(200).json(saveDevice)
    }catch(err){
        res.status(400).json({message: err})
    }
})

router.get("/available", async (req, res)=>{
    try{
        const availableDevices = await Device.find({isAvailable: true});
        res.status(200).json(availableDevices)
    }catch(err){
        res.status(400).json({message: err})
    }
})

module.exports = router