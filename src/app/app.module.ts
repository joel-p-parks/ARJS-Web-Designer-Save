import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActiveReportsModule } from '@grapecity/activereports-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ActiveReportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
