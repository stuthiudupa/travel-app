const mongoose = require('mongoose')
const template = new mongoose.Schema({
    firstName:{
        type:String
    },
    email:{
        type:String
    },
    mobileno:{
        type:String 
    },
    pincode:{
        type:String     
    },
    address:{
        type:String     
    },
    city:{
        type:String    
    }

})

module.exports = mongoose.model('shippingaddress',template)