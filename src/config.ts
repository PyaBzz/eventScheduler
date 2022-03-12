import * as devConfig from '../config/development.json'
import { Environment } from './types/refs';

export class Config {
    static get() {
        const env = process.env.NODE_ENV || Environment.dev;

        switch (env) {
            case Environment.dev:
                return devConfig;
            case Environment.prod:
                throw new Error(`Config file for environment ${Environment.prod} is missing`);
            default:
                throw new Error(`Config file for environment ${env} is missing`);
        }
    }
}
