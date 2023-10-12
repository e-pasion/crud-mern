import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: './local.env'}); //esto lo hacemos para indicar al dotenv donde esta la ruta del archivo que debe leer con url de la base de datos

const MONGO_URL = process.env.MONGO_DB_URL; // aca estamos indicando nombre de la url que tiene que leer el dotenv y guardando en una variable la url de la base de datos

const connectDB = async ()=>{ // aca estamos creando una funcion para que haga la concexion con la base de  datos

    try {
        await mongoose.connect(MONGO_URL) // aca estamos esperando esperando a que se realice la coneccion y si sale bien nos imprima algo
        console.log("DB Connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;