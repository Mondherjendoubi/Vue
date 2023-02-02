/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class headItem {
    render() {
        return [
            h("div", { class: "modal" },
                h("div", { class: "modal__title" },
                    h("h3", null, "Modal title")),
                h("div", { class: "modal__body" },
                    h("h3", null, "Modal body text here Modal body text here Modal body text here Modal body text here Modal body text herev")),
                h("div", { class: "modal__buttons" },
                    h("btn-exp", { "color-button": "red", "font-color": "white", content: "Decline", class: "modal__buttons--button1" }, "Button1"),
                    h("btn-exp", { "color-button": "blue", "font-color": "white", content: "Accept", class: "modal__buttons--button2" }, "Button1")))
        ];
    }
    static get is() { return "modal-comp"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "\@charset \"UTF-8\";.modal{position:relative;height:400px;width:800px;background-color:#fff;-ms-flex-align:center;align-items:center;margin:0 auto;border:1px solid #000;-webkit-box-shadow:0 1px 2px red;box-shadow:0 1px 2px red;border-radius:1%}.modal__title{position:absolute;color:#001180;width:97.5%;border-bottom:1px solid #5e5151;padding:1px 10px}.modal__title h3{margin-left:30px;text-transform:uppercase;font-family:sans-serif;font-size:2.6rem;font-weight:300}.modal__title:after{position:absolute;color:#000;right:0;content:\"×\";font-size:4.5rem;width:1em;height:1em;top:10px;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.modal__title:hover:after{color:red;-webkit-transform:scale(1.1);transform:scale(1.1);cursor:pointer}.modal__body{position:absolute;top:130px;color:#003780;border-bottom:1px solid #5e5151;width:97.5%;padding:70px 10px;bottom:80px}.modal__body h3{margin-left:30px}.modal__buttons{position:absolute;bottom:50px;left:360px}.modal__buttons--button1{margin-right:230px;font-size:.1rem}"; }
}

export { headItem as ModalComp };
