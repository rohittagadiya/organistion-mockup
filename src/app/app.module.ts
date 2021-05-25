import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrganisationComponent } from './organisation/organisation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrganisationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
