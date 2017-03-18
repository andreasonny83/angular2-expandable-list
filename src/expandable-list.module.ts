/**
 * angular2-expandable-list
 *
 * Copyright 2017, @andreasonny83, All rights reserved.
 *
 * @author: @andreasonny83 <andreasonny83@gmail.com>
 */

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
