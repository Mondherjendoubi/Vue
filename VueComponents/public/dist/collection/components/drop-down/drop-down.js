export class dropDown {
    render() {
        return [
            h("div", { class: "dropdown" },
                h("input", { type: "checkbox", id: "chck1" }),
                h("label", { class: `dropdown__label dropdown__label--${this.backgroundColor}`, htmlFor: "chck1" },
                    h("slot", { name: "Title" })),
                h("div", { class: "dropdown__content" },
                    h("slot", null)))
        ];
    }
    static get is() { return "drop-down"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "backgroundColor": {
            "type": String,
            "attr": "background-color",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return "/**style-placeholder:drop-down:**/"; }
}
