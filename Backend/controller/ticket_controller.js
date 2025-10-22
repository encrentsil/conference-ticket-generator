import { TicketModel } from "../model/ticket_model.js";

// Create and Save a new Ticket
export const postTicket = async (req, res, next) => {
    try {
        const createTicket = await TicketModel.create({
            ...req.body,
            avatar: req?.file?.filename,
        });
        return res.status(201).json({ message: "Ticket created successfully", ticket: createTicket })
    } catch (error) {
        // Handle duplicate field error code
        if (error.code === 11000) {
            return res.status(409).json({ error: { message: error.message } });
        }
        // Allow next to take over the rest
        next(error);
    }
}

//get tickets

export const getTicketsById = async (req, res) => {
    try {
        const singleTicket = await TicketModel.findById(req.params.id)
        res.status(200).json(singleTicket)
    } catch (error) {
        return res.status(409).json({ error: { message: error.message } });
    }
}

export const getAllTickets = async (req, res) => {
    try {
        const allTickets = await TicketModel.find()
        res.status(200).json(allTickets)
    } catch (error) {
        return res.status(409).json({ error: { message: error.message } });
    }
}

