export class StoryComp {
    captionStoryChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.captionInput = newValue;
        }
    }
    colorButtonChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.titleInput = newValue;
        }
    }
    fontColorInputChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.fontColorInput = newValue;
        }
    }
    colorStoryChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.colorStoryInput = newValue;
        }
    }
    titleStoryChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.fontColorInput = newValue;
        }
    }
    componentWillLoad() {
        if (this.colorStory) {
            this.colorStoryInput = this.colorStory;
            this.fontColorInput = this.fontColor;
            this.titleInput = this.titleStory;
            this.captionInput = this.captionStory;
        }
    }
    render() {
        return [
            h("div", { class: `story story--${this.colorStoryInput}` },
                h("figure", { class: "story__shape" },
                    h("img", { src: this.url, alt: "Person on a tour", class: "story__img" }),
                    h("figcaption", { class: "story__caption" }, this.captionInput)),
                h("div", { class: "story__text" },
                    h("h3", { class: "heading-tertiary u-margin-bottom-small" }, this.titleInput),
                    h("p", null,
                        h("slot", { name: 'p' }))))
        ];
    }
    static get is() { return "story-comp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "captionInput": {
            "state": true
        },
        "captionStory": {
            "type": String,
            "attr": "caption-story",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["captionStoryChanged"]
        },
        "colorStory": {
            "type": String,
            "attr": "color-story",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["colorStoryChanged"]
        },
        "colorStoryInput": {
            "state": true
        },
        "fontColor": {
            "type": String,
            "attr": "font-color",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["fontColorInputChanged"]
        },
        "fontColorInput": {
            "state": true
        },
        "titleInput": {
            "state": true
        },
        "titleStory": {
            "type": String,
            "attr": "title-story",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["colorButtonChanged", "titleStoryChanged"]
        },
        "url": {
            "type": String,
            "attr": "url",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return "/**style-placeholder:story-comp:**/"; }
}
