import { Schema, model } from "mongoose";
import { toJSON } from '@reis/mongoose-to-json'

const ticketSchema = new Schema({
    avatar: { type: String },
    fullName: { type: String },
    email: { type: String, unique: true },
    github: { type: String, unique: true },
}, {
    timestamps: true
})

ticketSchema.plugin(toJSON)

export const TicketModel = model('Ticket', ticketSchema)