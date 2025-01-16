const MenuModel = require("../models/menuModel");

const GetAllData = async (req, res) => {
    try {
        const data = await MenuModel.find({});
        res.status(200).json({ data: data, message: 'Succes' })
    } catch (error) {
        res.status(404).json({ message: 'Not Found' })
    }
}
const GetDataById = async (req, res) => {
    const { id } = req.params
    try {
        const data = await MenuModel.findById(id);
        res.status(200).json({ data: data, message: 'Succes' })
    } catch (error) {
        res.status(404).json({ message: 'Not Found' })
    }
}
const AddData = async (req, res) => {
    try {
        const data = MenuModel({ ...req.body });
        await data.save();
        res.status(201).json({ data: data, message: 'Succes' })
    } catch (error) {
        res.status(400).json({ message: 'Bad Request' })
    }
}
const DeleteDataById = async (req, res) => {
    const { id } = req.params
    try {
        const data = await MenuModel.findByIdAndDelete(id);
        res.status(200).json({ data: data, message: 'Succesfully deleted' })
    } catch (error) {
        res.status(404).json({ message: 'Not Found' })
    }
}

module.exports = {
    GetAllData,
    GetDataById,
    AddData,
    DeleteDataById,
} 