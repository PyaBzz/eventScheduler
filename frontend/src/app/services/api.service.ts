import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
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
        const subscription = this.client.get<any>('http://localhost:3000') //todo: get from config
          .subscribe({
            next: result => resolveCallback(result),
            error: er => { throw new Error(er) },
            complete: () => { subscription.unsubscribe() }
          });
      });
  }

  post(payload: any): Promise<any> {
    return new Promise<any>(
      (resolveCallback, rejectCallback) => {
        const subscription = this.client.post<any>('http://localhost:3000', payload) //todo: get from config
          .subscribe({
            next: result => resolveCallback(result),
            error: er => { throw new Error(er) },
            complete: () => { subscription.unsubscribe() }
          });
      });
  }
}
