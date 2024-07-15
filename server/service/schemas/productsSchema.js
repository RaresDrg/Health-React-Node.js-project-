import { Schema, model } from "mongoose";

const schema = new Schema({}, { versionKey: false, collection: "products" });

const Product = model("products", schema);

export default Product;
