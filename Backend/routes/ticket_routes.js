import { Router } from "express";
import { getAllTickets, getTicketsById, postTicket } from "../controller/ticket_controller.js";
import { cloudinaryUpload } from "../middlewares/upload.js";

//Setting up routess
const ticketRouter = Router()

ticketRouter.get('/tickets', getAllTickets)

ticketRouter.post('/tickets', cloudinaryUpload.single('avatar'), postTicket)

ticketRouter.get('/tickets/:id', getTicketsById)

export default ticketRouter;