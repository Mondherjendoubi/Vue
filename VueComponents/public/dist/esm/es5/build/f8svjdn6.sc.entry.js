/*! Built with http://stenciljs.com */
import{h}from"../udemywccourse.core.js";var bodyTable=function(){function e(){}return e.prototype.render=function(){if(this.numberColumn){console.log(this.numberColumn+"numbColum");for(var e=[],r=0;r<this.numberColumn;r++)e.push(h("div",{class:"col-1-of-4"},h("slot",{name:"col-"+(r+1)})))}return console.log(JSON.stringify(e)+"array"),[h("div",{class:"body-container"},e)]},Object.defineProperty(e,"is",{get:function(){return"body-table"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{numberColumn:{type:Number,attr:"number-column",reflectToAttr:!0,mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".body-container.sc-body-table{outline-offset:20px;border-bottom:1px solid var(--black);max-width:1440px;margin:0 auto;margin-top:20px}.body-container.sc-body-table:not(:last-child){margin-bottom:2rem}.body-container.sc-body-table:after{content:\"\";display:table;clear:both}.body-container.sc-body-table   [class^=col-].sc-body-table{float:left}.body-container.sc-body-table   [class^=col-].sc-body-table:not(:last-child){margin-right:6rem}.body-container.sc-body-table   .col-1-of-2.sc-body-table{width:calc((100% - 6rem) / 2)}.body-container.sc-body-table   .col-1-of-3.sc-body-table{width:calc((100% - 2 * 6rem) / 3)}.body-container.sc-body-table   .col-1-of-5.sc-body-table{width:calc((100% - 4 * 6rem) / 5)}.body-container.sc-body-table   .col-1-of-6.sc-body-table{width:calc((100% - 5 * 6rem) / 6)}.body-container.sc-body-table   .col-1-of-7.sc-body-table{width:calc((100% - 6 * 6rem) / 7)}.body-container.sc-body-table   .col-2-of-3.sc-body-table{width:calc(2 * ((100% - 2 * 6rem) / 3) + 6rem)}.body-container.sc-body-table   .col-1-of-4.sc-body-table{width:calc((100% - 3 * 6rem) / 4)}.body-container.sc-body-table   .col-2-of-4.sc-body-table{width:calc(2 * ((100% - 3 * 6rem) / 4) + 6rem)}.body-container.sc-body-table   .col-3-of-4.sc-body-table{width:calc(3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem)}"},enumerable:!0,configurable:!0}),e}();export{bodyTable as BodyTable};