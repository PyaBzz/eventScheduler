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
  public entry: Entry | undefined;
  constructor(
    @Inject(The.EntryService) private entryService: EntryServiceConcept
  ) { }

  public show(entryId: number | undefined) {
    if (entryId) {
      this.entryService.get(entryId)
        .then(
          result => {
            this.entry = result;
            this.isShown = true;
          },
          err => { } // todo: What should happen here?
        )
    } else {
      this.entry = new Entry('New Entry', new Date());
      this.isShown = true;
    }
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
