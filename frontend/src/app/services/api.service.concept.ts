export interface ApiServiceConcept {
    get(): Promise<any>;
    post(payload: any): Promise<any>;
}
