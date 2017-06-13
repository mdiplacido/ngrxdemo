import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css']
})
export class FilterSelectComponent implements OnInit {
    public filters = [
        {friendly: 'All', action: SHOW_ALL},
        {friendly: 'Attending', action: SHOW_ATTENDING},
        {friendly: 'Attending w/ Guests', action: SHOW_WITH_GUESTS}
      ];

    @Output() updateFilter: EventEmitter<string> = new EventEmitter<string>();
}
