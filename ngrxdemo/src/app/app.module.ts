import { FilterSelectComponent } from './components/filter-select/filter-select.component';
import { PartyStatsComponent } from './components/party-stats/party-stats.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { people } from './reducers/people';
import { partyFilter } from './reducers/party';
import { PersonInputComponent } from './components/person-input/person-input.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    PersonInputComponent,
    PersonListComponent,
    PartyStatsComponent,
    FilterSelectComponent
  ],
  imports: [
    StoreModule.provideStore({ people, partyFilter }),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 100
    }),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
