import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class tabsComponent {
    active: number;
    activeLink: string;
    clickedButton: EventEmitter<string>;
    numberColumn: number;
    onLinkSelected(event: CustomEvent): void;
    onButtonSelect(symbol: string): void;
    render(): JSX.Element[];
}
