import{u as Z,j as B,r as ce,c as ue,d as ge}from"./index-3f52302b.js";import{e as de,a as me,b as fe,c as be}from"./blue_iced_tea_mobile@2x-444c63e0.js";Z.h1`
  font-size: 32px;
  line-height: 1.1875;
  color: #f3f3f3;

  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 1.07143;
  }

  @media (min-width: 1044px) {
    font-size: 64px;
    line-height: 1.0625;
  }
`;const he=Z.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  margin: 90px auto;

  @media (min-width: 768px) {
    margin: 100px auto;
  }

  @media (min-width: 1044px) {
    gap: 86px;
    margin: 67px auto;
  }
`,ve=Z.img`
  height: 326px;

  @media (max-width: 767px) {
    content: url(${de});
    height: 247px;
  }

  @media (max-width: 767px) and (min-resolution: 2dppx) {
    content: url(${me});
  }

  @media (min-width: 768px) {
    content: url(${fe});
  }

  @media (min-width: 768px) and (min-resolution: 2dppx) {
    content: url(${be});
  }
`,xe=Z.p`
  font-size: 14px;
  line-height: 1.28571;
  text-align: center;
  color: #f3f3f3;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
    padding-bottom: 140px;
  }

  @media (min-width: 1044px) {
    padding-bottom: 86px;
  }
