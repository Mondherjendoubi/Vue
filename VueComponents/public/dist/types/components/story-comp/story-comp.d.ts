import '../../stencil.core';
export declare class StoryComp {
    titleStory: string;
    colorStory: string;
    fontColor: string;
    captionStory: string;
    url: string;
    colorStoryInput: string;
    fontColorInput: string;
    titleInput: string;
    captionInput: string;
    captionStoryChanged(newValue: string, oldValue: string): void;
    colorButtonChanged(newValue: string, oldValue: string): void;
    fontColorInputChanged(newValue: string, oldValue: string): void;
    colorStoryChanged(newValue: string, oldValue: string): void;
    titleStoryChanged(newValue: string, oldValue: string): void;
    componentWillLoad(): void;
    render(): JSX.Element[];
}
