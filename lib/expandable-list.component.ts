import {
  Component,
  Directive,
  ViewEncapsulation,
  AfterContentInit,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'expandable-list',
  styles: [`
    .expandable-list {
      display: block;
      box-shadow: 0 2px 2px rgba(0,0,0,.24),
                  0 0   2px rgba(0,0,0,.12);
    }
    .expandable-list .expandable-list-item {
      display: block;
      text-transform: capitalize;
      color: #000;
      background: #FFF;
    }
    .expandable-list [disabled].expandable-list-item {
      background: #eeeeee;
    }
    .expandable-list [disabled].expandable-list-item .expandable-list-item-title {
      cursor: default;
    }
    .expandable-list .expandable-list-item + .expandable-list-item {
      border-top: 1px solid #e0e0e0;
    }
    .expandable-list .expandable-list-item .expandable-list-item-title {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      box-sizing: border-box;
      padding: 0 16px;
      height: 48px;
      font-size: 16px;
      cursor: pointer;
    }
    .expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item--secondary,
    .expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item-dropdown {
      color: #757575;
    }
    .expandable-list .expandable-list-item .expandable-list-item-title > span {
      flex: 1;
    }
    .expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item-dropdown {
      text-align: end;
    }
    .expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item-dropdown-chevon {
      transform: rotateZ(90deg);
      transition: transform 300ms cubic-bezier(0.22, 0.61, 0.36, 1);
    }
    .expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item-dropdown-chevon.expanded {
      transform: rotateZ(-90deg);
    }
    .expandable-list .expandable-list-item .expandable-list-item-content[hidden] {
      display: none;
    }
    .expandable-list .expandable-list-item .expandable-list-item-content {
      font-size: 16px;
      padding: 0;
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      transition: max-height .3s cubic-bezier(0.22, 0.61, 0.36, 1),
                  padding .5s cubic-bezier(0.22, 0.61, 0.36, 1),
                  opacity .2s cubic-bezier(0.22, 0.61, 0.36, 1);
    }
    .expandable-list .expandable-list-item .expandable-list-item-content.expanded {
      padding: 16px 0;
      max-height: 500px;
      opacity: 1;
    }
    .expandable-list .expandable-list-item .expandable-list-item-content > [item] {
      display: block;
      padding: 0 16px;
      line-height: 40px;
      text-decoration: none;
      color: #000;
    }
    .expandable-list .expandable-list-item .expandable-list-item-content > [item]:hover {
      background: rgba(0,0,0,0.1);
    }
    .expandable-list .expandable-list-item .expandable-list-item-content .expandable-list-divider {
      display: block;
      margin: 12px 16px;
      border-top: 1px solid #e0e0e0;
    }
  `],
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
  template: `
    <div class="expandable-list-item-title"
         [class.expanded]="isExpanded"
         (click)="onClick()">
      <span>
        <ng-content select="[title]"></ng-content>
      </span>

      <span class="expandable-list-item--secondary">
        <ng-content select="[secondary]"></ng-content>
      </span>

      <span class="expandable-list-item-dropdown">
        <svg x="0px" y="0px" class="expandable-list-item-dropdown-chevon" [class.expanded]="isExpanded"
             viewBox="0 0 306 306" width="12px" height="12px">
          <polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153" fill="#757575"/>
        </svg>
      </span>
    </div>

    <div class="expandable-list-item-content"
         [class.expanded]="isExpanded"
         [hidden]="disabled">
      <ng-content select="[item]"></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ExpandableListItemComponent implements AfterContentInit {
  isExpanded: boolean;

  @Input('disabled')
    get disabled() { return this.isDisabled; }
    set disabled(value: boolean) {
      this.isDisabled = (value !== null && `${value}` !== 'false') ? true : null;
    }

  @HostBinding('attr.disabled') isDisabled: boolean;

  constructor() {
    this.isExpanded = false;
  }

  ngAfterContentInit() {
    // console.log('ExpandableListItemComponent initialized');
  }

  onClick() {
    if (this.disabled) {
      return;
    }

    this.isExpanded = !this.isExpanded;
  }
}
