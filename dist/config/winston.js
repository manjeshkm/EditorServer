"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appRoot = require("app-root-path");
const winston = require("winston");
// define the custom settings for each transport (file, console)
const options = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
        format: winston.format.combine(winston.format.timestamp(), winston.format.prettyPrint()),
        datePattern: 'YYYY-MM-DD',
    },
    console: {
        level: 'info',
        handleExceptions: true,
        json: false,
        colorize: true,
        format: winston.format.combine(winston.format.timestamp(), winston.format.simple(), winston.format.colorize()),
        datePattern: 'YYYY-MM-DD',
        stream: true
    },
};
class MyLogger {
    constructor() {
        this._init();
    }
    _init() {
        this.logger = winston.createLogger({
            transports: [
                new winston.transports.Console(options.console),
                // new winston.transports.Stream(
                // ).on("pipe", (msg) => { this.logger.log(msg)}),
                new winston.transports.File(options.file)
            ]
        });
    }
}
const myWinston = new MyLogger().logger;
exports.myWinston = myWinston;
myWinston.stream = {
    write: function (message, encoding) {
        this.logger.info(message);
    }
};
//# sourceMappingURL=winston.js.map