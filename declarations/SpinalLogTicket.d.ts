import { Model } from "spinal-core-connectorjs_type";
export interface SpinalLogTicketInterface {
    id?: string;
    ticketId?: string;
    date?: number;
    steps: string[];
    [key: string]: any;
}
export default class SpinalLogTicket extends Model {
    constructor(log: SpinalLogTicketInterface);
}
