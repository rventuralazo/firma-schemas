import { Router } from "express";
import { ReceptorController } from "../controllers/ReceptorController";

const receptorRouter = Router()


receptorRouter.post('/api/dte-receiver', ReceptorController.receive)

export default receptorRouter
