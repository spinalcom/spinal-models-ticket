import {Model} from "spinal-core-connectorjs_type"
const spinalCore = require("spinal-core-connectorjs");

export interface TicketInterface {
    id?: string;
    name: string;
    type?: string;
    note?: string;
    equipment?: string;
    state?: string;
    creationDate?: number;
    images?: string[];
    urls?: string[];
    categories?: string[];
}

export default class SpinalTicket extends  Model{

    constructor(ticket : TicketInterface) {
        super();
        ticket['creationDate'] = Date.now();
        this.add_attr(ticket);
    }
}

spinalCore.register_models(SpinalTicket);