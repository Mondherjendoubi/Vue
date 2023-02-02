import '../../stencil.core';
export declare class searchGif {
    searchInput: string;
    idSymbol: string;
    searchInputValid: boolean;
    searchSymbol: string;
    navSelected: string;
    gifArray: Array<string>;
    searchSymbolChanged(newValue: string, oldValue: string): void;
    navSelectedChanged(newValue: string, oldValue: string): void;
    fetchGifWithUrl(searchInput: String): void;
    onFetchGif(event: Event): void;
    componentDidLoad(): void;
    componentWillLoad(): void;
    updateUserInput(event: Event): void;
    hostData(): {
        class: string;
    };
    render(): JSX.Element[];
}
