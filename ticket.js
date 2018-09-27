var exports = (module.exports = {});
var spinalCore = require("spinal-core-connectorjs");
// import model from "spinal-models-bim_forge";

var SpinalTicket = class SpinalTicket extends Model {
  constructor(name = "group Alert", color = "blue") {
    super();

    this.add_attr({
      _id: "",
      name: "",
      type: "SpinalTicket",
      note: "",
      equipment: "",
      date: Date.now(),
      image: [],
      url: [],
      state: ""
    });
  }
};
exports.SpinalTicket = SpinalTicket;
spinalCore.register_models(SpinalTicket);

var SpinalProcess = class SpinalProcess extends Model {
  constructor(name = "group Alert", color = "blue") {
    super();

    this.add_attr({
      name: name,
      color: "#356BAB",
      type: "SpinalProcess",
      icon: "",
      step: [],
      allObject: []
    });
  }
};
exports.SpinalProcess = SpinalProcess;
spinalCore.register_models(SpinalProcess);

var SpinalStep = class SpinalStep extends Model {
  constructor(name = "group Alert", color = "blue") {
    super();

    this.add_attr({
      name: "",
      type: "SpinalStep",
      color: "",
      allObject: []
    });
  }
};
exports.SpinalStep = SpinalStep;
spinalCore.register_models(SpinalStep);
