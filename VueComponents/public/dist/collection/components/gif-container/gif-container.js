export class gifContainer {
    render() {
        return [
            h("div", { class: "item-1" },
                h("img", { src: this.url, alt: "logo", class: "logo" }))
        ];
    }
    static get is() { return "gif-comp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "url": {
            "type": String,
            "attr": "url",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return "/**style-placeholder:gif-comp:**/"; }
}
