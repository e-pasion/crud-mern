import { Router } from "express";
import { createTag, deleteTag, getTag, getTags, updateTag } from "../controllers/tag.controller.js";

const router = Router(); // aca estamos creando la funcion de rutas

router.get("/", getTags); // verbos http 
router.get("/:id", getTag);
router.post("/",createTag); // aca ejecutamos el controller que queramos en la ruta que necesitemos
router.put("/:id", updateTag);
router.delete("/:id",deleteTag)

export default router;
