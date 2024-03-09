import express from 'express'
let productRoute = express.Router()

import Product from '../model/Product.js'

// Create a new product
productRoute.post("/product", async (req, resp) => {
    try {
        const product = await Product.create(req.body);
        resp.status(200).json({ product, msg: "Product created" });
    } catch (error) {
        resp.status(400).json({ error: "Product not created" });
    }
});


// Get all products
productRoute.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ products, msg: "Gett all products" });
    } catch (err) {
        res.status(500).json({ error: 'Server error', message: err.message });
    }
});

// Get a single product by ID
productRoute.get('/product/:id', async (req, res) => {
    try {
        let productid = await Product.findById(req.params.id);
        if (!productid) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ productid, msg: "get single product" });
    } catch (err) {
        res.status(500).json({ error: 'Server error', message: err.message });
    }
});

// Update a product by ID
productRoute.put('/product/:id', async (req, res) => {
    try {
        let updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ updatedProduct, msg: "Updated Succesfuly" });

    } catch (err) {
        res.status(500).json({ error: 'Server error', message: err.message });
    }
});

// Delete a product by ID
productRoute.delete('/product/:id', async (req, res) => {
    try {
        let deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted' });

    } catch (err) {
        res.status(500).json({ error: 'Server error', message: err.message });
    }
});


export default productRoute