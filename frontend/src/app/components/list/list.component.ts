import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, Output, EventEmitter } from '@angular/core';
import { The } from 'src/app/the.refs';
import { EntryServiceConcept } from 'src/app/services/entry.service.concept';
import { Entry } from 'src/app/types/entry';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  public entries: Promise<Entry[]>;

  @Output() public showFormEvent = new EventEmitter<number | undefined>();

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    @Inject(The.EntryService) private entryService: EntryServiceConcept
  ) {
    //todo: Throw error if service fails to hit backend or get result
    this.entries = this.entryService.getAll();
  }

  public format(date: Date): string {
    return formatDate(date, 'yyyy/MM/dd @ HH:mm:ss', this.locale);
  }

  onClick(entryId: number | undefined) {
    // alert('List says ' + entryId);
    this.showFormEvent.emit(entryId);
  }
}
