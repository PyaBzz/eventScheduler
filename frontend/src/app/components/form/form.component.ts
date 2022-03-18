import { Component, EventEmitter, Inject, Output } from '@angular/core';
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
  public entry!: Entry;

  @Output() public onSavedEvent = new EventEmitter();

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
          err => { } // todo: Handle error scenario
        )
    } else {
      this.entry = new Entry('Placeholder', new Date());
      this.isShown = true;
    }
  }

  public hide() {
    this.isShown = false;
  }

  public save() {
    //todo: validate input
    if (this.entry)
      this.entryService.save(this.entry).then(
        result => {
          this.onSavedEvent.emit();
          this.hide();
        },
        err => { } // todo: Handle error scenario
      );
  }

  public cancel() {
    this.hide();
  }
}
