const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
    userid: {
        type: String
    },
    language: {
        type: String
    },
    code: {
        type: String
    },
    createDate:{
        type:String,
    
    }
})

module.exports = mongoose.model("Code", codeSchema)