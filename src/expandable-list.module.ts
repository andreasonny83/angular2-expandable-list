import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ExpandableListComponent,
  ExpandableListItemComponent,
  ExpandableListStyler,
  ExpandableListDividerStyler,
} from './expandable-list.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    ExpandableListComponent,
    ExpandableListItemComponent,
    ExpandableListStyler,
    ExpandableListDividerStyler,
  ],
  exports: [
    ExpandableListComponent,
    ExpandableListItemComponent,
    ExpandableListStyler,
    ExpandableListDividerStyler,
  ],
})
export class ExpandableListModule { }
