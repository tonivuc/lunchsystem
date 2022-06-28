const express = require("express")
const app = express();

app.use(express.json());


app.post('/', (req, res) => {
    res.send(404);
});

const lunchWishesRouter = require('./routes/lunchWishes');

app.use("/lunch-wishes", lunchWishesRouter);
app.listen(3000);

