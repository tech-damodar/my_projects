const mongoose = require("mongoose")

const trackingSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    food_id:{

        type:mongoose.Schema.Types.ObjectId,
        ref:"foods"
    },
    quantity:{
        type:Number,
        min:1
    }

},{timestamps:true})

const trakingModel = mongoose.model("tracking",trackingSchema)
module.exports = trakingModel