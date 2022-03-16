import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { ApiServiceConcept } from './api.service.concept';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements ApiServiceConcept {

  constructor(private client: HttpClient) { }

  get() {
    return new Promise<any>(
      (resolver, rejector) => {
      });
  }

  post(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
