/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class accordionComponent {
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
    static get style() { return "\@charset \"UTF-8\";input{position:absolute;opacity:0;z-index:-1}.tab{margin:auto 10rem;width:80%;color:#fff;overflow:hidden;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.tab:hover{-webkit-transform:scale(1.01);transform:scale(1.01)}.tab__label{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:1em;font-weight:700;cursor:pointer;-webkit-transition:all 1s;transition:all 1s}.tab__label--red{background-color:var(--primary-30)}.tab__label--red:hover{-webkit-filter:brightness(110%);filter:brightness(110%)}.tab__label--blue{background-color:var(--primary-70)}.tab__label--blue:hover{-webkit-filter:brightness(110%);filter:brightness(110%)}.tab__label--orange{background-color:var(--warning-70)}.tab__label--orange:hover{-webkit-filter:brightness(110%);filter:brightness(110%)}.tab__label:after{content:\"❯\";width:1em;height:1em;text-align:center;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:all .5s;transition:all .5s}.tab__content{-webkit-transition:all .2s ease;transition:all .2s ease;max-height:0;padding:0 1em;color:var(--black);background:#fff}input:checked+.tab__label:after{-webkit-transform:rotate(90deg);transform:rotate(90deg)}input:checked~.tab__content{max-height:100vh;padding:1em}"; }
}

export { accordionComponent as AccordionComponent };
