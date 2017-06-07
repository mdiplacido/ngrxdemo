import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { people } from './reducers/people';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.provideStore({ people }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
