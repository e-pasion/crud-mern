import ingredients from "../models/ingredients.js";
import Ingredients from "../models/ingredients.js";

export const getIngredients = async (req, res) =>{
    const ingredients = await Ingredients.find()
    res.json(ingredients)
}

export const getIngredient = async (req, res) =>{
    const findIngredient = await Ingredients.findById(req.params.id);
    if (!findIngredient) return res.status(404).json({message:"Ingredient not found"})
    res.json(findIngredient);
}

export const createIngredient = async (req, res)=>{
    const {title} = req.body;
    const newIngredient = Ingredients({
        title,
    })
    await newIngredient.save();
    res.status(201).json({message:"Ingredient created"})
}

export const updateIngredient = async (req, res)=>{
    const findIngredient = await ingredients.findByIdAndUpdate(req.params.id, req.body);
    if(!findIngredient) return res.status(404).json({message: "Ingredient not found"})
    res.status(201).json({message: "Ingredient update"})
}

export const deleteIngredient = async (req, res)=>{
    const findIngredient = await ingredients.findByIdAndDelete(req.params.id);
    if (!findIngredient) return res.status(404).json({message: "Ingredient not found"});
    res.status(204).json({message: "Ingredient deleted"})
}