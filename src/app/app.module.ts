import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicButtonComponent } from './dynamic-button/dynamic-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
