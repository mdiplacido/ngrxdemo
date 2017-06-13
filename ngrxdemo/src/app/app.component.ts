import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {
  ADD_GUEST,
  ADD_PERSON,
  REMOVE_GUEST,
  REMOVE_PERSON,
  TOGGLE_ATTENDING
  } from './actions/actions';
import { Component, OnDestroy } from '@angular/core';
import { id } from './id';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements OnDestroy {
export class AppComponent {
  title = 'app';

  // public people: Observable<any>;
  // public filter: Observable<any>;
  // public attending: Observable<any[]>;
  // public guests: Observable<number>;
  // private subscription;

  public model: Observable<any>;

  constructor(
    private _store: Store<any>
  ) {
    /*
      demonstrating use without the async pipe,
      we will explore the async pipe in the next lesson
    */
    // this.people = this._store
    //   .select('people')
    //   .subscribe(people => {
    //     this.people = people;
    //   });

    /*
      Observable of people, utilzing the async pipe
      in our templates this will be subscribed to, with
      new values being dispayed in our template.
      Unsubscribe wil be called automatically when component
      is disposed.
    */
    // this.people = this._store.select('people');

    //   /*
    //     this is a naive way to handle projecting state, we will discover a better
    //     Rx based solution in next lesson
    //   */
    // this.filter = _store.select('partyFilter');
    // this.attending = this.people.map(p => p.filter(person => person.attending));
    // this.guests = this.people
    //   .map(p => p.map(person => person.guests)
    //     .reduce((acc, curr) => acc + curr, 0));

    this.model = Observable.combineLatest(
      this._store.select('people'),
      this._store.select('partyFilter'),
      (people: Array<any>, filter: any) => {
        return {
          total: people.length,
          people: people.filter(filter),
          attending: people.filter(person => person.attending).length,
          guests: people.reduce((acc, curr) => acc + curr.guests, 0)
        }
    });
  }
  // all state-changing actions get dispatched to and handled by reducers
  addPerson(name) {
    this._store.dispatch({ type: ADD_PERSON, payload: { id: id(), name } });
  }

  addGuest(id) {
    this._store.dispatch({ type: ADD_GUEST, payload: id });
  }

  removeGuest(id) {
    this._store.dispatch({ type: REMOVE_GUEST, payload: id });
  }

  removePerson(id) {
    this._store.dispatch({ type: REMOVE_PERSON, payload: id });
  }

  toggleAttending(id) {
    this._store.dispatch({ type: TOGGLE_ATTENDING, payload: id })
  }

  updateFilter(filter) {
    this._store.dispatch({ type: filter })
  }

  /*
    if you do not use async pipe and create manual subscriptions
    always remember to unsubscribe in ngOnDestroy
  */
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
