export class Entry {
    constructor(
        public title: string,
        public start: Date,
        public end?: Date,
        public note?: string,
        public id?: number
    ) {
    }
}