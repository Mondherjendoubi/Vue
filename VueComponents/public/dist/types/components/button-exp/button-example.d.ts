import '../../stencil.core';
export declare class buttonExample {
    content: string;
    colorButton: string;
    fontColor: string;
    colorInput: string;
    fontColorInput: string;
    colorButtonChanged(newValue: string, oldValue: string): void;
    fontColorInputChanged(newValue: string, oldValue: string): void;
    componentWillLoad(): void;
    render(): JSX.Element[];
}
