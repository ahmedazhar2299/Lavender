import { Router } from "express";
import Order from "../models/Order.js";
import Cart from '../models/Cart.js'
const orderRoute = Router();

const generateCurrentDate = () => {
    const Today = new Date();
    return `${Today.getDay()+1}/${Today.getMonth() + 1}/${Today.getFullYear()}`;
}

orderRoute.get("/all", async (req, res) => {
    try {
        if (req.cookies.user._id && req.cookies.user.isAdmin=="true") {
            const order = await Order.find()
            if (order.length>0)
                res.status(200).json(order)
            else
                res.status(404).json("No order found")
        }
        else {
            res.status(404).json("Authentication Error");
        }

    }
    catch (err) {
        res.status(500).json(err)
    }
})


orderRoute.get("/", async (req, res) => {
    try {
        if (req.cookies.user._id) {
            const order = await Order.findOne({
                "userId" : req.cookies.user._id
            })
            if (order)
                res.status(200).json(order.orderData)
            else
                res.status(404).json("No order found")
        }
        else {
            res.status(404).json("Authentication Error");
        }

    }
    catch (err) {
        res.status(500).json(err)
    }
})



orderRoute.get("/:orderId", async (req, res) => {
    try {
        if (req.cookies.user._id) {

            const order = await Order.find()
            let requestedOrder = []
            order.forEach(orderList=>orderList.orderData.forEach(ord => {
                
                if(ord.orderId == req.params.orderId)
                    requestedOrder=ord
            }))
            if (requestedOrder)
                res.status(200).json(requestedOrder)
            else
                res.status(404).json(requestedOrder)

        }
        else {
            res.status(404).json("Authentication Error");
        }

    }
    catch (err) {
        res.status(500).json(err)
    }
})

orderRoute.put("/checkout", async (req, res) => {
    try {
        console.log( req.body.address);
        if (req.cookies.user._id && req.body.address) {

            const cart = await Cart.findOne({
                "userId": req.cookies.user._id
            })
            const myOrder = {
                orderId: Math.floor(Math.random() * 9999) + 1,
                date: generateCurrentDate(),
                products: cart.products,
                address : req.body.address
            }

            const order = await Order.findOne({ userId: req.cookies.user._id })
            if (order) {
                await order.updateOne({
                    $push: {
                        orderData: myOrder
                    }
                })
            }
            else {
                const myNewOrder = {
                    userId: req.cookies.user._id,
                    orderData: [myOrder],
                }
                const newOrder = await new Order(myNewOrder)
                newOrder.save();
            }
            cart.delete();
            res.status(200).json("New Order Added Succesfully");


        }
        else {
            res.status(404).json("Authentication Error");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

export default orderRoute;