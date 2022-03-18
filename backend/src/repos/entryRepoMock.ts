import { injectable, singleton } from "tsyringe";
import { Entry } from "../types/Entry";
import { EntryRepoConcept } from "./entryRepoConcept";

@singleton()
export class EntryRepoMock implements EntryRepoConcept {
    private readonly data: Entry[] = [];

    constructor() {
        this.populate();
    }

    get(id?: number): Entry[] {
        if (id) {
            return this.data.filter(x => x.id === id);
        }
        return this.data;
    }

    save(entry: Entry): Entry {
        if (entry.id) {
            for (let i = 0; i < this.data.length; i++)
                if (this.data[i].id === entry.id)
                    this.data[i] = entry;
            return entry;
        }
        const maxId = Math.max.apply(Math, this.data.map(x => x.id));
        entry.id = maxId + 1;
        this.data.push(entry);
        return entry;
    }

    private populate() {
        let id = 1;
        for (let i = -2; i <= 2; i++) {
            const start = new Date();
            start.setHours(start.getHours() + i);
            this.data.push(
                new Entry('Event' + id, start, null, 'Note' + id, id)
            );
            id++;
        }
    }
}