import { Model } from "spinal-core-connectorjs_type";
export interface TicketInterface {
    id?: string;
    stepId?: string;
    processId?: string;
    name: string;
    type?: string;
    note?: string;
    equipment?: string;
    state?: string;
    creationDate?: number;
    sourceId?: string;
    images?: string[];
    urls?: string[];
    categories?: string[];
    [key: string]: any;
}
export default class SpinalTicket extends Model {
    constructor(ticket: TicketInterface);
}
