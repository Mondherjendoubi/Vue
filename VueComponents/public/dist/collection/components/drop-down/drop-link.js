export class dropLink {
    render() {
        return [
            h("a", { class: "link", href: "#" },
                h("slot", null))
        ];
    }
    static get is() { return "drop-link"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "backgroundColor": {
            "type": String,
            "attr": "background-color",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return "/**style-placeholder:drop-link:**/"; }
}
