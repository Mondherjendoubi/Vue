export class listGroup {
    render() {
        return [
            h("div", { class: "container" },
                h("h1", null, "Checkboxx !"))
        ];
    }
    static get is() { return "check-box"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "numberColumn": {
            "type": Number,
            "attr": "number-column",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return "/**style-placeholder:check-box:**/"; }
}
