const express = require("express")
const app = express();
const port = 5000;

app.use(express.json());

app.post('/', (req, res) => {
    res.send(404);
});

app.use("/api/lunch-wishes", require('./routes/api/lunchWishes'));
app.listen(port);

