/*
 * Copyright 2019 SpinalCom - www.spinalcom.com
 *
 *  This file is part of SpinalCore.
 *
 *  Please read all of the following terms and conditions
 *  of the Free Software license Agreement ("Agreement")
 *  carefully.
 *
 *  This Agreement is a legally binding contract between
 *  the Licensee (as defined below) and SpinalCom that
 *  sets forth the terms and conditions that govern your
 *  use of the Program. By installing and/or using the
 *  Program, you agree to abide by all the terms and
 *  conditions stated or referenced herein.
 *
 *  If you do not agree to abide by these terms and
 *  conditions, do not demonstrate your acceptance and do
 *  not install or use the Program.
 *  You should have received a copy of the license along
 *  with this file. If not, see
 *  <http://resources.spinalcom.com/licenses.pdf>.
 */

import { Model } from "spinal-core-connectorjs_type"


const spinalCore = require('spinal-core-connectorjs');

export interface SpinalLogTicketInterface {
  id?: string;
  ticketId?: string;
  date?: number;
  steps: string[]; // 0 from 1 to
  [key: string]: any;
}
export default class SpinalLogTicket extends Model {

  constructor(log: SpinalLogTicketInterface) {
    super();
    log['creationDate'] = Date.now();
    this.add_attr(log);
  }
}

spinalCore.register_models(SpinalLogTicket);