export class headItem {
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
    static get style() { return "/**style-placeholder:modal-comp:**/"; }
}
