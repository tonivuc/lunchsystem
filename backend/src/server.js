const express = require("express")
const app = express();

app.use(express.json());


app.post('/', (req, res) => {
    res.send(404);
});

app.use("/api/lunch-wishes", require('./routes/api/lunchWishes'));
app.listen(3000);

