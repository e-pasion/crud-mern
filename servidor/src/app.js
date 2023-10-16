import express from "express";
import connectDB from "./config/db.js";
import recipeRoutes from "./routes/recipe.route.js"
import ingredientRoutes from "./routes/ingredient.route.js"
import tagRoutes from "./routes/tag.route.js"
import cors from 'cors'
import morgan from "morgan";

const APP= express(); //con esto se crea el servidor para la aplicacion
const PORT= 3000; // aca se crea la variable del puerto


APP.use(express.json())//esto se hace para que las respuestas del servidor las convierta en json y las interprete de esa manera
APP.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
APP.use(morgan('dev'));

APP.use('/api/recipes', recipeRoutes);
APP.use('/api/tags',tagRoutes)
APP.use('/api/ingredients',ingredientRoutes);

APP.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`); // la funcion listen escucha el puerto que se le indique y cuando el servidor cargue se ejecutara todo dentro de la funcion
    connectDB();
}) 