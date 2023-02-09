export class listGroupItem {
    render() {
        var indents = [];
        let checkBox;
        if (this.checkBox) {
            checkBox = "check";
            indents.push(h("label", { class: "checkbox path" },
                h("input", { type: "checkbox" }),
                h("svg", { viewBox: "0 0 21 21" },
                    h("path", { d: "M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186" }))));
        }
        let active = "";
        if (this.active === "true") {
            console.log("active true");
            active = "active";
        }
        return [
            h("div", { class: `container container--${this.backgroundColor} container--${this.backgroundColor}--${active} container__${checkBox}` },
                indents,
                h("div", { class: ` container__slot container__${checkBox}__slot` },
                    h("slot", null)))
        ];
    }
    static get is() { return "list-group-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "type": String,
            "attr": "active",
            "reflectToAttr": true,
            "mutable": true
        },
        "backgroundColor": {
            "type": String,
            "attr": "background-color",
            "reflectToAttr": true,
            "mutable": true
        },
        "checkBox": {
            "type": String,
            "attr": "check-box",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return "/**style-placeholder:list-group-item:**/"; }
}
