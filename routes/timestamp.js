const express= require('express')
const router=express.Router()
const {root,timestamp}=require('../controllers/timestamp.js')
router.get('/',root)
router.get('/:timestamp',timestamp)


module.exports=router
