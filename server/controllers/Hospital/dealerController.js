const connect = require('./connection');
const createDealerModel = require('../../models/HospitalDB/dealerModel');
const db=require("../../models/dealerModel")

exports.createDealer = async (req, res) => {
    try {
        const { hospitalName } = req.params;
        const connection = await connect(hospitalName);
        const Dealer = createDealerModel(connection);
        const {name,address,email,phoneNo}=req.body;
        const dealersuper= await db.findOne({email:email}).exec() //get dealer from superdb
        const dealerId=dealersuper.dealerId;//seperate dealerid
        const newDealer = await new Dealer({dealerId:dealerId,name,address,email,phoneNo});///store in hospitaldb
        const savedDealer = await newDealer.save();
        res.status(201).json(savedDealer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getDealers = async (req, res) => {
    try {
        const { hospitalName } = req.params;
        const connection = await connect(hospitalName);
        const Dealer = createDealerModel(connection);

        const dealers = await Dealer.find();
        res.status(200).json(dealers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateDealer = async (req, res) => {
    try {
        const { hospitalName } = req.params;
        const connection = await connect(hospitalName);
        const Dealer = createDealerModel(connection);

        const updatedDealer = await Dealer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedDealer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteDealer = async (req, res) => {
    try {
        const { hospitalName } = req.params;
        const connection = await connect(hospitalName);
        const Dealer = createDealerModel(connection);

        await Dealer.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "Dealer deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
