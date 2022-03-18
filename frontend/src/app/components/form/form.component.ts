import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  public isShown: boolean = false;
  public id: number | undefined;
  constructor() { }

  public show(entryId: number | undefined) {
    this.id = entryId;
    this.isShown = true;
  }

  public hide() {
    this.isShown = false;
  }

  public save() {
    this.hide();
  }

  public cancel() {
    this.hide();
  }
}
