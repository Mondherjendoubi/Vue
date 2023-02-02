/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class headItem {
    render() {
        return [
            h("button", { class: "btn-text" },
                h("slot", null))
        ];
    }
    static get is() { return "head-item"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".btn-text{border:1px solid transparent;background-color:transparent;font-size:1.6rem;color:var(--primary-70);display:inline-block;text-decoration:none;padding:3px;-webkit-transition:all .2s;transition:all .2s}.btn-text:hover{background-color:var(--primary-70);-webkit-box-shadow:0 1rem 2rem rgba(var(--primary-70),.15);box-shadow:0 1rem 2rem rgba(var(--primary-70),.15);color:var(--white);-webkit-transform:translateY(-2px);transform:translateY(-2px)}.btn-text:active{-webkit-box-shadow:0 .5rem 1rem rgba(var(--black),.15);box-shadow:0 .5rem 1rem rgba(var(--black),.15);-webkit-transform:translateY(0);transform:translateY(0)}"; }
}

export { headItem as HeadItem };
