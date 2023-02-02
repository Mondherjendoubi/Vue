/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class bodyTable {
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
            h("div", { class: "body-container" }, indents)
        ];
    }
    static get is() { return "body-table"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "numberColumn": {
            "type": Number,
            "attr": "number-column",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return ".body-container{outline-offset:20px;border-bottom:1px solid var(--black);max-width:1440px;margin:0 auto;margin-top:20px}.body-container:not(:last-child){margin-bottom:2rem}.body-container:after{content:\"\";display:table;clear:both}.body-container [class^=col-]{float:left}.body-container [class^=col-]:not(:last-child){margin-right:6rem}.body-container .col-1-of-2{width:calc((100% - 6rem) / 2)}.body-container .col-1-of-3{width:calc((100% - 2 * 6rem) / 3)}.body-container .col-1-of-5{width:calc((100% - 4 * 6rem) / 5)}.body-container .col-1-of-6{width:calc((100% - 5 * 6rem) / 6)}.body-container .col-1-of-7{width:calc((100% - 6 * 6rem) / 7)}.body-container .col-2-of-3{width:calc(2 * ((100% - 2 * 6rem) / 3) + 6rem)}.body-container .col-1-of-4{width:calc((100% - 3 * 6rem) / 4)}.body-container .col-2-of-4{width:calc(2 * ((100% - 3 * 6rem) / 4) + 6rem)}.body-container .col-3-of-4{width:calc(3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem)}"; }
}

export { bodyTable as BodyTable };
