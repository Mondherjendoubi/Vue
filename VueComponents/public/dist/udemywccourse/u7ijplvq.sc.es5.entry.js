/*! Built with http://stenciljs.com */
UdemyWCCourse.loadBundle("u7ijplvq",["exports"],function(t){var o=window.UdemyWCCourse.h,r=function(){function t(){}return t.prototype.captionStoryChanged=function(t,o){t!==o&&(this.captionInput=t)},t.prototype.colorButtonChanged=function(t,o){t!==o&&(this.titleInput=t)},t.prototype.fontColorInputChanged=function(t,o){t!==o&&(this.fontColorInput=t)},t.prototype.colorStoryChanged=function(t,o){t!==o&&(this.colorStoryInput=t)},t.prototype.titleStoryChanged=function(t,o){t!==o&&(this.fontColorInput=t)},t.prototype.componentWillLoad=function(){this.colorStory&&(this.colorStoryInput=this.colorStory,this.fontColorInput=this.fontColor,this.titleInput=this.titleStory,this.captionInput=this.captionStory)},t.prototype.render=function(){return[o("div",{class:"story story--"+this.colorStoryInput},o("figure",{class:"story__shape"},o("img",{src:this.url,alt:"Person on a tour",class:"story__img"}),o("figcaption",{class:"story__caption"},this.captionInput)),o("div",{class:"story__text"},o("h3",{class:"heading-tertiary u-margin-bottom-small"},this.titleInput),o("p",null,o("slot",{name:"p"}))))]},Object.defineProperty(t,"is",{get:function(){return"story-comp"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{captionInput:{state:!0},captionStory:{type:String,attr:"caption-story",reflectToAttr:!0,mutable:!0,watchCallbacks:["captionStoryChanged"]},colorStory:{type:String,attr:"color-story",reflectToAttr:!0,mutable:!0,watchCallbacks:["colorStoryChanged"]},colorStoryInput:{state:!0},fontColor:{type:String,attr:"font-color",reflectToAttr:!0,mutable:!0,watchCallbacks:["fontColorInputChanged"]},fontColorInput:{state:!0},titleInput:{state:!0},titleStory:{type:String,attr:"title-story",reflectToAttr:!0,mutable:!0,watchCallbacks:["colorButtonChanged","titleStoryChanged"]},url:{type:String,attr:"url",reflectToAttr:!0,mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".story.sc-story-comp{width:75%;margin:0 auto;border-radius:3px;padding:5rem;padding-left:1rem;font-size:1.6rem;-webkit-transform:skewX(-12deg);transform:skewX(-12deg);margin-bottom:10px}.story--red.sc-story-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-30)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-30));-webkit-transition:all 1s;transition:all 1s}.story--red.sc-story-comp:hover{-webkit-transform:scale(1.01) skewX(-12deg);transform:scale(1.01) skewX(-12deg);-webkit-box-shadow:0 10px 20px var(--primary-30);box-shadow:0 10px 20px var(--primary-30);cursor:pointer}.story--blue.sc-story-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--primary-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--primary-70));-webkit-transition:all 1s;transition:all 1s}.story--blue.sc-story-comp:hover{-webkit-transform:scale(1.01) skewX(-12deg);transform:scale(1.01) skewX(-12deg);-webkit-box-shadow:0 10px 20px var(--primary-70);box-shadow:0 10px 20px var(--primary-70);cursor:pointer}.story--orange.sc-story-comp{background-image:-webkit-gradient(linear,left top,right top,from(var(--primary-10)),to(var(--warning-70)));background-image:linear-gradient(90deg,var(--primary-10),var(--warning-70));-webkit-transition:all 1s;transition:all 1s}.story--orange.sc-story-comp:hover{-webkit-transform:scale(1.01) skewX(-12deg);transform:scale(1.01) skewX(-12deg);-webkit-box-shadow:0 10px 20px var(--warning-70);box-shadow:0 10px 20px var(--warning-70);cursor:pointer}\@media only screen and (max-width:56.25em){.story.sc-story-comp{width:100%;padding:4rem;padding-left:7rem}}\@media only screen and (max-width:37.5em){.story.sc-story-comp{-webkit-transform:skewX(0);transform:skewX(0)}}.story__shape.sc-story-comp{left:70px;bottom:25px;width:14rem;height:14rem;float:left;-webkit-transform:translateX(-3rem) skewX(15deg);transform:translateX(-3rem) skewX(15deg);position:relative;overflow:hidden;border-radius:50%}\@supports ((-webkit-clip-path:polygon(0 0)) or (clip-path:polygon(0 0))) or (-webkit-clip-path:polygon(0 0)){.story__shape.sc-story-comp{-webkit-clip-path:circle(50% at 50% 50%);clip-path:circle(50% at 50% 50%);-webkit-shape-outside:circle(50% at 50% 50%);shape-outside:circle(50% at 50% 50%);border-radius:none}}\@media only screen and (max-width:37.5em){.story__shape.sc-story-comp{-webkit-transform:translateX(-3rem) skewX(0);transform:translateX(-3rem) skewX(0)}}.story__img.sc-story-comp{background-size:cover;height:100%;-webkit-transform:translateX(-4rem) scale(1.4);transform:translateX(-4rem) scale(1.4);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:all .5s;transition:all .5s}.story__text.sc-story-comp{left:0;color:#fff;-webkit-transform:skewX(12deg);transform:skewX(12deg)}\@media only screen and (max-width:37.5em){.story__text.sc-story-comp{-webkit-transform:skewX(0);transform:skewX(0)}}.story__text .sc-story-comp-s > p{color:hsla(0,0%,100%,.62);font-size:.78rem}.story__caption.sc-story-comp{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,20%);transform:translate(-50%,20%);color:#fff;text-transform:uppercase;font-size:1.7rem;text-align:center;opacity:0;-webkit-transition:all .5s;transition:all .5s;-webkit-backface-visibility:hidden;backface-visibility:hidden}.story.sc-story-comp:hover   .story__caption.sc-story-comp{opacity:1;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.story.sc-story-comp:hover   .story__img.sc-story-comp{-webkit-transform:translateX(-4rem) scale(1);transform:translateX(-4rem) scale(1);-webkit-filter:blur(3px) brightness(80%);filter:blur(3px) brightness(80%)}"},enumerable:!0,configurable:!0}),t}();t.StoryComp=r,Object.defineProperty(t,"__esModule",{value:!0})});