export interface SpinalLogTicket {
    id?: string;
    ticketId?: string;
    date?: number;
    steps: string[];
    [key: string]: any;
}
