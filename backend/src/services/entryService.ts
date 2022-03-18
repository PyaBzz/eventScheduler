import { EntryServiceConcept } from "./entryServiceConcept";
import { Entry } from "../types/Entry";
import { inject, injectable } from "tsyringe";
import { The } from "../refs";
import { EntryRepoConcept } from "../repos/entryRepoConcept";

@injectable()
export class EntryService implements EntryServiceConcept {

    constructor(
        @inject(The.EntryRepo) private repo: EntryRepoConcept
    ) { }

    public getAll(): Array<Entry> {
        return this.repo.get();
    }

    public get(id: number): Entry {
        const res = this.repo.get(id);
        if (res.length === 0)
            throw new Error(`Found no Entry with the id of ${id}`)
        if (res.length === 1)
            return res[0];
        throw new Error(`Data inconsistency. Found ${res.length} Entries with the id of ${id}`)
    }

    save(entry: Entry): Entry {
        // todo: add validation here for id > 0 and other props
        return this.repo.save(entry);
    }
}