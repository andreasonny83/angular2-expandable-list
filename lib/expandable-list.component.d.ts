import { AfterViewInit } from '@angular/core';
export declare class ExpandableListComponent {
}
export declare class ExpandableListStyler {
}
export declare class ExpandableListDividerStyler {
}
export declare class ExpandableListItemComponent implements AfterViewInit {
    isExpanded: boolean;
    marginTop: string;
    disabled: boolean;
    private elHeight;
    private elementView;
    private isDisabled;
    constructor();
    ngAfterViewInit(): void;
    onClick(): void;
}
