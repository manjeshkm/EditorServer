import * as express from "express";
import * as bodyParser from "body-parser";
import {appRoutes} from ".././routes/app.routes";
import * as morgan from "morgan";
import {myWinston} from "../config/winston";
import {EnvConfig} from "../config/config";
import {whiteListedOrigins}  from '../white-lists';
import * as cors from 'cors'

const PORT = 3000;

class ExpressApp {

    public app: express.Application;

    constructor() {
        this.app = express();
        this._init();
    }

    private _init(): void {
        this.app.use(cors());
        this.app.use(morgan('combined'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }
}

export const app = new ExpressApp().app;
app.use(appRoutes);
app.listen(process.argv[3] || PORT, () => {
    myWinston.log("info", `server running on port ${process.argv[3] || PORT}`);
});
