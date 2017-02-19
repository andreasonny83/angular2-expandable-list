import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExpandableListModule } from '../src/expandable-list.module';

@NgModule({
  imports: [
    BrowserModule,
    ExpandableListModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
