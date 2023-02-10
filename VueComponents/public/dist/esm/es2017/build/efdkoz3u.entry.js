/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class tabsComponent {
    onLinkSelected(event) {
        if (event.detail) {
            this.activeLink = event.detail;
        }
    }
    onButtonSelect(symbol) {
        this.clickedButton.emit(symbol);
    }
    render() {
        if (this.numberColumn) {
            console.log(this.numberColumn + "numbColum");
            var indents = [];
            for (var i = 0; i < this.numberColumn; i++) {
                indents.push(h("div", { class: "container", onClick: this.onButtonSelect.bind(this, i + 1) },
                    h("slot", { name: `${i + 1}` })));
            }
        }
        return [
            h("div", { class: "my-tabs" },
                h("nav", { class: "tabs" },
                    h("ul", null, indents)))
        ];
    }
    static get is() { return "tabs-comp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "type": Number,
            "attr": "active",
            "reflectToAttr": true,
            "mutable": true
        },
        "activeLink": {
            "state": true
        },
        "numberColumn": {
            "type": Number,
            "attr": "number-column",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "clickedButton",
            "method": "clickedButton",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "body:buttonSelected",
            "method": "onLinkSelected"
        }]; }
    static get style() { return ".tabs{display:table;margin:0 auto}ul{min-width:696px;list-style:none;padding-top:20px;left:200px}.container{position:relative;margin:0 10px;-webkit-transition:all .2s;transition:all .2s;display:inline-block}"; }
}

export { tabsComponent as TabsComp };
