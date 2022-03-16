import { Component, Inject, OnInit } from '@angular/core';
import { The } from 'src/app/refs';
import { EntryServiceConcept } from 'src/app/services/entry.service.concept';
import { Entry } from 'src/app/types/entry';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public entries: Promise<Entry[]>;

  constructor(
    @Inject(The.EntryService) private entryService: EntryServiceConcept
  ) {
    //todo: Throw error if service fails to hit backend or get result
    this.entries = this.entryService.getAll();
  }

  ngOnInit(): void {
  }
}
