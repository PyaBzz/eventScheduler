import { Entry } from "../types/entry";

export interface EntryServiceConcept {
    getAll(): Promise<Entry[]>;
    get(id: number): Promise<Entry>;
    save(entry: Entry): Entry;
}
