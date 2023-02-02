import '../../stencil.core';
export declare class cardComponent {
    url: string;
    title: string;
    price: string;
    cardFrontColor: string;
    cardBackColor: string;
    spanColorInput: string;
    cardBackButtonColor: string;
    cardBackButtonColorFont: string;
    colorFront: string;
    colorBack: string;
    colorSpan: string;
    cardBackButtonColorInput: string;
    cardBackButtonColorFontInput: string;
    cardBackButtonColorChanged(newValue: string, oldValue: string): void;
    cardBackButtonColorFontChanged(newValue: string, oldValue: string): void;
    spanColorInputChanged(newValue: string, oldValue: string): void;
    cardFrontColorChanged(newValue: string, oldValue: string): void;
    cardBackColorChanged(newValue: string, oldValue: string): void;
    componentWillLoad(): void;
    hostData(): {
        class: string;
    };
    render(): JSX.Element[];
}
