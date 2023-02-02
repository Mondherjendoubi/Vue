/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class buttonExample {
    colorButtonChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.colorInput = newValue;
        }
    }
    fontColorInputChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.fontColorInput = newValue;
        }
    }
    componentWillLoad() {
        if (this.colorButton) {
            this.colorInput = this.colorButton;
            this.fontColorInput = this.fontColor;
        }
    }
    render() {
        return [
            h("a", { href: "#", class: `btn btn--color btn--animated btn--color--${this.colorInput} btn--color--${this.colorInput}--${this.fontColorInput}` }, this.content)
        ];
    }
    static get is() { return "btn-exp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "colorButton": {
            "type": String,
            "attr": "color-button",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["colorButtonChanged"]
        },
        "colorInput": {
            "state": true
        },
        "content": {
            "type": String,
            "attr": "content",
            "reflectToAttr": true,
            "mutable": true
        },
        "fontColor": {
            "type": String,
            "attr": "font-color",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["fontColorInputChanged"]
        },
        "fontColorInput": {
            "state": true
        }
    }; }
    static get style() { return ".btn.sc-btn-exp:link, .btnbtn.sc-btn-exp:visited{font-family:sans-serif;position:relative;text-decoration:none;font-size:2.5rem;font-weight:500;padding:4px 40px;display:inline-block;border-radius:100px;-webkit-transition:all .5s;transition:all .5s;-webkit-animation-name:moveInBottom;animation-name:moveInBottom;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.btn--color--red.sc-btn-exp, .btn--color--red.sc-btn-exp:after{background-color:var(--primary-30);color:var(--primary-10)}.btn--color--red--white.sc-btn-exp{color:var(--white)}.btn--color--red--black.sc-btn-exp{color:var(--primary-10)}.btn--color--blue.sc-btn-exp, .btn--color--blue.sc-btn-exp:after{background-color:var(--primary-70);color:var(--primary-10)}.btn--color--blue--white.sc-btn-exp{color:var(--white)}.btn--color--blue--black.sc-btn-exp{color:var(--primary-10)}.btn--color--orange.sc-btn-exp, .btn--color--orange.sc-btn-exp:after{background-color:var(--warning-70);color:var(--primary-10)}.btn--color--orange--white.sc-btn-exp{color:var(--white)}.btn--color--orange--black.sc-btn-exp{color:var(--primary-10)}.btn.sc-btn-exp:hover{-webkit-transform:translateY(-5px);transform:translateY(-5px);-webkit-box-shadow:0 10px 20px rgba(var(--primary-70),.51);box-shadow:0 10px 20px rgba(var(--primary-70),.51)}.btn.sc-btn-exp:hover:after{-webkit-transform:scalex(1.4) scaleY(1.6);transform:scalex(1.4) scaleY(1.6);opacity:0}.btn.sc-btn-exp:active{-webkit-transform:translateY(-1px);transform:translateY(-1px);-webkit-box-shadow:0 10px 20px rgba(var(--primary-70),.51);box-shadow:0 10px 20px rgba(var(--primary-70),.51)}.btn.sc-btn-exp:after{content:\"\";display:inline-block;height:100%;width:100%;border-radius:100px;position:absolute;top:0;left:0;z-index:-1;-webkit-transition:all .4s;transition:all .4s}.btn-text.sc-btn-exp:link, .btn-text.sc-btn-exp:visited{font-size:1.6rem;color:var(--primary-70);display:inline-block;text-decoration:none;border-bottom:1px solid var(--primary-70);padding:3px;-webkit-transition:all .3s;transition:all .3s}.btn-text.sc-btn-exp:hover{-webkit-transform:translateY(-5px);transform:translateY(-5px);background:var(--primary-70);color:var(--primary-70);-webkit-box-shadow:0 1rem 2rem rgba(var(--primary-70),.25);box-shadow:0 1rem 2rem rgba(var(--primary-70),.25)}.btn-text.sc-btn-exp:active{-webkit-transform:translateY(-2px);transform:translateY(-2px)}"; }
}

export { buttonExample as BtnExp };
