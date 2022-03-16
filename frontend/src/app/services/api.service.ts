import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Entry } from '../types/entry';
import { ApiServiceConcept } from './api.service.concept';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements ApiServiceConcept {

  constructor(
    private client: HttpClient
  ) { }

  get() {
    return new Promise<any>(
      (resolveCallback, rejectCallback) => {
        const subscription = this.client.get<Entry[]>('http://localhost:3000')
          .subscribe({
            next: result => resolveCallback(result),
            error: er => { throw new Error(er) },
            complete: () => { subscription.unsubscribe() }
          });
      });
  }

  post(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
