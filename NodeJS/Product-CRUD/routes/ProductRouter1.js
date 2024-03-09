import express from 'express'
import Product from '../model/Product.js'

let router = express.Router()

//impliment product Apis
router.get("/test", (req, resp) => {
    resp.send("Routing")
})
/* 
Use:create product
URL:localhost:8080/products/
method:POST
Req Fields: name, image, price,qty
*/
router.post("/", async (req, resp) => {
    console.log("inside create product")
    try {
        var new_Product = {
            id: req.body.id,
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            qty: req.body.qty,
        }
        let product = Product(new_Product)
        product = await product.save()
        resp.status(200).json({ message: "product created", product: product })
    }
    catch (err) {
        if (err) throw err
        resp.status(500).json({ message: "unable to upload", err: err })
    }
})
router.get("/", async (req, resp) => {
    console.log("test case 123")
    try {
        let products = await Product.find()
        resp.status(200).json({ products: products })
    }
    catch (err) {
        if (err) throw err
        resp.status(500).json({ message: "unable to Fetch", err: err })
    }
})

export default router
/*  if (!product) {
             resp.status(404).json({ msg: "Product not found" });
         } else {
             resp.status(200).json({ msg: "Displaying product", product: product });
         } */