`,Ne=({text:z})=>B.jsx(B.Fragment,{children:B.jsxs(he,{children:[B.jsx(ve,{}),B.jsx(xe,{children:z})]})});var oe={exports:{}};(function(z,te){(function(ne,Q){z.exports=Q(ce)})(ue,ne=>(()=>{var Q={703:(u,g,x)=>{var a=x(414);function H(){}function J(){}J.resetWarningCache=H,u.exports=function(){function b(ie,O,$,M,se,K){if(K!==a){var W=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw W.name="Invariant Violation",W}}function N(){return b}b.isRequired=b;var q={array:b,bigint:b,bool:b,func:b,number:b,object:b,string:b,symbol:b,any:b,arrayOf:N,element:b,elementType:b,instanceOf:N,node:b,objectOf:N,oneOf:N,oneOfType:N,shape:N,exact:N,checkPropTypes:J,resetWarningCache:H};return q.PropTypes=q,q}},697:(u,g,x)=>{u.exports=x(703)()},414:u=>{u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:u=>{u.exports=ne}},re={};function v(u){var g=re[u];if(g!==void 0)return g.exports;var x=re[u]={exports:{}};return Q[u](x,x.exports,v),x.exports}v.n=u=>{var g=u&&u.__esModule?()=>u.default:()=>u;return v.d(g,{a:g}),g},v.d=(u,g)=>{for(var x in g)v.o(g,x)&&!v.o(u,x)&&Object.defineProperty(u,x,{enumerable:!0,get:g[x]})},v.o=(u,g)=>Object.prototype.hasOwnProperty.call(u,g),v.r=u=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})};var X={};return(()=>{v.r(X),v.d(X,{default:()=>le});var u=v(98),g=v.n(u),x=v(697),a=v.n(x);function H(){return H=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},H.apply(this,arguments)}var J=function(n){var i=n.pageClassName,o=n.pageLinkClassName,l=n.page,S=n.selected,_=n.activeClassName,w=n.activeLinkClassName,t=n.getEventListener,e=n.pageSelectedHandler,c=n.href,r=n.extraAriaContext,s=n.pageLabelBuilder,p=n.rel,m=n.ariaLabel||"Page "+l+(r?" "+r:""),h=null;return S&&(h="page",m=n.ariaLabel||"Page "+l+" is your current page",i=i!==void 0?i+" "+_:_,o!==void 0?w!==void 0&&(o=o+" "+w):o=w),g().createElement("li",{className:i},g().createElement("a",H({rel:p,role:c?void 0:"button",className:o,href:c,tabIndex:S?"-1":"0","aria-label":m,"aria-current":h,onKeyPress:e},t(e)),s(l)))};J.propTypes={pageSelectedHandler:a().func.isRequired,selected:a().bool.isRequired,pageClassName:a().string,pageLinkClassName:a().string,activeClassName:a().string,activeLinkClassName:a().string,extraAriaContext:a().string,href:a().string,ariaLabel:a().string,page:a().number.isRequired,getEventListener:a().func.isRequired,pageLabelBuilder:a().func.isRequired,rel:a().string};const b=J;function N(){return N=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},N.apply(this,arguments)}var q=function(n){var i=n.breakLabel,o=n.breakAriaLabel,l=n.breakClassName,S=n.breakLinkClassName,_=n.breakHandler,w=n.getEventListener,t=l||"break";return g().createElement("li",{className:t},g().createElement("a",N({className:S,role:"button",tabIndex:"0","aria-label":o,onKeyPress:_},w(_)),i))};q.propTypes={breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabel:a().string,breakClassName:a().string,breakLinkClassName:a().string,breakHandler:a().func.isRequired,getEventListener:a().func.isRequired};const ie=q;function O(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n??i}function $(n){return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},$(n)}function M(){return M=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},M.apply(this,arguments)}function se(n,i){for(var o=0;o<i.length;o++){var l=i[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function K(n,i){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},K(n,i)}function W(n,i){if(i&&($(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P(n)}function P(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function V(n){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},V(n)}function C(n,i,o){return i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}var ee=function(n){(function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&K(t,e)})(w,n);var i,o,l,S,_=(l=w,S=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,e=V(l);if(S){var c=V(this).constructor;t=Reflect.construct(e,arguments,c)}else t=e.apply(this,arguments);return W(this,t)});function w(t){var e,c;return function(r,s){if(!(r instanceof s))throw new TypeError("Cannot call a class as a function")}(this,w),C(P(e=_.call(this,t)),"handlePreviousPage",function(r){var s=e.state.selected;e.handleClick(r,null,s>0?s-1:void 0,{isPrevious:!0})}),C(P(e),"handleNextPage",function(r){var s=e.state.selected,p=e.props.pageCount;e.handleClick(r,null,s<p-1?s+1:void 0,{isNext:!0})}),C(P(e),"handlePageSelected",function(r,s){if(e.state.selected===r)return e.callActiveCallback(r),void e.handleClick(s,null,void 0,{isActive:!0});e.handleClick(s,null,r)}),C(P(e),"handlePageChange",function(r){e.state.selected!==r&&(e.setState({selected:r}),e.callCallback(r))}),C(P(e),"getEventListener",function(r){return C({},e.props.eventListener,r)}),C(P(e),"handleClick",function(r,s,p){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},h=m.isPrevious,E=h!==void 0&&h,F=m.isNext,U=F!==void 0&&F,I=m.isBreak,k=I!==void 0&&I,R=m.isActive,j=R!==void 0&&R;r.preventDefault?r.preventDefault():r.returnValue=!1;var A=e.state.selected,d=e.props.onClick,L=p;if(d){var y=d({index:s,selected:A,nextSelectedPage:p,event:r,isPrevious:E,isNext:U,isBreak:k,isActive:j});if(y===!1)return;Number.isInteger(y)&&(L=y)}L!==void 0&&e.handlePageChange(L)}),C(P(e),"handleBreakClick",function(r,s){var p=e.state.selected;e.handleClick(s,r,p<r?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),C(P(e),"callCallback",function(r){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:r})}),C(P(e),"callActiveCallback",function(r){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:r})}),C(P(e),"getElementPageRel",function(r){var s=e.state.selected,p=e.props,m=p.nextPageRel,h=p.prevPageRel,E=p.selectedPageRel;return s-1===r?h:s===r?E:s+1===r?m:void 0}),C(P(e),"pagination",function(){var r=[],s=e.props,p=s.pageRangeDisplayed,m=s.pageCount,h=s.marginPagesDisplayed,E=s.breakLabel,F=s.breakClassName,U=s.breakLinkClassName,I=s.breakAriaLabels,k=e.state.selected;if(m<=p)for(var R=0;R<m;R++)r.push(e.getPageElement(R));else{var j=p/2,A=p-j;k>m-p/2?j=p-(A=m-k):k<p/2&&(A=p-(j=k));var d,L,y=function(T){return e.getPageElement(T)},f=[];for(d=0;d<m;d++){var Y=d+1;if(Y<=h)f.push({type:"page",index:d,display:y(d)});else if(Y>m-h)f.push({type:"page",index:d,display:y(d)});else if(d>=k-j&&d<=k+(k===0&&p>1?A-1:A))f.push({type:"page",index:d,display:y(d)});else if(E&&f.length>0&&f[f.length-1].display!==L&&(p>0||h>0)){var ae=d<k?I.backward:I.forward;L=g().createElement(ie,{key:d,breakAriaLabel:ae,breakLabel:E,breakClassName:F,breakLinkClassName:U,breakHandler:e.handleBreakClick.bind(null,d),getEventListener:e.getEventListener}),f.push({type:"break",index:d,display:L})}}f.forEach(function(T,D){var G=T;T.type==="break"&&f[D-1]&&f[D-1].type==="page"&&f[D+1]&&f[D+1].type==="page"&&f[D+1].index-f[D-1].index<=2&&(G={type:"page",index:T.index,display:y(T.index)}),r.push(G.display)})}return r}),t.initialPage!==void 0&&t.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(t.initialPage,") and forcePage (").concat(t.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),c=t.initialPage?t.initialPage:t.forcePage?t.forcePage:0,e.state={selected:c},e}return i=w,(o=[{key:"componentDidMount",value:function(){var t=this.props,e=t.initialPage,c=t.disableInitialCallback,r=t.extraAriaContext,s=t.pageCount,p=t.forcePage;e===void 0||c||this.callCallback(e),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(s)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(s,"). Did you forget a Math.ceil()?")),e!==void 0&&e>s-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(s-1,").")),p!==void 0&&p>s-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(p," > ").concat(s-1,")."))}},{key:"componentDidUpdate",value:function(t){this.props.forcePage!==void 0&&this.props.forcePage!==t.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(t.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var t=this.state.selected,e=this.props,c=e.pageCount,r=t+e.pageRangeDisplayed;return r>=c?c-1:r}},{key:"getBackwardJump",value:function(){var t=this.state.selected-this.props.pageRangeDisplayed;return t<0?0:t}},{key:"getElementHref",value:function(t){var e=this.props,c=e.hrefBuilder,r=e.pageCount,s=e.hrefAllControls;if(c)return s||t>=0&&t<r?c(t+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(t){var e=t===this.state.selected;if(this.props.ariaLabelBuilder&&t>=0&&t<this.props.pageCount){var c=this.props.ariaLabelBuilder(t+1,e);return this.props.extraAriaContext&&!e&&(c=c+" "+this.props.extraAriaContext),c}}},{key:"getPageElement",value:function(t){var e=this.state.selected,c=this.props,r=c.pageClassName,s=c.pageLinkClassName,p=c.activeClassName,m=c.activeLinkClassName,h=c.extraAriaContext,E=c.pageLabelBuilder;return g().createElement(b,{key:t,pageSelectedHandler:this.handlePageSelected.bind(null,t),selected:e===t,rel:this.getElementPageRel(t),pageClassName:r,pageLinkClassName:s,activeClassName:p,activeLinkClassName:m,extraAriaContext:h,href:this.getElementHref(t),ariaLabel:this.ariaLabelBuilder(t),page:t+1,pageLabelBuilder:E,getEventListener:this.getEventListener})}},{key:"render",value:function(){var t=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&t!==void 0)return t&&t(this.props);var e=this.props,c=e.disabledClassName,r=e.disabledLinkClassName,s=e.pageCount,p=e.className,m=e.containerClassName,h=e.previousLabel,E=e.previousClassName,F=e.previousLinkClassName,U=e.previousAriaLabel,I=e.prevRel,k=e.nextLabel,R=e.nextClassName,j=e.nextLinkClassName,A=e.nextAriaLabel,d=e.nextRel,L=this.state.selected,y=L===0,f=L===s-1,Y="".concat(O(E)).concat(y?" ".concat(O(c)):""),ae="".concat(O(R)).concat(f?" ".concat(O(c)):""),T="".concat(O(F)).concat(y?" ".concat(O(r)):""),D="".concat(O(j)).concat(f?" ".concat(O(r)):""),G=y?"true":"false",pe=f?"true":"false";return g().createElement("ul",{className:p||m,role:"navigation","aria-label":"Pagination"},g().createElement("li",{className:Y},g().createElement("a",M({className:T,href:this.getElementHref(L-1),tabIndex:y?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":G,"aria-label":U,rel:I},this.getEventListener(this.handlePreviousPage)),h)),this.pagination(),g().createElement("li",{className:ae},g().createElement("a",M({className:D,href:this.getElementHref(L+1),tabIndex:f?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":pe,"aria-label":A,rel:d},this.getEventListener(this.handleNextPage)),k)))}}])&&se(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),w}(u.Component);C(ee,"propTypes",{pageCount:a().number.isRequired,pageRangeDisplayed:a().number,marginPagesDisplayed:a().number,previousLabel:a().node,previousAriaLabel:a().string,prevPageRel:a().string,prevRel:a().string,nextLabel:a().node,nextAriaLabel:a().string,nextPageRel:a().string,nextRel:a().string,breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabels:a().shape({forward:a().string,backward:a().string}),hrefBuilder:a().func,hrefAllControls:a().bool,onPageChange:a().func,onPageActive:a().func,onClick:a().func,initialPage:a().number,forcePage:a().number,disableInitialCallback:a().bool,containerClassName:a().string,className:a().string,pageClassName:a().string,pageLinkClassName:a().string,pageLabelBuilder:a().func,activeClassName:a().string,activeLinkClassName:a().string,previousClassName:a().string,nextClassName:a().string,previousLinkClassName:a().string,nextLinkClassName:a().string,disabledClassName:a().string,disabledLinkClassName:a().string,breakClassName:a().string,breakLinkClassName:a().string,extraAriaContext:a().string,ariaLabelBuilder:a().func,eventListener:a().string,renderOnZeroPageCount:a().func,selectedPageRel:a().string}),C(ee,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(n){return n},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const le=ee})(),X})())})(oe);var Ce=oe.exports;const ye=ge(Ce),Pe=Z(ye)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 60px;
  gap: 20px;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
    gap: 40px;
  }
  > .active {
    background-color: #4070cd;
    width: 27px;
    height: 27px;
    border-radius: 50%;
  }
  > .disabled {
    color: rgba(243, 243, 243, 0.3);
  }
  > .page-item {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`,we=({pageCount:z,onPageChange:te})=>B.jsx(B.Fragment,{children:B.jsx(Pe,{breakLabel:"...",onPageChange:te,pageCount:z,renderOnZeroPageCount:null,pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",pageRangeDisplayed:1,marginPagesDisplayed:1,nextLabel:">",previousLabel:"<"})});export{Ne as E,we as P};
