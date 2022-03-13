export class Entry {
    id: number;
    name: string = 'NewEvent';
    start: Date = new Date();
    end?: Date;

    constructor(id: number) {
        this.id = id;
    }
}