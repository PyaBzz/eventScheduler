export interface ApiServiceConcept {
    get(id?: number): Promise<any>;
    post(payload: any): Promise<any>;
}
