/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class headTable {
    render() {
        if (this.numberColumn) {
            console.log(this.numberColumn + "numbColum");
            var indents = [];
            for (var i = 0; i < this.numberColumn; i++) {
                indents.push(h("div", { class: `col-1-of-4` },
                    h("slot", { name: `col-${i + 1}` })));
            }
        }
        console.log(JSON.stringify(indents) + "array");
        return [
            h("div", { class: "head-container" }, indents)
        ];
    }
    static get is() { return "head-table"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "numberColumn": {
            "type": Number,
            "attr": "number-column",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return ".head-container.sc-head-table{outline-offset:20px;border-bottom:1px solid var(--black);max-width:1440px;margin:0 auto}.head-container.sc-head-table:not(:last-child){margin-bottom:2rem}.head-container.sc-head-table:after{content:\"\";display:table;clear:both}.head-container.sc-head-table   [class^=col-].sc-head-table{float:left}.head-container.sc-head-table   [class^=col-].sc-head-table:not(:last-child){margin-right:6rem}.head-container.sc-head-table   .col-1-of-2.sc-head-table{width:calc((100% - 6rem) / 2)}.head-container.sc-head-table   .col-1-of-3.sc-head-table{width:calc((100% - 2 * 6rem) / 3)}.head-container.sc-head-table   .col-1-of-5.sc-head-table{width:calc((100% - 4 * 6rem) / 5)}.head-container.sc-head-table   .col-1-of-6.sc-head-table{width:calc((100% - 5 * 6rem) / 6)}.head-container.sc-head-table   .col-1-of-7.sc-head-table{width:calc((100% - 6 * 6rem) / 7)}.head-container.sc-head-table   .col-2-of-3.sc-head-table{width:calc(2 * ((100% - 2 * 6rem) / 3) + 6rem)}.head-container.sc-head-table   .col-1-of-4.sc-head-table{width:calc((100% - 3 * 6rem) / 4)}.head-container.sc-head-table   .col-2-of-4.sc-head-table{width:calc(2 * ((100% - 3 * 6rem) / 4) + 6rem)}.head-container.sc-head-table   .col-3-of-4.sc-head-table{width:calc(3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem)}"; }
}

export { headTable as HeadTable };
