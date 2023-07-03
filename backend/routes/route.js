const express = require('express');
const router = express.Router()
const template1 = require('../models/model1')
const template2 = require('../models/model2')

// router.get('/billing',(req,res)=>{
//     template2.find()
//     .then(foundData=>res.json(foundData))
// })



router.post('/billing',(req,res)=>{
    const addr = new template1({
        firstName:req.body.firstName,
        email:req.body.email,
        mobileno:req.body.mobileno,
        pincode:req.body.pincode,
        address:req.body.address,
        city:req.body.city
    })
    addr.save()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json(err)
    })
})

router.post('/booking',(req,res)=>{
    const package = new template2({
        qty:req.body.qty,
        name:req.body.name,
        totalpr:req.body.totalpr
    })
    package.save()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json(err)
    })
})

module.exports=router