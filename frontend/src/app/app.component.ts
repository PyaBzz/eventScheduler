import { Component, ViewChild } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild(FormComponent) form!: FormComponent;
  @ViewChild(ListComponent) list!: ListComponent;

  onShowForm(entryId: number | undefined) {
    this.form.show(entryId);
  }

  onFormSaved() {
    this.list.refresh();
  }
}
