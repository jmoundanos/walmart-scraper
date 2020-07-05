const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    _id: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    price: {type: Number, required: true}
})
const Item = mongoose.model("Item", itemSchema);

module.export = Item;