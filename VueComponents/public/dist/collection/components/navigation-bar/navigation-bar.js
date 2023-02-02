export class navigationBar {
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
    static get style() { return "/**style-placeholder:nav-comp:**/"; }
}
