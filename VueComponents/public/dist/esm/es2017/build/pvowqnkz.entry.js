/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class dropDown {
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
    static get style() { return "\@charset \"UTF-8\";input{opacity:0;z-index:1;background-color:#6d5dd3}.dropdown{position:relative;display:inline-block}.dropdown__label{border:1px solid #000;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:10px 16px;font-weight:700;cursor:pointer;border-radius:5%}.dropdown__label--red{background-color:var(--primary-30)}.dropdown__label--red:hover{-webkit-filter:brightness(110%);filter:brightness(110%)}.dropdown__label--blue{background-color:var(--primary-70)}.dropdown__label--blue:hover{-webkit-filter:brightness(110%);filter:brightness(110%)}.dropdown__label--orange{background-color:var(--warning-70)}.dropdown__label--orange:hover{-webkit-filter:brightness(110%);filter:brightness(110%)}.dropdown__label:after{content:\"❯\";margin-left:9px;padding:3px;width:1em;height:1em;text-align:center;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:all .5s;transition:all .5s}.dropdown__content{margin-top:5px;display:none;position:absolute;border-radius:5%;min-width:160px;-webkit-box-shadow:0 8px 16px 0 rgba(0,0,0,.39);box-shadow:0 8px 16px 0 rgba(0,0,0,.39);z-index:1}input:checked+.dropdown__label:after{-webkit-transform:rotate(90deg);transform:rotate(90deg)}input:checked~.dropdown__content{display:block;-webkit-animation:moveInBottom .5s linear;animation:moveInBottom .5s linear;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}\@-webkit-keyframes moveInBottom{0%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}50%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}\@keyframes moveInBottom{0%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}50%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}"; }
}

export { dropDown as DropDown };
