import { Inject, Injectable } from '@angular/core';
import { The } from '../refs';
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
    throw new Error('Method not implemented.');
  }

  save(entry: Entry): Entry {
    throw new Error('Method not implemented.');
  }
}
