const express =require('express')

const router =express.Router


const {}= require('../controllers/userControllers')
router.route('/signup').post(signup)

module.exports=router
