import { Entry } from "../types/Entry";

export interface EntryServiceConcept {
    getAll(): Array<Entry>;
    get(id: number): Entry;
    save(name: string, start: Date, end: Date, id?: number): number;
}