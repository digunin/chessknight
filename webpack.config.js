const path = require("path")


module.exports = {
    entry: "./frontend/index.js",
    output: {
        path: path.join(__dirname, "/static/js"),
        filename: "bundle.js"
    },
};