/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class featureBox {
    cardColorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.color = newValue;
        }
    }
    componentWillLoad() {
        if (this.cardColor) {
            this.color = this.cardColor;
        }
    }
    render() {
        return [
            h("div", { class: `feature-box feature-box--${this.color}` },
                h("i", { class: "fas fa-cloud" }),
                h("h3", { class: "heading-tertiary u-margin-bottom-small" }, this.title),
                h("slot", { name: 'p' }))
        ];
    }
    static get is() { return "ft-box"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "cardColor": {
            "type": String,
            "attr": "card-color",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["cardColorChanged"]
        },
        "color": {
            "state": true
        },
        "title": {
            "type": String,
            "attr": "title",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return ".feature-box.sc-ft-box{background-color:var(--mono-10);font-size:1.5rem;padding:2.5rem;text-align:center;-webkit-box-shadow:0 1.5rem 4rem var(--primary-10);box-shadow:0 1.5rem 4rem var(--primary-10);-webkit-transition:all .3s ease-in;transition:all .3s ease-in;outline-offset:1rem}.feature-box--red.sc-ft-box{background-color:var(--primary-30)}.feature-box--blue.sc-ft-box{background-color:var(--primary-70)}.feature-box--orange.sc-ft-box{background-color:var(--warning-70)}.feature-box.sc-ft-box:hover{outline:1rem solid var(--primary-10);background-color:#000;-webkit-transform:scale(1.05) translateY(-5px);transform:scale(1.05) translateY(-5px);color:#fff}"; }
}

export { featureBox as FtBox };
