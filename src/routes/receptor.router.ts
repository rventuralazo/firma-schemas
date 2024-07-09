import { Router } from "express";
import { ReceptorController } from "../controllers/ReceptorController";

const receptorRouter = Router()


receptorRouter.post('/fesv/recepciondte', ReceptorController.receive)

export default receptorRouter