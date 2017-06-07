import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { people } from './reducers/people';
import { PersonInputComponent } from './components/person-input/person-input.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    PersonInputComponent,
    PersonListComponent
  ],
  imports: [
    StoreModule.provideStore({ people }),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
