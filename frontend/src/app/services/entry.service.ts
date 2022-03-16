import { Injectable } from '@angular/core';
import { Entry } from '../types/entry';
import { EntryServiceConcept } from './entry.service.concept';

@Injectable({
  providedIn: 'root'
})
export class EntryService implements EntryServiceConcept {

  constructor() { }

  getAll(): Promise<Entry[]> {
    throw new Error('Method not implemented.');
  }

  get(id: number): Promise<Entry> {
    throw new Error('Method not implemented.');
  }

  save(entry: Entry): Entry {
    throw new Error('Method not implemented.');
  }
}
