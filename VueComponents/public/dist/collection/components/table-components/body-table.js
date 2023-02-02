export class bodyTable {
    render() {
        if (this.numberColumn) {
            console.log(this.numberColumn + "numbColum");
            var indents = [];
            for (var i = 0; i < this.numberColumn; i++) {
                indents.push(h("div", { class: `col-1-of-4` },
                    h("slot", { name: `col-${i + 1}` })));
            }
        }
        console.log(JSON.stringify(indents) + "array");
        return [
            h("div", { class: "body-container" }, indents)
        ];
    }
    static get is() { return "body-table"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "numberColumn": {
            "type": Number,
            "attr": "number-column",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return "/**style-placeholder:body-table:**/"; }
}
