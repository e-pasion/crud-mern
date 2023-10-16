import mongoose from 'mongoose'

const ingredientSchema = new mongoose.Schema({

    title:{
        type:String,
        uniqued:true,
        require:true,
    }

})

export default mongoose.model("Ingredient", ingredientSchema)