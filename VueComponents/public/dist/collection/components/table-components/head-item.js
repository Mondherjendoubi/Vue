export class headItem {
    render() {
        return [
            h("button", { class: "btn-text" },
                h("slot", null))
        ];
    }
    static get is() { return "head-item"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:head-item:**/"; }
}
