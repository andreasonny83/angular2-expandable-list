import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ExpandableListComponent,
  ExpandableListItemComponent,
  ExpandableListStyler,
  ExpandableListDividerStyler,
} from './expandable-list.component';

@NgModule({
  imports: [
    CommonModule,
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

export {
  ExpandableListComponent,
  ExpandableListItemComponent,
  ExpandableListStyler,
  ExpandableListDividerStyler,
};
