const express = require('express');
const router = express.Router();


const {
    GetAllData,
    GetDataById,
    AddData,
    DeleteDataById,
} = require("../controllers/menuControl");

router.get("/",GetAllData)
router.get("/:id",GetDataById)
router.delete("/:id",DeleteDataById)
router.post("/",AddData);

module.exports = router;