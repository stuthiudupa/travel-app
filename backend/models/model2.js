const mongoose = require('mongoose')
const template = new mongoose.Schema({
    qty:{
        type:Number
    },
    totalpr:{
        type:Number
        },
    name:{
        type:String
        }
    
})

module.exports = mongoose.model('PackageInfo',template)