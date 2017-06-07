import {
  Component,
  EventEmitter,
  OnInit,
  Output
  } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  @Output() addPerson = new EventEmitter();

  constructor() { }

  add(personInput) {
    this.addPerson.emit(personInput.value);
    personInput.value = '';
  }
}
