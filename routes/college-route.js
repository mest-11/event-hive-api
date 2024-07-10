import { Router } from "express";
import { getCollege, patchCollege, postCollege } from "../controllers/college-controller.js";


export const collegeRouter = Router();

collegeRouter.get('/college', getCollege);

collegeRouter.post('/college', postCollege);

collegeRouter.patch('/college', patchCollege);

