export class buttonExample {
    colorButtonChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.colorInput = newValue;
        }
    }
    fontColorInputChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.fontColorInput = newValue;
        }
    }
    componentWillLoad() {
        if (this.colorButton) {
            this.colorInput = this.colorButton;
            this.fontColorInput = this.fontColor;
        }
    }
    render() {
        return [
            h("a", { href: "#", class: `btn btn--color btn--animated btn--color--${this.colorInput} btn--color--${this.colorInput}--${this.fontColorInput}` }, this.content)
        ];
    }
    static get is() { return "btn-exp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "colorButton": {
            "type": String,
            "attr": "color-button",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["colorButtonChanged"]
        },
        "colorInput": {
            "state": true
        },
        "content": {
            "type": String,
            "attr": "content",
            "reflectToAttr": true,
            "mutable": true
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
        }
    }; }
    static get style() { return "/**style-placeholder:btn-exp:**/"; }
}
