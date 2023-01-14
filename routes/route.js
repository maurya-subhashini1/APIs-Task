const express=require("express")
// const { shiprocket } = require("../ff")
const {shiprocket, getdatabyid}=require("../controller/apis")

const router=express.Router()

// router.get("/get",shiprocket)
router.get("/get/databyid/:marketId",getdatabyid)

module.exports=router