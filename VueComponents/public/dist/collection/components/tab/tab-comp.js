export class tabComponent {
    onSelectButton(symbol) {
        this.buttonSelected.emit(symbol);
    }
    hostData() {
        return { class: this.activeState ? `is-active ${this.backgroundColor}` : `${this.backgroundColor} ` };
    }
    onLinkSelected(event) {
        if (event.detail == this.numberRow) {
            console.log(event);
            console.log(event.detail);
            this.activeState = "true";
        }
        else {
            this.activeState = "";
        }
    }
    render() {
        return [
            h("li", { onClick: this.onSelectButton.bind(this, this.numberRow) },
                h("a", { href: "#tab-two" }, this.content))
        ];
    }
    static get is() { return "tab-comp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "activeState": {
            "type": String,
            "attr": "active-state",
            "reflectToAttr": true,
            "mutable": true
        },
        "backgroundColor": {
            "type": String,
            "attr": "background-color",
            "reflectToAttr": true,
            "mutable": true
        },
        "content": {
            "type": String,
            "attr": "content",
            "reflectToAttr": true,
            "mutable": true
        },
        "numberRow": {
            "type": Number,
            "attr": "number-row",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "buttonSelected",
            "method": "buttonSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "body:clickedButton",
            "method": "onLinkSelected"
        }]; }
    static get style() { return "/**style-placeholder:tab-comp:**/"; }
}
