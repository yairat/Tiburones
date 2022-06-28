const express = require('express');
const app = express();
const port = 404;
var router = express.Router();

var path = __dirname + '/views/';

router.use(function(req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function(req, res) {
    res.sendFile(path + "index.html");
});

router.get("/sharks", function(req, res) {
    res.sendFile(path + "sharks.html");
});

app.use(express.static(path));
app.use("/", router);



app.listen(port, () => {
    console.log('funcionando')
})