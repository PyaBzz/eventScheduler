import { EntryServiceConcept } from "./entryServiceConcept";
import { Entry } from "../types/Entry";
import { injectable } from "tsyringe";

@injectable()
export class EntryService implements EntryServiceConcept {
    public get(): Array<Entry> {
        return [
            new Entry(1)
        ];
    }
}