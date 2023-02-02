/*! Built with http://stenciljs.com */
import{h}from"../udemywccourse.core.js";var cardComponent=function(){function t(){}return t.prototype.cardBackButtonColorChanged=function(t,o){t!==o&&(this.cardBackButtonColorInput=t)},t.prototype.cardBackButtonColorFontChanged=function(t,o){t!==o&&(this.cardBackButtonColorFontInput=t)},t.prototype.spanColorInputChanged=function(t,o){t!==o&&(this.colorSpan=t,console.log(this.colorFront+"new Color in watch"))},t.prototype.cardFrontColorChanged=function(t,o){t!==o&&(this.colorFront=t,console.log(this.colorFront+"new Color in watch"))},t.prototype.cardBackColorChanged=function(t,o){t!==o&&(this.colorBack=t,console.log(this.colorFront+"new Color in watch"))},t.prototype.componentWillLoad=function(){console.log("componenet will load"),console.log(this.cardFrontColor),this.cardFrontColor&&(this.colorFront=this.cardFrontColor,this.colorBack=this.cardBackColor,this.colorSpan=this.spanColorInput,this.cardBackButtonColorInput=this.cardBackButtonColor,this.cardBackButtonColorFontInput=this.cardBackButtonColorFont,console.log(this.colorFront+"componentWillLoad"))},t.prototype.hostData=function(){return{class:this.cardFrontColor?"hydrated ":"hydrated "+this.cardFrontColor}},t.prototype.render=function(){return[h("div",{class:"card"},h("div",{class:"card__side card__side--front card__side--front--"+this.colorFront},h("div",{class:"card__picture card__picture--1"},h("img",{src:this.url})),h("h4",{class:"card__heading"},h("span",{class:"card__heading-span card__heading-span--"+this.colorSpan},this.title)),h("div",{class:"card__details"},h("slot",{name:"p"}))),h("div",{class:"card__side card__side--back card__side--back--"+this.colorBack},h("div",{class:"card__cta"},h("div",{class:"card__price-box"},h("p",{class:"card__price-only"},"Only"),h("p",{class:"card__price-value"},"$",this.price)),h("btn-exp",{"color-button":this.cardBackButtonColorInput,"font-color":this.cardBackButtonColorFont,content:"Button"}))))]},Object.defineProperty(t,"is",{get:function(){return"card-comp"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{cardBackButtonColor:{type:String,attr:"card-back-button-color",reflectToAttr:!0,mutable:!0,watchCallbacks:["cardBackButtonColorChanged"]},cardBackButtonColorFont:{type:String,attr:"card-back-button-color-font",reflectToAttr:!0,mutable:!0,watchCallbacks:["cardBackButtonColorFontChanged"]},cardBackButtonColorFontInput:{state:!0},cardBackButtonColorInput:{state:!0},cardBackColor:{type:String,attr:"card-back-color",reflectToAttr:!0,mutable:!0,watchCallbacks:["cardBackColorChanged"]},cardFrontColor:{type:String,attr:"card-front-color",reflectToAttr:!0,mutable:!0,watchCallbacks:["spanColorInputChanged","cardFrontColorChanged"]},colorBack:{state:!0},colorFront:{state:!0},colorSpan:{state:!0},price:{type:String,attr:"price",reflectToAttr:!0,mutable:!0},spanColorInput:{type:String,attr:"span-color-input",reflectToAttr:!0,mutable:!0},title:{type:String,attr:"title",reflectToAttr:!0,mutable:!0},url:{type:String,attr:"url",reflectToAttr:!0,mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":root{--orange:253,166,60;--orange-light:rgba(var(--orange),0.15)}.card{-webkit-perspective:1500px;perspective:1500px;-moz-perspective:150rem;position:relative;height:30rem}.card__side{position:absolute;top:0;left:0;color:#fff;font-size:2rem;height:30rem;-webkit-transition:all .8s ease;transition:all .8s ease;width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:3px;overflow:hidden;-webkit-box-shadow:0 1.5rem 40px rgba(var(--primary-30),.15);box-shadow:0 1.5rem 40px rgba(var(--primary-30),.15)}.card__side--front--red{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-30)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-30))}.card__side--front--blue{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-70))}.card__side--front--orange{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--warning-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--warning-70))}.card__side--back{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card__side--back--red{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-30)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-30))}.card__side--back--blue{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-70))}.card__side--back--orange{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--warning-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--warning-70))}.card:hover .card__side--front{-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)}.card:hover .card__side--back{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}.card__picture,.card__picture img{background-size:cover}.card__picture img{height:20rem;background-blend-mode:screen;-webkit-clip-path:polygon(0 0,100% 0,100% 85%,0 100%);clip-path:polygon(0 0,100% 0,100% 85%,0 100%);display:block;margin-left:auto;margin-right:auto;width:100%}.card__heading{font-size:2.8rem;font-weight:300;text-transform:uppercase;color:var(--primary-05);position:absolute;text-align:right;top:12rem;right:3rem;width:75%}.card__heading-span{padding:.3rem 1.2rem;box-decoration-break:clone;-webkit-box-decoration-break:clone}.card__heading-span--red{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-30)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-30))}.card__heading-span--blue{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-70))}.card__heading-span--orange{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--warning-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--warning-70))}.card__details{position:relative;-ms-flex-align:center;align-items:center}.card__details ::slotted(p){position:absolute;left:2rem;top:3rem;margin:0 auto;padding:0;list-style:none;width:80%;text-align:center;color:hsla(0,0%,100%,.62);font-size:.78rem}.card__cta{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:90%;text-align:center;-ms-flex-align:center;align-items:center}.card__cta btn-exp{position:absolute;left:2.5rem;bottom:0}.card__price-box{text-align:center;margin-bottom:4rem;color:var(--primary-05)}.card__price-only{font-size:1.4rem;text-transform:uppercase}.card__price-value{margin:0;font-size:6rem;font-weight:100}"},enumerable:!0,configurable:!0}),t}();export{cardComponent as CardComp};