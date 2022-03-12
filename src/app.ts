import express from 'express';
import { Config } from './config';

const config = Config.get();
const app = express();

app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(config.port, () => {
    console.log(`${config.launchMessage} at localhost::${config.port}`);
});
