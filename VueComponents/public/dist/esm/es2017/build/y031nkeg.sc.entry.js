/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class gifContainer {
    render() {
        return [
            h("div", { class: "item-1" },
                h("img", { src: this.url, alt: "logo", class: "logo" }))
        ];
    }
    static get is() { return "gif-comp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "url": {
            "type": String,
            "attr": "url",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return ".sc-gif-comp-h{-webkit-perspective:1500px;perspective:1500px;-moz-perspective:150rem;position:relative;height:60rem}.item-1.sc-gif-comp{position:absolute;width:20rem;height:20rem}.logo.sc-gif-comp{position:relative;width:100%;height:90%;margin-left:1px;margin-top:9px;border:3px solid rgba(0,0,0,.53);border-radius:10px}.logo.sc-gif-comp, .logo.sc-gif-comp:hover{-webkit-transition:1s ease-out;transition:1s ease-out}.logo.sc-gif-comp:hover{-webkit-transform:translateY(-10px) scalex(1.3) scaleY(1.3);transform:translateY(-10px) scalex(1.3) scaleY(1.3);border-radius:20px;-webkit-box-shadow:0 10px 20px var(--color-primary);box-shadow:0 10px 20px var(--color-primary)}.logo.sc-gif-comp:active{-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-box-shadow:0 5px 10px var(--color-secondary);box-shadow:0 5px 10px var(--color-secondary)}"; }
}

export { gifContainer as GifComp };
