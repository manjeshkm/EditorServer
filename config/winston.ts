import  * as appRoot from "app-root-path";
import * as winston from "winston";


// define the custom settings for each transport (file, console)
const options = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.prettyPrint(),
        ),
        datePattern: 'YYYY-MM-DD',
    },
    console: {
        level: 'info',
        handleExceptions: true,
        json: false,
        colorize: true,
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.simple(),
            winston.format.colorize()
        ),
        datePattern: 'YYYY-MM-DD',
        stream: true
    },
};

class MyLogger {
public  logger;
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
myWinston.stream = {
    write: function(message, encoding){
        this.logger.info(message);
    }
}
export { myWinston };
