import { Component, Inject } from '@angular/core';
import { EntryServiceConcept } from 'src/app/services/entry.service.concept';
import { The } from 'src/app/the.refs';
import { Entry } from 'src/app/types/entry';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  public isShown: boolean = false;
  public id: number | undefined;
  constructor(
    @Inject(The.EntryService) private entryService: EntryServiceConcept
  ) { }

  public show(entryId: number | undefined) {
    this.id = entryId;
    this.isShown = true;
  }

  public hide() {
    this.isShown = false;
  }

  public save() {
    this.entryService.save(new Entry('Event', new Date()));
    //todo: verfiy success before hiding
    this.hide();
  }

  public cancel() {
    this.hide();
  }
}
