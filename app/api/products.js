console.log("GETS INTO PRODUCTS");

import { initMongoose } from "@/lib/mongoose";
import Product from "../../models/Product";

export default async function handle(req, res) {

    console("gets into products");

    await initMongoose();

    res.json(await Product.find().exec());

}