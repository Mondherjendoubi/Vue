/*! Built with http://stenciljs.com */
const{h:t}=window.UdemyWCCourse;class e{render(){if(this.numberColumn){console.log(this.numberColumn+"numbColum");for(var e=[],r=0;r<this.numberColumn;r++)e.push(t("slot",{name:`col-${r+1}`}))}return[t("div",{class:"container"},e)]}static get is(){return"list-group"}static get encapsulation(){return"shadow"}static get properties(){return{numberColumn:{type:Number,attr:"number-column",reflectToAttr:!0,mutable:!0}}}static get style(){return".container{width:30%;margin:10px 10px}"}}export{e as ListGroup};