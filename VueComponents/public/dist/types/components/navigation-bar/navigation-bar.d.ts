import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class navigationBar {
    url: string;
    navSelected: EventEmitter<string>;
    onSelectNav(symbol: string): void;
    render(): JSX.Element[];
}
