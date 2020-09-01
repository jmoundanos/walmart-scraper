const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    // id: {type: String, required: true, unique: true},
    //  brand_name: {type: String, required: true},
    product_title: {type: String, required: true, unique: true},
    //  price: {type: Number, required: true},
    // model_number: {type: String, required: true},
    //  link: {type: String, trim: true}
})
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;