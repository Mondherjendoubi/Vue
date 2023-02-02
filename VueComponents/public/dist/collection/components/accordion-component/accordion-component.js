export class accordionComponent {
    render() {
        return [
            h("div", { class: "tab" },
                h("input", { type: "checkbox", id: "chck1" }),
                h("label", { class: `tab__label tab__label--${this.backgroundColor}`, htmlFor: "chck1" }, this.itemHead),
                h("div", { class: "tab__content" },
                    h("slot", { name: 'p' })))
        ];
    }
    static get is() { return "accordion-component"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "backgroundColor": {
            "type": String,
            "attr": "background-color",
            "reflectToAttr": true,
            "mutable": true
        },
        "hoverBackgroundColor": {
            "type": String,
            "attr": "hover-background-color",
            "reflectToAttr": true,
            "mutable": true
        },
        "itemHead": {
            "type": String,
            "attr": "item-head",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return "/**style-placeholder:accordion-component:**/"; }
}
