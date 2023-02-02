import { AV_API_KEY } from '../global/global';
export class searchGif {
    constructor() {
        this.searchInputValid = false;
    }
    searchSymbolChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.searchInput = newValue;
            this.fetchGifWithUrl(newValue);
        }
    }
    navSelectedChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.searchInput = newValue;
            this.fetchGifWithUrl(newValue);
        }
    }
    fetchGifWithUrl(searchInput) {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${AV_API_KEY}&q=${searchInput}&limit=4&offset=0&rating=g&lang=en`).then((response) => {
            return response.json();
        }).then((parsedResponse) => {
            this.gifArray = parsedResponse['data'].map(match => {
                return { url: `https://media.giphy.com/media/${match['id']}/giphy.gif` };
            });
        }).catch((err) => {
            console.log(err);
        });
    }
    onFetchGif(event) {
        event.preventDefault();
        this.idSymbol = this.searchInput;
        this.fetchGifWithUrl(this.idSymbol);
    }
    componentDidLoad() {
        if (this.searchSymbol) {
            this.idSymbol = this.searchSymbol;
            this.searchInputValid = true;
            this.fetchGifWithUrl(this.idSymbol);
        }
    }
    componentWillLoad() {
        console.log("componenet will load");
        console.log(this.searchSymbol);
        if (this.searchSymbol) {
            this.searchInput = this.searchSymbol;
            this.idSymbol = this.searchSymbol;
            this.searchInputValid = true;
            this.fetchGifWithUrl(this.idSymbol);
        }
    }
    updateUserInput(event) {
        this.searchInput = event.target.value;
        if (this.searchInput.trim() !== '') {
            this.searchInputValid = true;
        }
        else {
            this.searchInputValid = false;
        }
    }
    hostData() {
        return { class: !this.searchInputValid ? 'hydrated invalid' : 'hydrated' };
    }
    render() {
        let dataContent;
        let index = 0;
        if (this.gifArray) {
            console.log(JSON.stringify(this.gifArray) + "  ");
            dataContent = this.gifArray.map((result) => (h("img", { slot: `col-${++index}`, src: result['url'], alt: "logo", class: `logo logo--${index}` })));
        }
        return [
            h("header", { class: "header" },
                h("div", { class: "text-box" },
                    h("h1", { class: "heading-primary" },
                        h("span", { class: "heading-primary-main" }, "Giphy"))),
                h("form", { id: "sr-form", onSubmit: this.onFetchGif.bind(this) },
                    h("input", { id: "sr-input", value: this.searchInput, onInput: this.updateUserInput.bind(this) }),
                    h("button", { id: "sr-button", type: "submit", disabled: !this.searchInputValid }, "Fetch"))),
            h("main", null,
                h("grid-comp", { columnType: "col-1-of-4" }, dataContent))
        ];
    }
    static get is() { return "sr-comp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "gifArray": {
            "state": true
        },
        "idSymbol": {
            "state": true
        },
        "navSelected": {
            "type": String,
            "attr": "nav-selected",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["navSelectedChanged"]
        },
        "searchInput": {
            "state": true
        },
        "searchInputValid": {
            "state": true
        },
        "searchSymbol": {
            "type": String,
            "attr": "search-symbol",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["searchSymbolChanged"]
        }
    }; }
    static get style() { return "/**style-placeholder:sr-comp:**/"; }
}
