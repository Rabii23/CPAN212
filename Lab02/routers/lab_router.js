import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to the lab router");
});

// /lab/name
router.get("/name", (req, res) => {
    res.send("Rabii Ait Haji");
});

router.get("/greetings", (req, res) => {
    res.send("Hello, I am Rabii");
});

// /lab/operation/x/y
router.get("/:operation/:x/:y", (req, res) => {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    let operation = req.params.operation;

    if (isNaN(x) || isNaN(y)) {
        return res.send("Invalid numbers");
    }

    let result;

    switch (operation) {
        case "add":
            result = x + y;
            break;
        case "subtract":
            result = x - y;
            break;
        case "multiply":
            result = x * y;
            break;
        case "divide":
            if (y === 0) {
                return res.send("Cannot divide by zero");
            }
            result = x / y;
            break;
        default:
            return res.send("Invalid operation");
    }

    res.send(`${result}`);
});

export default router;
