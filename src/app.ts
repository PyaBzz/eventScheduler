import "reflect-metadata"
import { The } from './refs';
import { Config } from './config';
import { Container } from './diContainer'
import express, { Request, Response } from 'express';
import { EntryServiceConcept } from "./services/entryServiceConcept";

const app = express();
app.get('/', (req: Request, res: Response) => {
    // todo: Resolve directly since there's no controller constructor involved
    const entryService: EntryServiceConcept = Container.resolve(The.EntryService);
    res.send(entryService.getAll());
});

const config = Config.get();
app.listen(config.port, () => {
    console.log(`${config.launchMessage} at localhost::${config.port}`);
});
