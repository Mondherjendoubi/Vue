import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class tabComponent {
    numberRow: number;
    activeState: string;
    buttonSelected: EventEmitter<string>;
    content: string;
    backgroundColor: string;
    onSelectButton(symbol: string): void;
    hostData(): {
        class: string;
    };
    onLinkSelected(event: CustomEvent): void;
    render(): JSX.Element[];
}
