export class gridComp {
    searchSymbolChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            console.log(newValue + " " + oldValue);
        }
    }
    render() {
        return [
            h("div", { class: "row" },
                h("div", { class: "col-1-of-4" },
                    h("slot", { name: 'col-1' })),
                h("div", { class: "col-1-of-4" },
                    h("slot", { name: 'col-2' })),
                h("div", { class: "col-1-of-4" },
                    h("slot", { name: 'col-3' })),
                h("div", { class: "col-1-of-4" },
                    h("slot", { name: 'col-4' })))
        ];
    }
    static get is() { return "grid-comp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "columnType": {
            "type": String,
            "attr": "column-type",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["searchSymbolChanged"]
        }
    }; }
    static get style() { return "/**style-placeholder:grid-comp:**/"; }
}
