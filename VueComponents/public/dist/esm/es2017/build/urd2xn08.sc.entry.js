/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class tabComponent {
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
    static get style() { return ".sc-tab-comp-h{margin:0 auto;position:relative;-webkit-transition:all .2s;transition:all .2s;display:inline-block;padding:10px 20px;background-color:#1da1f2}.red.sc-tab-comp-h{background-color:var(--mono-05)}.blue.sc-tab-comp-h{background-color:var(--primary-70)}.orange.sc-tab-comp-h{background-color:var(--warning-70)}.is-active.sc-tab-comp-h{border-bottom:2px solid #000}.sc-tab-comp-h:hover{background-color:#adadad;-webkit-transform:translateY(-2px);transform:translateY(-2px);cursor:pointer;color:red}a.sc-tab-comp{color:#fff;margin-bottom:-10px;text-decoration:none;font-family:sans-serif;font-size:15px;font-weight:10}"; }
}

export { tabComponent as TabComp };
