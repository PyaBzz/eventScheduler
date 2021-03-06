import "reflect-metadata"
import { The } from '../refs'
import { assert } from 'chai'
import { EntryService } from './entryService'
import { Container } from '../diContainer'
import { Entry } from "../types/Entry"

describe(The.EntryService, () => {
    let instance: EntryService;
    beforeEach(() => {
        instance = Container.resolve(The.EntryService);
    });

    describe('getAll', () => {
        it('gets an array', () => {
            const res = instance.getAll();
            assert.typeOf(res, 'array');
        });

        it('gets Entries', () => {
            const res = instance.getAll()[0];
            assert.isTrue(res instanceof Entry);
        });
    });

    describe('get', () => {
        it('gets an Entry', () => {
            const res = instance.get(1);
            assert.isTrue(res instanceof Entry);
        });

        it('throws an error if not found', () => {
            const dummyId: number = -1;
            assert.throws(() => instance.get(dummyId), `Found no Entry with the id of ${dummyId}`);
        });
    });

    describe('save', () => {
        it('assigns id to new Entry', () => {
            const entry = new Entry('Event', new Date());
            instance.save(entry);
            assert.isNumber(entry.id);
        });

        it('returns the new Entry', () => {
            const entry = new Entry('Event', new Date());
            const res = instance.save(entry);
            assert.strictEqual(res, entry);
        });

        it('saves', () => {
            const entry = new Entry('Event', new Date());
            instance.save(entry);
            const retrieved = instance.get(entry.id);
            assert.isTrue(retrieved instanceof Entry);
        });
    });
});