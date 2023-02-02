/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class dropLink {
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
    static get style() { return ".link{background-color:#fff;border:1px solid rgba(0,0,0,.32);color:#000;padding:12px 16px;text-decoration:none;display:block;-webkit-transition:all .5s;transition:all .5s}.link:hover{background-color:#000;color:#fff}"; }
}

export { dropLink as DropLink };
