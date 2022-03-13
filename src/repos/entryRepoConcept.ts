import { Entry } from "../types/Entry";

export interface EntryRepoConcept {
    get(id?: number): Array<Entry>;
    save(entry: Entry): Entry;
}