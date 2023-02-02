/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class navigationBar {
    onSelectNav(symbol) {
        this.navSelected.emit(symbol);
    }
    render() {
        return [
            h("div", { class: "nav-container" },
                h("div", { class: "logo-box" },
                    h("img", { src: "https://cliply.co/wp-content/uploads/2021/02/372102690_TIKTOK_LOGO_400.gif", alt: "logo", class: "logo" })),
                h("button", { class: "link-item", onClick: this.onSelectNav.bind(this, "trending") }, "trending"),
                h("button", { class: "link-item", onClick: this.onSelectNav.bind(this, "Random") }, "Random"),
                h("button", { class: "link-item", onClick: this.onSelectNav.bind(this, "New") }, "New"))
        ];
    }
    static get is() { return "nav-comp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "url": {
            "type": String,
            "attr": "url",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "navSelected",
            "method": "navSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-nav-comp-h{left:0;height:2cm;font-family:sans-serif;font-weight:400;font-size:20px;z-index:1;background-color:rgba(102,23,164,.07);background-size:cover;background-blend-mode:screen;-webkit-clip-path:polygon(0 0,100% 0,100% 85%,0 100%);clip-path:polygon(0 0,100% 0,100% 85%,0 100%);background-image:-webkit-gradient(linear,left top,right top,from(rgba(24,14,14,.13)),to(rgba(0,0,0,.29)));background-image:linear-gradient(90deg,rgba(24,14,14,.13),rgba(0,0,0,.29))}.nav-container.sc-nav-comp, .sc-nav-comp-h{position:absolute;width:100%}.link-item.sc-nav-comp{position:relative;text-transform:uppercase;text-decoration:none;background:#f5f5f5;border:.3rem solid #000;color:#000;left:5%;margin-left:20px;margin-bottom:20px;top:70%;margin-top:10px;padding:16px 45px;border-radius:100px;-webkit-transition:all .5s;transition:all .5s}.link-item.sc-nav-comp:active, .link-item.sc-nav-comp:hover{-webkit-transform:translateY(-5px);transform:translateY(-5px);-webkit-box-shadow:0 10px 20px #020000;box-shadow:0 10px 20px #020000;background:#000;color:#f1f1f1;cursor:pointer}.logo-box.sc-nav-comp{position:absolute;top:15px;left:4px;z-index:2}.logo.sc-nav-comp{height:45px;-webkit-transition:all 1s;transition:all 1s}.logo.sc-nav-comp:hover{-webkit-transform:scalex(1.2) scaleY(1.2);transform:scalex(1.2) scaleY(1.2);cursor:pointer}"; }
}

export { navigationBar as NavComp };
