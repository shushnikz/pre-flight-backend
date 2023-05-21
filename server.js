const express = require("express");
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Add Two Numbers")
})

// api end point to add two numbers
app.post('/add', (req, res) => {
    const { number1, number2 } = req.body;
    const sum = Number(number1) + Number(number2);
    res.json({ result: sum });
});


const PORT = 5000;

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`))
