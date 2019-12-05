"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const app_routes_1 = require(".././routes/app.routes");
const morgan = require("morgan");
const winston_1 = require("../config/winston");
const cors = require("cors");
const PORT = 3000;
class ExpressApp {
    constructor() {
        this.app = express();
        this._init();
    }
    _init() {
        this.app.use(cors());
        this.app.use(morgan('combined'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.app = new ExpressApp().app;
exports.app.use(app_routes_1.appRoutes);
exports.app.listen(process.env.PORT || PORT, () => {
    winston_1.myWinston.log("info", `server running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map