import {
  Component,
  Directive,
  ViewEncapsulation,
  HostBinding,
  Input,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  ElementRef,
  ViewChild
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
  encapsulation: ViewEncapsulation.None
})
export class ExpandableListItemComponent implements AfterViewInit, OnChanges {
  public marginTop: string;

  @Input()
  public isExpanded = false;

  @Input('disabled')
  get disabled() { return this.isDisabled; }
  set disabled(value: boolean) {
    this.isDisabled = (value !== null && `${value}` !== 'false') ? true : null;
  }

  private elHeight: number;

  @ViewChild('contentEl')
  private elementView: ElementRef;

  @HostBinding('attr.disabled')
  private isDisabled: boolean;

  public ngAfterViewInit() {
    this.elHeight = this.elementView.nativeElement.offsetHeight;
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.isExpanded) {
      this._updateMarginTop();
    }
  }

  public onClick() {
    if (this.disabled) {
      return;
    }

    this.isExpanded = !this.isExpanded;

    this._updateMarginTop();
  }

  private _updateMarginTop() {
    if (!this.isExpanded) {
      this.marginTop = `-${this.elHeight}px`;
    } else {
      this.marginTop = '0';
    }    
  }
}
