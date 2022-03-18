import { Inject, Injectable } from '@angular/core';
import { The } from '../the.refs';
import { Entry } from '../types/entry';
import { ApiServiceConcept } from './api.service.concept';
import { EntryServiceConcept } from './entry.service.concept';

@Injectable({
  providedIn: 'root'
})
export class EntryService implements EntryServiceConcept {

  constructor(
    @Inject(The.ApiService) private api: ApiServiceConcept
  ) { }

  getAll(): Promise<Entry[]> {
    return this.api.get();
  }

  get(id: number): Promise<Entry> {
    return this.api.get(id);
  }

  save(entry: Entry): Promise<Entry> {
    return this.api.post(entry);
  }
}
