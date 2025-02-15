require("dotenv").config();
const express = require('express');
const z = require("zod");
const mongoose = require("mongoose");
const todo = require("./db");
const cors = require("cors");
const URI = process.env.MONGO_URI


mongoose.connect(URI)
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.error("DB connection error:", err);
    });

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

app.use(express.json());
app.use(cors());

app.post("/getTodos", async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    const verifyWithZod = z.object({
        title: z.string(),
        description: z.string(),
    })

    const validateInput = verifyWithZod.safeParse({ title, description });

    if (!validateInput.success) {
        return res.json({
            msg: "please enter valid data"
        })
    }

    const todos = new todo({
        title: title,
        description: description,
        completed: false
    })
    await todos.save()
    return res.json({
        todos: validateInput
    })
})

app.get("/getTodos", async (req, res) => {
    const todos = await todo.find()
    return res.json({
        todo: todos
    })
})

app.put("/completed", async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    const verifyWithZod = z.object({  
        title: z.string(),
        description: z.string(),
    })

    const validateInput = verifyWithZod.safeParse({ title, description });

    if (!validateInput.success) {
        return res.status(411).json({
            msg: "Please enter valid inputs"
        })
    }

    await todo.updateOne({
        _id: req.body._id
    }, {
        completed: true
    })

    res.json({
        status: "Todo marked as done"
    })
})