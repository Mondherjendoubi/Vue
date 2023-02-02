/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class headItem {
    render() {
        return [
            h("div", { class: "container" },
                h("h3", null,
                    h("slot", null)))
        ];
    }
    static get is() { return "body-item"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".container.sc-body-item{margin-left:5px}h3.sc-body-item{font-size:1.3rem;color:#000;margin:0 auto}"; }
}

export { headItem as BodyItem };
