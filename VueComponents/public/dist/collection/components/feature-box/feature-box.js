export class featureBox {
    cardColorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.color = newValue;
        }
    }
    componentWillLoad() {
        if (this.cardColor) {
            this.color = this.cardColor;
        }
    }
    render() {
        return [
            h("div", { class: `feature-box feature-box--${this.color}` },
                h("i", { class: "fas fa-cloud" }),
                h("h3", { class: "heading-tertiary u-margin-bottom-small" }, this.title),
                h("slot", { name: 'p' }))
        ];
    }
    static get is() { return "ft-box"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "cardColor": {
            "type": String,
            "attr": "card-color",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["cardColorChanged"]
        },
        "color": {
            "state": true
        },
        "title": {
            "type": String,
            "attr": "title",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return "/**style-placeholder:ft-box:**/"; }
}
