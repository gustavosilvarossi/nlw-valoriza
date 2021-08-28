import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagsController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagsController = new CreateTagsController();


router.post('/tags', ensureAdmin, createTagsController.handle);
router.post("/users", createUserController.handle);


export { router };