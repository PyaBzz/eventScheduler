import "reflect-metadata"
import { The } from './refs';
import { Config } from './config';
import { Container } from './diContainer'
import express, { Request, Response } from 'express';
import bodyParser from "body-parser";
import { EntryServiceConcept } from "./services/entryServiceConcept";
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET, POST'
}
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
// todo: Resolve directly since there's no controller constructor involved
const entryService: EntryServiceConcept = Container.resolve(The.EntryService);

app.get('/', (req: Request, res: Response) => {
    const id = Number.parseInt(req.query.id as string);
    if (id) {
        res.send(entryService.get(id));
    } else {
        res.send(entryService.getAll());
    }
});

app.post('/', (req: Request, res: Response) => {
    const entry = entryService.save(req.body)
    console.log(entry);
    res.send('Dasoo');
});

const config = Config.get();
app.listen(config.port, () => {
    console.log(`${config.launchMessage} at localhost:${config.port}`);
});
