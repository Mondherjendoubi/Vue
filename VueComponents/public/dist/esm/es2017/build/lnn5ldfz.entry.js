/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class table {
    render() {
        return [
            h("div", { class: "table" },
                h("slot", null))
        ];
    }
    static get is() { return "table-comp"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".table{background-color:#f6f2f2;margin:auto 6rem;padding:20px 1px;border:2px solid #180202;-webkit-transition:all .4s;transition:all .4s}.table:hover{-webkit-box-shadow:0 2px 20px 2px #0330e7;box-shadow:0 2px 20px 2px #0330e7}"; }
}

export { table as TableComp };
