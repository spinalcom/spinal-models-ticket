"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spinal_core_connectorjs_type_1 = require("spinal-core-connectorjs_type");
const spinalCore = require("spinal-core-connectorjs");
class SpinalTicket extends spinal_core_connectorjs_type_1.Model {
    constructor(ticket) {
        super();
        ticket['creationDate'] = Date.now();
        this.add_attr(ticket);
    }
}
exports.default = SpinalTicket;
spinalCore.register_models(SpinalTicket);
//# sourceMappingURL=SpinalTicket.js.map