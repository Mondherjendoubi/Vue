export class table {
    render() {
        return [
            h("div", { class: "table" },
                h("slot", null))
        ];
    }
    static get is() { return "table-comp"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:table-comp:**/"; }
}
