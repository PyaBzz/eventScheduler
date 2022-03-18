import { Component, ViewChild } from '@angular/core';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild(FormComponent) form!: FormComponent;

  onShowForm(entryId: number | undefined) {
    this.form.show(entryId);
  }
}
