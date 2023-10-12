import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    title:{
        type:String,
        unique: true,
        require:true
    }
})

export default mongoose.model('Tag', tagSchema)