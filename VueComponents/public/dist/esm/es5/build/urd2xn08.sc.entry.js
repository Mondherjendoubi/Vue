/*! Built with http://stenciljs.com */
import{h}from"../udemywccourse.core.js";var tabComponent=function(){function e(){}return e.prototype.onSelectButton=function(e){this.buttonSelected.emit(e)},e.prototype.hostData=function(){return{class:this.activeState?"is-active "+this.backgroundColor:this.backgroundColor+" "}},e.prototype.onLinkSelected=function(e){e.detail==this.numberRow?(console.log(e),console.log(e.detail),this.activeState="true"):this.activeState=""},e.prototype.render=function(){return[h("li",{onClick:this.onSelectButton.bind(this,this.numberRow)},h("a",{href:"#tab-two"},this.content))]},Object.defineProperty(e,"is",{get:function(){return"tab-comp"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activeState:{type:String,attr:"active-state",reflectToAttr:!0,mutable:!0},backgroundColor:{type:String,attr:"background-color",reflectToAttr:!0,mutable:!0},content:{type:String,attr:"content",reflectToAttr:!0,mutable:!0},numberRow:{type:Number,attr:"number-row",reflectToAttr:!0,mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"buttonSelected",method:"buttonSelected",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:clickedButton",method:"onLinkSelected"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-tab-comp-h{margin:0 auto;position:relative;-webkit-transition:all .2s;transition:all .2s;display:inline-block;padding:10px 20px;background-color:#1da1f2}.red.sc-tab-comp-h{background-color:var(--mono-05)}.blue.sc-tab-comp-h{background-color:var(--primary-70)}.orange.sc-tab-comp-h{background-color:var(--warning-70)}.is-active.sc-tab-comp-h{border-bottom:2px solid #000}.sc-tab-comp-h:hover{background-color:#adadad;-webkit-transform:translateY(-2px);transform:translateY(-2px);cursor:pointer;color:red}a.sc-tab-comp{color:#fff;margin-bottom:-10px;text-decoration:none;font-family:sans-serif;font-size:15px;font-weight:10}"},enumerable:!0,configurable:!0}),e}();export{tabComponent as TabComp};