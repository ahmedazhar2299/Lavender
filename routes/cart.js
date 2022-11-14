import { Router } from "express";
import Cart from "../models/Cart.js";
const CartRoute = Router();

CartRoute.get("/", async (req, res) => {
    try {
        const Cart = await Cart.find();
        res.status(200).json(Cart);
    } catch (err) {
        res.status(500).json(err);
    }
});

CartRoute.get("/:id", async (req, res) => {
    try {
        if (req.params.id) {
            const Cart = await Cart.findById(req.params.id);
            res.status(200).json(Cart);
        } else {
            res.status(400).json("No Cart Found");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

CartRoute.post("/add", async (req, res) => {
    if (
        req.body.productId &&
        req.cookies.user._id &&
        req.body.quantity &&
        req.body.description &&
        req.body.price
    ) {
        const newProduct = {
            productId: req.body.productId,
            quantity: req.body.quantity,
            description: req.body.description,
            total: req.body.quantity * req.body.price,
        };
        try {
            const cart = await Cart.findOne({ userId: req.cookies.user._id })
            if (cart) {
                // let found = false;
                // cart.products.forEach(async (product) => {
                //     console.log(product.productId == req.body.productId)
                //     if (product.productId == req.body.productId){
                //         await cart.updateOne({
                //             $set: {
                //                 products: 
                //                 {
                //                     ...product,
                //                     "quantity": product.quantity + req.body.quantity,
                //                     "total": (product.quantity + req.body.quantity) * req.body.price,
                //                 },
                //             },
                //         });
                //         found = true;
                //     } 
                // })
                // if(!found){
                //     await cart.updateOne({
                //         $push: {
                //             products: newProduct,
                //         },
                //     });
                // }

                cart.updateOne({
                    $set: cart.products.map(product => {
                        return (product.productId == req.body.productId) ?
                            ({
                                "productId": product.productId,
                                "description": product.description,
                                "quantity": product.quantity + req.body.quantity,
                                "total": (product.quantity + req.body.quantity) * req.body.price,
                            })
                            :
                            product
                    })
                })
                res.status(200).json("Item added to cart successfully");
            } else {
                const newCart = await new Cart({
                    userId: req.cookies.user._id,
                    products: [newProduct]
                });
                newCart.save();
                res.status(200).json("New product created Successfully");
            }
        } catch (err) {
            res.status(403).json(err);
        }
    } else {
        res.status(500).json("Failed to add item to cart");
    }
});

CartRoute.post("/:Cartid/rate", async (req, res) => {
    try {
        if (req.body.name && req.body.description && req.cookies.user._id) {
            const rating = {
                userid: req.cookies.user._id,
                name: req.body.name,
                description: req.body.description,
            };
            const currentCart = await Cart.findById(req.params.Cartid);
            await currentCart.updateOne({
                $push: { rating: rating },
            });
            res.status(200).json("Succesfully added a rating");
        } else {
            res.status(400).json("Unable to set profile picture");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});
export default CartRoute;
