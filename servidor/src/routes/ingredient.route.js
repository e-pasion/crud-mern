import { Router } from 'express';
import { createIngredient, deleteIngredient, getIngredient, getIngredients, updateIngredient } from '../controllers/ingredient.controller.js';

const router = Router()

router.get("/", getIngredients)
router.get("/:id", getIngredient)
router.post("/", createIngredient)
router.put("/:id",updateIngredient)
router.delete("/:id",deleteIngredient)
export default router;