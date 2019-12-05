"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnvConfig {
    constructor() {
        this.env = process.env.NODE_ENV || 'dev';
        this.assignConfig();
    }
    assignConfig() {
        console.log("entering config.ts");
        if (this.env === 'dev' || this.env === 'test') {
            const config = require('./config.json');
            const envConfig = config[this.env];
            Object.keys(envConfig).forEach((key) => {
                process.env[key] = envConfig[key];
            });
        }
    }
}
exports.EnvConfig = EnvConfig;
//# sourceMappingURL=config.js.map