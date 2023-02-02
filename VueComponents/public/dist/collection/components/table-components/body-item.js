export class headItem {
    render() {
        return [
            h("div", { class: "container" },
                h("h3", null,
                    h("slot", null)))
        ];
    }
    static get is() { return "body-item"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:body-item:**/"; }
}
