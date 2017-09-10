/**
 * angular2-expandable-list
 *
 * Copyright 2017, @andreasonny83, All rights reserved.
 *
 * @author: @andreasonny83 <andreasonny83@gmail.com>
 */

import {
  Component,
  Directive,
  ViewEncapsulation,
  HostBinding,
  Input,
  Output,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  ElementRef,
  ViewChild,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'expandable-list',
  styleUrls: ['./expandable-list.css'],
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
})
export class ExpandableListComponent { }

/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 */
@Directive({
  selector: 'expandable-list',
  host: {
    '[class.expandable-list]': 'true'
  }
})
export class ExpandableListStyler { }

@Directive({
  selector: 'expandable-list-divider',
  host: {
    '[class.expandable-list-divider]': 'true'
  }
})
export class ExpandableListDividerStyler { }

@Component({
  selector: 'expandable-list-item',
  host: {
    '[class.expandable-list-item]': 'true',
  },
  templateUrl: './expandable-list-item.html',
  encapsulation: ViewEncapsulation.None,
})
export class ExpandableListItemComponent implements AfterViewInit, OnChanges {
  public marginTop: string;

  @Input('isExpanded')
  get isExpanded() { return this.expanded; }
  set isExpanded(value: boolean) {
    this.expanded = (value !== null && `${value}` !== 'false') ? true : false;
  }

  @Input('disabled')
  get disabled() { return this.isDisabled; }
  set disabled(value: boolean) {
    this.isDisabled = (value !== null && `${value}` !== 'false') ? true : null;
  }

  @Output()
  public onExpanded: EventEmitter<boolean>;

  private elHeight: number;

  @ViewChild('contentEl')
  private elementView: ElementRef;

  @HostBinding('attr.disabled')
  private isDisabled: boolean;

  @HostBinding('attr.is-expanded')
  private expanded: boolean = false;

  public ngAfterViewInit() {
    this.elHeight = this.elementView.nativeElement.offsetHeight;
  }

  constructor() {
    this.onExpanded = new EventEmitter<boolean>();
  }

  public ngOnChanges(changes: SimpleChanges) {
    if ('isExpanded' in changes) {
      this.updateMarginTop();
    }
  }

  public onClick() {
    if (this.disabled) {
      return;
    }

    this.isExpanded = !this.isExpanded;

    this.updateMarginTop();
  }

  private updateMarginTop() {
    if (!this.isExpanded) {
      this.marginTop = `-${this.elHeight}px`;
    } else {
      this.marginTop = '0';
    }

    this.onExpanded.emit(this.isExpanded);
  }
}
