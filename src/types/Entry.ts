export class Entry {
    constructor(
        public id: number,
        public title: string,
        public start: Date,
        public end: Date,
        public note?: string
    ) {
    }
}