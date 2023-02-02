export class cardComponent {
    cardBackButtonColorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.cardBackButtonColorInput = newValue;
        }
    }
    cardBackButtonColorFontChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.cardBackButtonColorFontInput = newValue;
        }
    }
    spanColorInputChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.colorSpan = newValue;
            console.log(this.colorFront + "new Color in watch");
        }
    }
    cardFrontColorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.colorFront = newValue;
            console.log(this.colorFront + "new Color in watch");
        }
    }
    cardBackColorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.colorBack = newValue;
            console.log(this.colorFront + "new Color in watch");
        }
    }
    componentWillLoad() {
        console.log("componenet will load");
        console.log(this.cardFrontColor);
        if (this.cardFrontColor) {
            this.colorFront = this.cardFrontColor;
            this.colorBack = this.cardBackColor;
            this.colorSpan = this.spanColorInput;
            this.cardBackButtonColorInput = this.cardBackButtonColor;
            this.cardBackButtonColorFontInput = this.cardBackButtonColorFont;
            console.log(this.colorFront + "componentWillLoad");
        }
    }
    hostData() {
        return { class: this.cardFrontColor ? 'hydrated ' : `hydrated ${this.cardFrontColor}` };
    }
    render() {
        return [
            h("div", { class: "card" },
                h("div", { class: `card__side card__side--front card__side--front--${this.colorFront}` },
                    h("div", { class: "card__picture card__picture--1" },
                        h("img", { src: this.url })),
                    h("h4", { class: "card__heading" },
                        h("span", { class: `card__heading-span card__heading-span--${this.colorSpan}` }, this.title)),
                    h("div", { class: "card__details" },
                        h("slot", { name: 'p' }))),
                h("div", { class: `card__side card__side--back card__side--back--${this.colorBack}` },
                    h("div", { class: "card__cta" },
                        h("div", { class: "card__price-box" },
                            h("p", { class: "card__price-only" }, "Only"),
                            h("p", { class: "card__price-value" },
                                "$",
                                this.price)),
                        h("btn-exp", { "color-button": this.cardBackButtonColorInput, "font-color": this.cardBackButtonColorFont, content: "Button" }))))
        ];
    }
    static get is() { return "card-comp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "cardBackButtonColor": {
            "type": String,
            "attr": "card-back-button-color",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["cardBackButtonColorChanged"]
        },
        "cardBackButtonColorFont": {
            "type": String,
            "attr": "card-back-button-color-font",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["cardBackButtonColorFontChanged"]
        },
        "cardBackButtonColorFontInput": {
            "state": true
        },
        "cardBackButtonColorInput": {
            "state": true
        },
        "cardBackColor": {
            "type": String,
            "attr": "card-back-color",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["cardBackColorChanged"]
        },
        "cardFrontColor": {
            "type": String,
            "attr": "card-front-color",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["spanColorInputChanged", "cardFrontColorChanged"]
        },
        "colorBack": {
            "state": true
        },
        "colorFront": {
            "state": true
        },
        "colorSpan": {
            "state": true
        },
        "price": {
            "type": String,
            "attr": "price",
            "reflectToAttr": true,
            "mutable": true
        },
        "spanColorInput": {
            "type": String,
            "attr": "span-color-input",
            "reflectToAttr": true,
            "mutable": true
        },
        "title": {
            "type": String,
            "attr": "title",
            "reflectToAttr": true,
            "mutable": true
        },
        "url": {
            "type": String,
            "attr": "url",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return "/**style-placeholder:card-comp:**/"; }
}
