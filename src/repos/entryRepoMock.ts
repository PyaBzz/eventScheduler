import { injectable } from "tsyringe";
import { Entry } from "../types/Entry";
import { EntryRepoConcept } from "./entryRepoConcept";

@injectable()
export class EntryRepoMock implements EntryRepoConcept {
    private readonly data: Entry[] = [];

    constructor() {
        for (let i = 1; i <= 4; i++) {
            this.data.push(
                new Entry(i, 'Event' + i, new Date(), new Date(), 'Note' + i)
            );
        }
    }

    get(id?: number): Entry[] {
        if (id) {
            return this.data.filter(x => x.id === id);
        }
        return this.data;
    }
}