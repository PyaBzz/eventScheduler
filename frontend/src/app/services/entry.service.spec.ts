import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EntryServiceConcept } from './entry.service.concept';
import { EntryService } from './entry.service';
import { ApiService } from './api.service';
import { TestBed } from '@angular/core/testing';
import { The } from '../the.refs';


describe('EntryService', () => {
  let service: EntryServiceConcept;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: The.EntryService, useClass: EntryService },
        { provide: The.ApiService, useClass: ApiService }
      ]
    });
    service = TestBed.inject(EntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
