import { Model } from "spinal-core-connectorjs_type";
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
export default class SpinalTicket extends Model {
    constructor(ticket: TicketInterface);
}
