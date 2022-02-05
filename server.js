const express = require('express');
const connectDb=require("./DB/connection")
const app = express();
connectDb();
const path = require('path');
const forSSL = function() {
    return function(req, res, next) {
        if (req.headers['x-forwardred-photo'] !== 'https') {
            return res.redirect(
                ['https://', req.get('host'), req.url].join(''));
        }
        next();
    }
}
app.use(express.static(__dirname + '/dist/HomeWebsite'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/HomeWebsite/index.html'))
})
app.listen(process.env.PORT || 8081)
