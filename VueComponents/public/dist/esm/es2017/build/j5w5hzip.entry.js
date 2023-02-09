/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class listGroup {
    render() {
        if (this.numberColumn) {
            console.log(this.numberColumn + "numbColum");
            var indents = [];
            for (var i = 0; i < this.numberColumn; i++) {
                indents.push(h("slot", { name: `col-${i + 1}` }));
            }
        }
        return [
            h("div", { class: "container" }, indents)
        ];
    }
    static get is() { return "list-group"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "numberColumn": {
            "type": Number,
            "attr": "number-column",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return ".container{width:30%;margin:10px 10px}"; }
}

export { listGroup as ListGroup };
