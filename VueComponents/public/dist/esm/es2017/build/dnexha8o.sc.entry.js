/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class cardComponent {
    cardBackButtonColorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.cardBackButtonColorInput = newValue;
        }
    }
    cardBackButtonColorFontChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.cardBackButtonColorFontInput = newValue;
        }
    }
    spanColorInputChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.colorSpan = newValue;
            console.log(this.colorFront + "new Color in watch");
        }
    }
    cardFrontColorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.colorFront = newValue;
            console.log(this.colorFront + "new Color in watch");
        }
    }
    cardBackColorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.colorBack = newValue;
            console.log(this.colorFront + "new Color in watch");
        }
    }
    componentWillLoad() {
        console.log("componenet will load");
        console.log(this.cardFrontColor);
        if (this.cardFrontColor) {
            this.colorFront = this.cardFrontColor;
            this.colorBack = this.cardBackColor;
            this.colorSpan = this.spanColorInput;
            this.cardBackButtonColorInput = this.cardBackButtonColor;
            this.cardBackButtonColorFontInput = this.cardBackButtonColorFont;
            console.log(this.colorFront + "componentWillLoad");
        }
    }
    hostData() {
        return { class: this.cardFrontColor ? 'hydrated ' : `hydrated ${this.cardFrontColor}` };
    }
    render() {
        return [
            h("div", { class: "card" },
                h("div", { class: `card__side card__side--front card__side--front--${this.colorFront}` },
                    h("div", { class: "card__picture card__picture--1" },
                        h("img", { src: this.url })),
                    h("h4", { class: "card__heading" },
                        h("span", { class: `card__heading-span card__heading-span--${this.colorSpan}` }, this.title)),
                    h("div", { class: "card__details" },
                        h("slot", { name: 'p' }))),
                h("div", { class: `card__side card__side--back card__side--back--${this.colorBack}` },
                    h("div", { class: "card__cta" },
                        h("div", { class: "card__price-box" },
                            h("p", { class: "card__price-only" }, "Only"),
                            h("p", { class: "card__price-value" },
                                "$",
                                this.price)),
                        h("btn-exp", { "color-button": this.cardBackButtonColorInput, "font-color": this.cardBackButtonColorFont, content: "Button" }))))
        ];
    }
    static get is() { return "card-comp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "cardBackButtonColor": {
            "type": String,
            "attr": "card-back-button-color",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["cardBackButtonColorChanged"]
        },
        "cardBackButtonColorFont": {
            "type": String,
            "attr": "card-back-button-color-font",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["cardBackButtonColorFontChanged"]
        },
        "cardBackButtonColorFontInput": {
            "state": true
        },
        "cardBackButtonColorInput": {
            "state": true
        },
        "cardBackColor": {
            "type": String,
            "attr": "card-back-color",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["cardBackColorChanged"]
        },
        "cardFrontColor": {
            "type": String,
            "attr": "card-front-color",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["spanColorInputChanged", "cardFrontColorChanged"]
        },
        "colorBack": {
            "state": true
        },
        "colorFront": {
            "state": true
        },
        "colorSpan": {
            "state": true
        },
        "price": {
            "type": String,
            "attr": "price",
            "reflectToAttr": true,
            "mutable": true
        },
        "spanColorInput": {
            "type": String,
            "attr": "span-color-input",
            "reflectToAttr": true,
            "mutable": true
        },
        "title": {
            "type": String,
            "attr": "title",
            "reflectToAttr": true,
            "mutable": true
        },
        "url": {
            "type": String,
            "attr": "url",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return ".sc-card-comp:root{--orange:253,166,60;--orange-light:rgba(var(--orange),0.15)}.card.sc-card-comp{-webkit-perspective:1500px;perspective:1500px;-moz-perspective:150rem;position:relative;height:30rem}.card__side.sc-card-comp{position:absolute;top:0;left:0;color:#fff;font-size:2rem;height:30rem;-webkit-transition:all .8s ease;transition:all .8s ease;width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:3px;overflow:hidden;-webkit-box-shadow:0 1.5rem 40px rgba(var(--primary-30),.15);box-shadow:0 1.5rem 40px rgba(var(--primary-30),.15)}.card__side--front--red.sc-card-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-30)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-30))}.card__side--front--blue.sc-card-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-70))}.card__side--front--orange.sc-card-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--warning-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--warning-70))}.card__side--back.sc-card-comp{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card__side--back--red.sc-card-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-30)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-30))}.card__side--back--blue.sc-card-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-70))}.card__side--back--orange.sc-card-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--warning-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--warning-70))}.card.sc-card-comp:hover   .card__side--front.sc-card-comp{-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)}.card.sc-card-comp:hover   .card__side--back.sc-card-comp{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}.card__picture.sc-card-comp, .card__picture.sc-card-comp   img.sc-card-comp{background-size:cover}.card__picture.sc-card-comp   img.sc-card-comp{height:20rem;background-blend-mode:screen;-webkit-clip-path:polygon(0 0,100% 0,100% 85%,0 100%);clip-path:polygon(0 0,100% 0,100% 85%,0 100%);display:block;margin-left:auto;margin-right:auto;width:100%}.card__heading.sc-card-comp{font-size:2.8rem;font-weight:300;text-transform:uppercase;color:var(--primary-05);position:absolute;text-align:right;top:12rem;right:3rem;width:75%}.card__heading-span.sc-card-comp{padding:.3rem 1.2rem;box-decoration-break:clone;-webkit-box-decoration-break:clone}.card__heading-span--red.sc-card-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-30)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-30))}.card__heading-span--blue.sc-card-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-70))}.card__heading-span--orange.sc-card-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--warning-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--warning-70))}.card__details.sc-card-comp{position:relative;-ms-flex-align:center;align-items:center}.card__details .sc-card-comp-s > p{position:absolute;left:2rem;top:3rem;margin:0 auto;padding:0;list-style:none;width:80%;text-align:center;color:hsla(0,0%,100%,.62);font-size:.78rem}.card__cta.sc-card-comp{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:90%;text-align:center;-ms-flex-align:center;align-items:center}.card__cta.sc-card-comp   btn-exp.sc-card-comp{position:absolute;left:2.5rem;bottom:0}.card__price-box.sc-card-comp{text-align:center;margin-bottom:4rem;color:var(--primary-05)}.card__price-only.sc-card-comp{font-size:1.4rem;text-transform:uppercase}.card__price-value.sc-card-comp{margin:0;font-size:6rem;font-weight:100}"; }
}

export { cardComponent as CardComp };
