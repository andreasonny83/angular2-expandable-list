import {
  Component,
  Directive,
  ViewEncapsulation,
  HostListener,
  HostBinding,
  Input,
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
export class ExpandableListItemComponent {
  public isExpanded: boolean;

  @Input('disabled')
    get disabled() { return this.isDisabled; }
    set disabled(value: boolean) {
      this.isDisabled = (value !== null && `${value}` !== 'false') ? true : null;
    }

  @HostBinding('attr.disabled') isDisabled: boolean;

  constructor() {
    this.isExpanded = false;
  }

  onClick() {
    if (this.disabled) {
      return;
    }

    this.isExpanded = !this.isExpanded;
  }
}
