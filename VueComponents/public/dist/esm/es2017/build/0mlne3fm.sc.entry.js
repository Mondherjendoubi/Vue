/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class listGroupItem {
    render() {
        var indents = [];
        let checkBox;
        if (this.checkBox) {
            checkBox = "check";
            indents.push(h("label", { class: "checkbox path" },
                h("input", { type: "checkbox" }),
                h("svg", { viewBox: "0 0 21 21" },
                    h("path", { d: "M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186" }))));
        }
        let active = "";
        if (this.active === "true") {
            console.log("active true");
            active = "active";
        }
        return [
            h("div", { class: `container container--${this.backgroundColor} container--${this.backgroundColor}--${active} container__${checkBox}` },
                indents,
                h("div", { class: ` container__slot container__${checkBox}__slot` },
                    h("slot", null)))
        ];
    }
    static get is() { return "list-group-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "type": String,
            "attr": "active",
            "reflectToAttr": true,
            "mutable": true
        },
        "backgroundColor": {
            "type": String,
            "attr": "background-color",
            "reflectToAttr": true,
            "mutable": true
        },
        "checkBox": {
            "type": String,
            "attr": "check-box",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return ".container.sc-list-group-item{position:relative;border:1px solid grey;width:100%;margin:-1px 0;padding:15px 20px;border-radius:4px;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.container__slot.sc-list-group-item{margin-left:20px}.container__check.sc-list-group-item{padding:13px 20px}.container__check__slot.sc-list-group-item{margin-left:10px}.container.sc-list-group-item   .checkbox.sc-list-group-item{--background:#f5f5f5;--border:#d1d6ee;--border-hover:#bbc1e1;--border-active:#1e2235;--tick:#fff;margin-left:-10px;position:relative}.container.sc-list-group-item   .checkbox.sc-list-group-item   input.sc-list-group-item, .container.sc-list-group-item   .checkbox.sc-list-group-item   svg.sc-list-group-item{width:21px;height:21px}.container.sc-list-group-item   .checkbox.sc-list-group-item   input.sc-list-group-item{-webkit-appearance:none;-moz-appearance:none;position:relative;outline:none;background:var(--background);border:none;margin:0;padding:0;cursor:pointer;border-radius:4px;-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s,-webkit-box-shadow .3s;-webkit-box-shadow:inset 0 0 0 var(--s,1px) var(--b,var(--border));box-shadow:inset 0 0 0 var(--s,1px) var(--b,var(--border))}.container.sc-list-group-item   .checkbox.sc-list-group-item   input.sc-list-group-item:hover{--s:2px;--b:var(--border-hover)}.container.sc-list-group-item   .checkbox.sc-list-group-item   input.sc-list-group-item:checked{--b:var(--border-active)}.container.sc-list-group-item   .checkbox.sc-list-group-item   svg.sc-list-group-item{pointer-events:none;fill:none;stroke-width:2px;stroke-linecap:round;stroke-linejoin:round;stroke:var(--stroke,var(--border-active));position:absolute;top:0;left:0;width:21px;height:21px;-webkit-transform:scale(var(--scale,1)) translateZ(0);transform:scale(var(--scale,1)) translateZ(0)}.container.sc-list-group-item   .checkbox.path.sc-list-group-item   input.sc-list-group-item:checked{--s:2px;-webkit-transition-delay:.4s;transition-delay:.4s}.container.sc-list-group-item   .checkbox.path.sc-list-group-item   input.sc-list-group-item:checked + svg.sc-list-group-item{--a:16.1 86.12;--o:102.22}.container.sc-list-group-item   .checkbox.path.sc-list-group-item   svg.sc-list-group-item{stroke-dasharray:var(--a,86.12);stroke-dashoffset:var(--o,86.12);-webkit-transition:stroke-dasharray .6s,stroke-dashoffset .6s;transition:stroke-dasharray .6s,stroke-dashoffset .6s}.container.sc-list-group-item   .checkbox.bounce.sc-list-group-item{--stroke:var(--tick)}.container.sc-list-group-item   .checkbox.bounce.sc-list-group-item   input.sc-list-group-item:checked{--s:11px}.container.sc-list-group-item   .checkbox.bounce.sc-list-group-item   input.sc-list-group-item:checked + svg.sc-list-group-item{-webkit-animation:bounce .4s linear .2s forwards;animation:bounce .4s linear .2s forwards}.container.sc-list-group-item   .checkbox.bounce.sc-list-group-item   svg.sc-list-group-item{--scale:0}\@-webkit-keyframes bounce{50%{-webkit-transform:scale(1.2);transform:scale(1.2)}75%{-webkit-transform:scale(.9);transform:scale(.9)}to{-webkit-transform:scale(1);transform:scale(1)}}\@keyframes bounce{50%{-webkit-transform:scale(1.2);transform:scale(1.2)}75%{-webkit-transform:scale(.9);transform:scale(.9)}to{-webkit-transform:scale(1);transform:scale(1)}}.container.sc-list-group-item   html.sc-list-group-item{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-smoothing:antialiased}.container.sc-list-group-item   *.sc-list-group-item, .container.sc-list-group-item   .sc-list-group-item:after, .container.sc-list-group-item   .sc-list-group-item:before{-webkit-box-sizing:inherit;box-sizing:inherit}.container.sc-list-group-item   body.sc-list-group-item{min-height:100vh;display:-ms-flexbox;display:flex;font-family:Roboto,Arial;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;background:#f6f8ff}.container.sc-list-group-item   body.sc-list-group-item   .grid.sc-list-group-item{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:24px}.container.sc-list-group-item   body.sc-list-group-item   .dribbble.sc-list-group-item{position:fixed;display:block;right:20px;bottom:20px}.container.sc-list-group-item   body.sc-list-group-item   .dribbble.sc-list-group-item   img.sc-list-group-item{display:block;height:28px}.container.sc-list-group-item   body.sc-list-group-item   .twitter.sc-list-group-item{position:fixed;display:block;right:64px;bottom:14px}.container.sc-list-group-item   body.sc-list-group-item   .twitter.sc-list-group-item   svg.sc-list-group-item{width:32px;height:32px;fill:#1da1f2}.container--red.sc-list-group-item{-webkit-transition:all .4s;transition:all .4s}.container--red--active.sc-list-group-item{background-color:var(--mono-05)}.container--red--active.sc-list-group-item:hover{-webkit-filter:brightness(110%);filter:brightness(110%);-webkit-transform:scale(1.01);transform:scale(1.01);background-color:var(--mono-05);cursor:pointer}.container--red.sc-list-group-item:not(.container--red--active):hover{-webkit-filter:brightness(130%);filter:brightness(130%);-webkit-transform:scale(1.01);transform:scale(1.01);cursor:pointer;background-color:#a9a9a9}.container--blue.sc-list-group-item{-webkit-transition:all .4s;transition:all .4s}.container--blue--active.sc-list-group-item{background-color:var(--primary-70)}.container--blue--active.sc-list-group-item:hover{-webkit-transform:scale(1.01);transform:scale(1.01);-webkit-filter:brightness(140%);filter:brightness(140%);background-color:var(--primary-70);cursor:pointer}.container--blue.sc-list-group-item:not(.container--blue--active):hover{-webkit-transform:scale(1.01);transform:scale(1.01);-webkit-filter:brightness(130%);filter:brightness(130%);cursor:pointer;background-color:#a9a9a9}.container--orange.sc-list-group-item{-webkit-transition:all .4s;transition:all .4s}.container--orange--active.sc-list-group-item{background-color:var(--warning-70)}.container--orange--active.sc-list-group-item:hover{-webkit-filter:brightness(110%);filter:brightness(110%);-webkit-transform:scale(1.01);transform:scale(1.01);background-color:var(--warning-70);cursor:pointer}.container--orange.sc-list-group-item:not(.container--orange--active):hover{-webkit-filter:brightness(130%);filter:brightness(130%);-webkit-transform:scale(1.01);transform:scale(1.01);cursor:pointer;background-color:#a9a9a9}h3.sc-list-group-item{font-size:1.3rem;color:#000;margin:0 auto}"; }
}

export { listGroupItem as ListGroupItem };
