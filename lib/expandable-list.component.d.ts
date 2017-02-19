import { AfterContentInit } from '@angular/core';
export declare class ExpandableListComponent {
}
export declare class ExpandableListStyler {
}
export declare class ExpandableListDividerStyler {
}
export declare class ExpandableListItemComponent implements AfterContentInit {
    isExpanded: boolean;
    disabled: boolean;
    isDisabled: boolean;
    constructor();
    ngAfterContentInit(): void;
    onClick(): void;
}
