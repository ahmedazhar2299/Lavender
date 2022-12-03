import { Router } from "express";
import Cart from "../models/Cart.js";
const CartRoute = Router();

CartRoute.get("/", async (req, res) => {
    try {
        const cart = await Cart.findOne({ "userId": req.cookies.user._id });
        res.status(200).json(cart.products);
    } catch (err) {
        res.status(500).json(err);
    }
});

let addQuantity = (products, product, addedQuantity, addedPrice) => {

    let filteredCart = products.filter(prod => prod != product);
    filteredCart === [] ? {
        ...product,
        "quantity": parseInt(product.quantity) + parseInt(addedQuantity),
        "total": ((product.quantity + addedQuantity) * addedPrice).toFixed(2),
    } : filteredCart.push({
        ...product,
        "quantity": parseInt(product.quantity) + parseInt(addedQuantity),
        "total": ((product.quantity + addedQuantity) * addedPrice).toFixed(2),
    })
    return filteredCart
}


let removeQuantity = (products, product, removeItemQuantity, removeItemPrice) => {

    let filteredCart = products.filter(prod => prod != product);
    if (removeItemQuantity >= product.quantity) {
        return filteredCart
    }
    else {
        filteredCart === [] ? {
            ...product,
            "quantity": parseInt(product.quantity) - parseInt(removeItemQuantity),
            "total": ((product.quantity - removeItemQuantity) * removeItemPrice).toFixed(2),
        } : filteredCart.push({
            ...product,
            "quantity": parseInt(product.quantity) - parseInt(removeItemQuantity),
            "total": ((product.quantity - removeItemQuantity) * removeItemPrice).toFixed(2),
        })
    }
    return filteredCart
}

CartRoute.delete("/delete/:productId", async (req, res) => {
    try {
        if (
            req.params.productId &&
            req.cookies.user._id
        ) {

            const cart = await Cart.findOne({ userId: req.cookies.user._id })
            if (cart) {
                let found = false;
                cart.products.forEach(async (product) => {
                    if (product.productId == req.params.productId) {
                        found = true;
                        await cart.updateOne({
                            $pull: {
                                products: product
                            }
                        })
                    }
                })
                if (cart.products.length === 0) cart.delete();
                if (!found) {
                    res.status(404).json("Item not Found");
                }
                else
                    res.status(200).json("Item removed from cart successfully");

            } else {
                res.status(402).json("No item added in cart");
            }

        } else {
            res.status(500).json("Failed to remove item to cart");
        }
    } catch (err) {
        res.status(403).json(err);
    }
});



CartRoute.post("/remove", async (req, res) => {
    try {
        if (
            req.body.productId &&
            req.cookies.user._id &&
            req.body.quantity &&
            req.body.price &&
            req.body.color &&
            req.body.size
        ) {

            const cart = await Cart.findOne({ userId: req.cookies.user._id })
            if (cart) {
                let found = false;
                cart.products.forEach(async (product) => {
                    if (product.productId == req.body.productId && product.color === req.body.color && product.size === req.body.size) {
                        found = true;
                        let updatedCart = removeQuantity(cart.products, product, req.body.quantity, req.body.price)
                        if (updatedCart.length === 0)
                            cart.delete()
                        else {
                            await cart.updateOne({
                                $set: {
                                    products: removeQuantity(cart.products, product, req.body.quantity, req.body.price)
                                },
                            });
                        }
                    }
                })
                if (!found) {
                    res.status(404).json("Item not Found");
                }
                else
                    res.status(200).json("Item removed from cart successfully");

            } else {
                res.status(402).json("No item added in cart");
            }

        } else {
            res.status(500).json("Failed to remove item to cart");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});



CartRoute.post("/add", async (req, res) => {
    try {
        if (
            req.body.productId &&
            req.cookies.user._id &&
            req.body.quantity &&
            req.body.price &&
            req.body.color &&
            req.body.size
        ) {
            const newProduct = {
                productId: req.body.productId,
                quantity: req.body.quantity,
                total: req.body.quantity * req.body.price,
                color : req.body.color,
                size : req.body.size
            };

            const cart = await Cart.findOne({ userId: req.cookies.user._id })
            if (cart) {
                let found = false;
                cart.products.forEach(async (product) => {
                    if (product.productId === req.body.productId && product.color === req.body.color && product.size === req.body.size) {
                        found = true;
                        await cart.updateOne({
                            $set: {
                                products: addQuantity(cart.products, product, req.body.quantity, req.body.price)
                            },
                        });
                    }
                })
                if (!found) {
                    await cart.updateOne({
                        $push: {
                            products: newProduct,
                        },
                    });
                }
                res.status(200).json("Item added to cart successfully");
            } else {
                const newCart = await new Cart({
                    userId: req.cookies.user._id,
                    products: [newProduct]
                });
                newCart.save();
                res.status(200).json("New product created Successfully");
            }

        } else {
            res.status(500).json("Failed to add item to cart");
        }
    } catch (err) {
        res.status(500).json(err);
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
