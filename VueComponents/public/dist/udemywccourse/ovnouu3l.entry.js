/*! Built with http://stenciljs.com */
const{h:t}=window.UdemyWCCourse;class r{cardColorChanged(t,r){t!==r&&(this.color=t)}componentWillLoad(){this.cardColor&&(this.color=this.cardColor)}render(){return[t("div",{class:`feature-box feature-box--${this.color}`},t("i",{class:"fas fa-cloud"}),t("h3",{class:"heading-tertiary u-margin-bottom-small"},this.title),t("slot",{name:"p"}))]}static get is(){return"ft-box"}static get encapsulation(){return"shadow"}static get properties(){return{cardColor:{type:String,attr:"card-color",reflectToAttr:!0,mutable:!0,watchCallbacks:["cardColorChanged"]},color:{state:!0},title:{type:String,attr:"title",reflectToAttr:!0,mutable:!0}}}static get style(){return".feature-box{background-color:var(--mono-10);font-size:1.5rem;padding:2.5rem;text-align:center;-webkit-box-shadow:0 1.5rem 4rem var(--primary-10);box-shadow:0 1.5rem 4rem var(--primary-10);-webkit-transition:all .3s ease-in;transition:all .3s ease-in;outline-offset:1rem}.feature-box--red{background-color:var(--primary-30)}.feature-box--blue{background-color:var(--primary-70)}.feature-box--orange{background-color:var(--warning-70)}.feature-box:hover{outline:1rem solid var(--primary-10);background-color:#000;-webkit-transform:scale(1.05) translateY(-5px);transform:scale(1.05) translateY(-5px);color:#fff}"}}export{r as FtBox};