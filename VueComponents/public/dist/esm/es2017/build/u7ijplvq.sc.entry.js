/*! Built with http://stenciljs.com */
import { h } from '../udemywccourse.core.js';

class StoryComp {
    captionStoryChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.captionInput = newValue;
        }
    }
    colorButtonChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.titleInput = newValue;
        }
    }
    fontColorInputChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.fontColorInput = newValue;
        }
    }
    colorStoryChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.colorStoryInput = newValue;
        }
    }
    titleStoryChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.fontColorInput = newValue;
        }
    }
    componentWillLoad() {
        if (this.colorStory) {
            this.colorStoryInput = this.colorStory;
            this.fontColorInput = this.fontColor;
            this.titleInput = this.titleStory;
            this.captionInput = this.captionStory;
        }
    }
    render() {
        return [
            h("div", { class: `story story--${this.colorStoryInput}` },
                h("figure", { class: "story__shape" },
                    h("img", { src: this.url, alt: "Person on a tour", class: "story__img" }),
                    h("figcaption", { class: "story__caption" }, this.captionInput)),
                h("div", { class: "story__text" },
                    h("h3", { class: "heading-tertiary u-margin-bottom-small" }, this.titleInput),
                    h("p", null,
                        h("slot", { name: 'p' }))))
        ];
    }
    static get is() { return "story-comp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "captionInput": {
            "state": true
        },
        "captionStory": {
            "type": String,
            "attr": "caption-story",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["captionStoryChanged"]
        },
        "colorStory": {
            "type": String,
            "attr": "color-story",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["colorStoryChanged"]
        },
        "colorStoryInput": {
            "state": true
        },
        "fontColor": {
            "type": String,
            "attr": "font-color",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["fontColorInputChanged"]
        },
        "fontColorInput": {
            "state": true
        },
        "titleInput": {
            "state": true
        },
        "titleStory": {
            "type": String,
            "attr": "title-story",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["colorButtonChanged", "titleStoryChanged"]
        },
        "url": {
            "type": String,
            "attr": "url",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return ".story.sc-story-comp{width:75%;margin:0 auto;border-radius:3px;padding:5rem;padding-left:1rem;font-size:1.6rem;-webkit-transform:skewX(-12deg);transform:skewX(-12deg);margin-bottom:10px}.story--red.sc-story-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-30)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-30));-webkit-transition:all 1s;transition:all 1s}.story--red.sc-story-comp:hover{-webkit-transform:scale(1.01) skewX(-12deg);transform:scale(1.01) skewX(-12deg);-webkit-box-shadow:0 10px 20px var(--primary-30);box-shadow:0 10px 20px var(--primary-30);cursor:pointer}.story--blue.sc-story-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-70));-webkit-transition:all 1s;transition:all 1s}.story--blue.sc-story-comp:hover{-webkit-transform:scale(1.01) skewX(-12deg);transform:scale(1.01) skewX(-12deg);-webkit-box-shadow:0 10px 20px var(--primary-70);box-shadow:0 10px 20px var(--primary-70);cursor:pointer}.story--orange.sc-story-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--warning-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--warning-70));-webkit-transition:all 1s;transition:all 1s}.story--orange.sc-story-comp:hover{-webkit-transform:scale(1.01) skewX(-12deg);transform:scale(1.01) skewX(-12deg);-webkit-box-shadow:0 10px 20px var(--warning-70);box-shadow:0 10px 20px var(--warning-70);cursor:pointer}\@media only screen and (max-width:56.25em){.story.sc-story-comp{width:100%;padding:4rem;padding-left:7rem}}\@media only screen and (max-width:37.5em){.story.sc-story-comp{-webkit-transform:skewX(0);transform:skewX(0)}}.story__shape.sc-story-comp{left:70px;bottom:25px;width:14rem;height:14rem;float:left;-webkit-transform:translateX(-3rem) skewX(15deg);transform:translateX(-3rem) skewX(15deg);position:relative;overflow:hidden;border-radius:50%}\@supports ((-webkit-clip-path:polygon(0 0)) or (clip-path:polygon(0 0))) or (-webkit-clip-path:polygon(0 0)){.story__shape.sc-story-comp{-webkit-clip-path:circle(50% at 50% 50%);clip-path:circle(50% at 50% 50%);-webkit-shape-outside:circle(50% at 50% 50%);shape-outside:circle(50% at 50% 50%);border-radius:none}}\@media only screen and (max-width:37.5em){.story__shape.sc-story-comp{-webkit-transform:translateX(-3rem) skewX(0);transform:translateX(-3rem) skewX(0)}}.story__img.sc-story-comp{background-size:cover;height:100%;-webkit-transform:translateX(-4rem) scale(1.4);transform:translateX(-4rem) scale(1.4);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:all .5s;transition:all .5s}.story__text.sc-story-comp{left:0;color:#fff;-webkit-transform:skewX(12deg);transform:skewX(12deg)}\@media only screen and (max-width:37.5em){.story__text.sc-story-comp{-webkit-transform:skewX(0);transform:skewX(0)}}.story__text .sc-story-comp-s > p{color:hsla(0,0%,100%,.62);font-size:.78rem}.story__caption.sc-story-comp{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,20%);transform:translate(-50%,20%);color:#fff;text-transform:uppercase;font-size:1.7rem;text-align:center;opacity:0;-webkit-transition:all .5s;transition:all .5s;-webkit-backface-visibility:hidden;backface-visibility:hidden}.story.sc-story-comp:hover   .story__caption.sc-story-comp{opacity:1;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.story.sc-story-comp:hover   .story__img.sc-story-comp{-webkit-transform:translateX(-4rem) scale(1);transform:translateX(-4rem) scale(1);-webkit-filter:blur(3px) brightness(80%);filter:blur(3px) brightness(80%)}"; }
}

export { StoryComp };
