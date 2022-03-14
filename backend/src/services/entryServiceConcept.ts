import { Entry } from "../types/Entry";

export interface EntryServiceConcept {
    getAll(): Array<Entry>;
    get(id: number): Entry;
    save(entry: Entry): Entry;
}