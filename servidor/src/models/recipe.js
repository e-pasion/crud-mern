import mongoose from "mongoose"; // importamos mongoose para trabajar con MongoDB

const recipeSchema= new mongoose.Schema({ // creamos un nuevo Schema que sera como la plantilla para crear nuestras recetas

    title:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    tag:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
        require:true
    }
    
})

export default mongoose.model("Recipe", recipeSchema) 