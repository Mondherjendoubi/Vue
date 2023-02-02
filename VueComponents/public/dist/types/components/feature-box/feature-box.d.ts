import '../../stencil.core';
export declare class featureBox {
    title: string;
    cardColor: string;
    color: string;
    cardColorChanged(newValue: string, oldValue: string): void;
    componentWillLoad(): void;
    render(): JSX.Element[];
}
