const express = require('express');
const { connection } = require('./config/db')
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const { routeShopingList } = require('./routes/shopinglist.route')
const { routeBookmark } = require('./routes/bookmark.route')
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome To Home")
})
app.use("/shopinglist", routeShopingList)
app.use("/bookmark", routeBookmark)


app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to db successfully")
    }
    catch (err) {
        console.log(err);
    }

    console.log(`listining on ${PORT}`);
})