/*! Built with http://stenciljs.com */
import{h}from"../udemywccourse.core.js";var headTable=function(){function e(){}return e.prototype.render=function(){if(this.numberColumn){console.log(this.numberColumn+"numbColum");for(var e=[],r=0;r<this.numberColumn;r++)e.push(h("div",{class:"col-1-of-4"},h("slot",{name:"col-"+(r+1)})))}return console.log(JSON.stringify(e)+"array"),[h("div",{class:"head-container"},e)]},Object.defineProperty(e,"is",{get:function(){return"head-table"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{numberColumn:{type:Number,attr:"number-column",reflectToAttr:!0,mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".head-container{outline-offset:20px;border-bottom:1px solid var(--black);max-width:1440px;margin:0 auto}.head-container:not(:last-child){margin-bottom:2rem}.head-container:after{content:\"\";display:table;clear:both}.head-container [class^=col-]{float:left}.head-container [class^=col-]:not(:last-child){margin-right:6rem}.head-container .col-1-of-2{width:calc((100% - 6rem) / 2)}.head-container .col-1-of-3{width:calc((100% - 2 * 6rem) / 3)}.head-container .col-1-of-5{width:calc((100% - 4 * 6rem) / 5)}.head-container .col-1-of-6{width:calc((100% - 5 * 6rem) / 6)}.head-container .col-1-of-7{width:calc((100% - 6 * 6rem) / 7)}.head-container .col-2-of-3{width:calc(2 * ((100% - 2 * 6rem) / 3) + 6rem)}.head-container .col-1-of-4{width:calc((100% - 3 * 6rem) / 4)}.head-container .col-2-of-4{width:calc(2 * ((100% - 3 * 6rem) / 4) + 6rem)}.head-container .col-3-of-4{width:calc(3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem)}"},enumerable:!0,configurable:!0}),e}();export{headTable as HeadTable};