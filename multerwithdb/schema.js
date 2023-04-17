const mongoose = require('mongoose')

const schemaData = new mongoose.Schema({
    file:{
        type:String,
        required:true
    }
})

const dataCollection = new mongoose.model("allData",schemaData)

module.exports = dataCollection