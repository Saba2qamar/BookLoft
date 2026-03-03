const router = require("express").Router();
const { authenticateToken } = require("./userAuth");
const Book = require("../models/book");
const Order = require("../models/order");
const User = require("../models/user");

//place order
router.post("/place-order", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const { bookid } = req.body;

    console.log("User ID:", id, "Book ID:", bookid); // debug

    if (!bookid) return res.status(400).json({ message: "Book ID is required" });

    const newOrder = new Order({ user: id, book: bookid });
    const savedOrder = await newOrder.save();

    console.log("Saved Order:", savedOrder); // debug

    await User.findByIdAndUpdate(id, { $push: { orders: savedOrder._id } });
    await User.findByIdAndUpdate(id, { $pull: { cart: bookid } });

    return res.json({ status: "Success", message: "Order Placed Successfully" });
  } catch (error) {
    console.error("Place Order Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
//get order history of particular user
router.get("/get-order-history", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;

    const userData = await User.findById(id).populate({
      path: "orders",
      populate: { path: "book" },
    });

    const ordersData = userData.orders.reverse();

    return res.json({
      status: "Success",
      data: ordersData,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

//get-all-orders ---admin
router.get("/get-all-orders", authenticateToken, async (req, res) => {
  try {
    const userData = await Order.find()
      .populate({
        path: "book",
      })
      .populate({
        path: "user",
      })
      .sort({ createdAt: -1 });

    return res.json({
      status: "Success",
      data: userData,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

//update order --admin
router.put("/update-status/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    await Order.findByIdAndUpdate(id, {
      status: req.body.status,
    });

    return res.json({
      status: "Success",
      message: "Status Updated Successfully",
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});


module.exports = router;
