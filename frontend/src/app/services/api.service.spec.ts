import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ApiServiceConcept } from './api.service.concept';
import { ApiService } from './api.service';
import { TestBed } from '@angular/core/testing';
import { The } from '../refs';

describe('ApiService', () => {
  let service: ApiServiceConcept;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: The.ApiService, useClass: ApiService }
      ]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
