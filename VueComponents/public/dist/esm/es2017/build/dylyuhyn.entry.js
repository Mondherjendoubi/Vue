/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class gridComp {
    searchSymbolChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            console.log(newValue + " " + oldValue);
        }
    }
    render() {
        return [
            h("div", { class: "row" },
                h("div", { class: "col-1-of-4" },
                    h("slot", { name: 'col-1' })),
                h("div", { class: "col-1-of-4" },
                    h("slot", { name: 'col-2' })),
                h("div", { class: "col-1-of-4" },
                    h("slot", { name: 'col-3' })),
                h("div", { class: "col-1-of-4" },
                    h("slot", { name: 'col-4' })))
        ];
    }
    static get is() { return "grid-comp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "columnType": {
            "type": String,
            "attr": "column-type",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["searchSymbolChanged"]
        }
    }; }
    static get style() { return ":host{position:absolute;left:0;width:100%;font-family:sans-serif;font-weight:400;font-size:20px;z-index:2;background-blend-mode:screen}.row{max-width:1340px;margin:0 auto}.row:not(:last-child){margin-bottom:20px}.row:after{content:\"\";display:table;clear:both}.row [class^=col-]{float:left}.row [class^=col-]:not(:last-child){margin-right:40px}.row .col-1-of-2{width:calc((100% - 40px) / 2)}.row .col-1-of-3{width:calc((100% - (40px * 2)) / 3)}.row .col-2-of-3{width:calc(calc((100% - (40px * 2)) / 3) * 2 + 40px)}.row .col-1-of-4{width:calc((100% - (40px * 3)) / 4)}.row .col-2-of-4{width:calc(calc((100% - (40px * 3)) / 4) * 2 + 40px)}.row .col-3-of-4{width:calc(calc((100% - (40px * 3)) / 4) + calc(calc((100% - (40px * 3)) / 4) * 2 + 40px) + 40px)}"; }
}

const AV_API_KEY = "xGecMac9bUOW6k69c92N2bbGYWu9MKef";

class searchGif {
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
    static get style() { return ":host{position:absolute;font-family:sans-serif;max-width:100%;font-size:20px;width:99%;height:500px}gif-comp{right:0;height:100%;width:100%}.header{position:absolute;background-size:cover;background-position:top;left:35%;top:10%}.header .text-box{position:absolute;top:1rem;left:52%;z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box}.header .text-box .heading-primary-main{text-transform:uppercase;-webkit-backface-visibility:hidden;backface-visibility:hidden;margin-bottom:40px;position:relative;top:10%;left:80px;display:block;font-size:60px;font-weight:400;-webkit-animation-name:moveInRight;animation-name:moveInRight;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;letter-spacing:2px;-webkit-transition:all .3s;transition:all .3s;color:var(--primary-50);-webkit-background-clip:text}.header .text-box .heading-primary-main:hover{-webkit-transform:scale(1.05) translateY(-5px);transform:scale(1.05) translateY(-5px)}.header #sr-form{position:absolute;top:8rem;left:50%;width:600px;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .4s ease-out;transition:all .4s ease-out}.header #sr-form #sr-input{text-transform:uppercase;text-decoration:none;position:relative;font-size:inherit;color:var(--mono-30);background:var(--mono-10);border:.3rem solid #000;left:1%;width:30%;top:1px;height:3%;padding:7px 45px;border-radius:100px;-webkit-transition:all .5s;transition:all .5s}.header #sr-form #sr-input:disabled{background:#f30000;border-color:#000;cursor:text}.header #sr-form #sr-input:disabled:hover{background:#d2052b;-webkit-box-shadow:0 5px 10px #d2052b;box-shadow:0 5px 10px #d2052b;border-color:#000;cursor:not-allowed}.header #sr-form #sr-button{float:bottom;text-transform:uppercase;text-decoration:none;background:var(--primary-50);border:.3rem solid #000;color:#000;left:2%;margin:2rem 2rem;padding:16px 45px;border-radius:100px;-webkit-transition:all .5s;transition:all .5s}.header #sr-form #sr-button:active{-webkit-transform:translateY(-1px);transform:translateY(-1px);-webkit-box-shadow:0 5px 10px rgba(126,0,255,.51);box-shadow:0 5px 10px rgba(126,0,255,.51);cursor:pointer}.header #sr-form #sr-button:hover{-webkit-transform:translateY(-5px);transform:translateY(-5px);-webkit-box-shadow:0 10px 20px #21c921;box-shadow:0 10px 20px #21c921;background:#246e24;color:#130000;cursor:pointer}.header #sr-form #sr-button:disabled{background:#f30000;border-color:#000;cursor:not-allowed}.header #sr-form #sr-button:disabled:hover{background:#d2052b;-webkit-box-shadow:0 5px 10px #d2052b;box-shadow:0 5px 10px #d2052b;border-color:#000;cursor:not-allowed}.header:hover #sr-form:not(:hover){-webkit-transform:scale(.99);transform:scale(.99)}.row{max-width:1540px;margin:0 auto}.row:not(:last-child){margin-bottom:80px}.row:after{content:\"\";display:table;clear:both}.row [class^=col-]{float:left;border-radius:100px}.row [class^=col-]:not(:last-child){margin-right:60px}main{position:absolute;bottom:0;width:100%;height:100px;-ms-flex-align:center;align-items:center;margin:2rem 30px;left:20px}gif-comp{height:100px;width:25%}.logo{height:320px;width:270px;-webkit-box-shadow:0 1.5rem 40px rgba(0,0,0,.35);box-shadow:0 1.5rem 40px rgba(0,0,0,.35);margin:0 2px;-webkit-transition:all .3s ease-out;transition:all .3s ease-out;outline-offset:.5rem;border:5px solid #000}.logo--1:hover{outline:2px solid #024ae5;-webkit-box-shadow:0 1.5rem 40px rgba(184,16,210,.55);box-shadow:0 1.5rem 40px rgba(184,16,210,.55)}.logo--1:hover,.logo--2:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.logo--2:hover{outline:2px solid #7702e5;-webkit-box-shadow:0 1.5rem 40px rgba(16,152,210,.55);box-shadow:0 1.5rem 40px rgba(16,152,210,.55)}.logo--3:hover{outline:2px solid #0723d9;-webkit-box-shadow:0 1.5rem 40px rgba(187,154,24,.55);box-shadow:0 1.5rem 40px rgba(187,154,24,.55)}.logo--3:hover,.logo--4:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.logo--4:hover{outline:2px solid #bb9a18;-webkit-box-shadow:0 1.5rem 40px rgba(184,16,210,.55);box-shadow:0 1.5rem 40px rgba(184,16,210,.55)}"; }
}

export { gridComp as GridComp, searchGif as SrComp };
