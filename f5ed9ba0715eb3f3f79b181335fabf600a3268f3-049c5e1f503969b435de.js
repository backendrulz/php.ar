(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[696],{5320:function(e,t,n){"use strict";var r=n(4994);t.__esModule=!0,t.default=void 0;var o=r(n(4634)),i=r(n(4893)),a=r(n(6221)),s=r(n(6540)),l=r(n(5556)),u=n(868),c=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="phpar",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?c():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.className,r=e.placeholder,a=(0,i.default)(e,["config","className","placeholder"]),l="disqus-comment-count"+(n?" "+n:"");return s.default.createElement("span",(0,o.default)({className:l,"data-disqus-identifier":t.identifier,"data-disqus-url":t.url},a),r)},t}(s.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string,className:l.default.string}},7898:function(e,t,n){"use strict";var r=n(4994);t.__esModule=!0,t.default=void 0;var o=r(n(4634)),i=r(n(4893)),a=r(n(6221)),s=r(n(6540)),l=r(n(5556)),u=function(e){function t(){return e.apply(this,arguments)||this}(0,a.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){var e=this.props,t=(e.commentId,e.showMedia,e.showParentComment,(0,i.default)(e,["commentId","showMedia","showParentComment"]));return s.default.createElement("iframe",(0,o.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},t))},t}(s.default.Component);t.default=u,u.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},u.propTypes={commentId:l.default.oneOfType([l.default.number,l.default.string]).isRequired,width:l.default.number,height:l.default.number,showMedia:l.default.bool,showParentComment:l.default.bool}},7759:function(e,t,n){"use strict";var r=n(4994);t.__esModule=!0,t.default=void 0;var o=r(n(4634)),i=r(n(4893)),a=r(n(6221)),s=r(n(6540)),l=r(n(5556)),u=n(868),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="phpar",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,u.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,u.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(r){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);var t=window.document.querySelector('[id^="dsq-app"]');if(t){var n=window.document.getElementById(t.id);n.parentNode.removeChild(n)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return s.default.createElement("div",(0,o.default)({id:"disqus_thread"},t))},t}(s.default.Component);t.default=c,c.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string}),className:l.default.string}},9849:function(e,t,n){"use strict";var r=n(4994);var o=r(n(7759));t.E8=o.default,r(n(5320)).default,r(n(7898)).default,o.default},868:function(e,t,n){"use strict";var r=n(4994);t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var s=this,l=n&&!r;window.clearTimeout(r),r=setTimeout((function(){r=null,n||e.apply(s,i)}),t),l&&e.apply(s,i)}},t.isReactElement=a,t.shallowComparison=function e(t,n){var r,i=new Set(Object.keys(t).concat(Object.keys(n))),s=(r=[]).concat.apply(r,(0,o.default)(i)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!a(t[r]))return!0;return!1}));return 0!==s.length};var o=r(n(1132)),i=r(n(6540));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},7292:function(e,t,n){"use strict";n.d(t,{p:function(){return f},A:function(){return h}});var r=n(6540),o=n(557),i=n(6835),a=n(6675),s=n(3694),l=n(7169);var u=e=>{let{post:t}=e;return null},c=n(7533),d=n(9849);const m=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;const{siteUrl:l}=(0,c.A)();return(0,o.Y)(a.A,null,(0,o.Y)(i.DZ,{as:"h1",variant:"styles.h1"},t.title),(0,o.Y)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,o.Y)("time",null,t.date),(0,o.Y)("span",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[2],fontStyle:"italic"}},t.tags&&(0,o.Y)(r.Fragment,null," — ",(0,o.Y)(s.A,{tags:t.tags}))),t.timeToRead&&" — ",t.timeToRead&&(0,o.Y)("span",null,t.timeToRead," minutos de lectura")),(0,o.Y)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,o.Y)(u,{post:t}),(0,o.Y)(d.E8,{config:{url:""+(l+t.slug),identifier:t.slug,title:t.title}}))};const f=e=>{var t,n,r;let{data:{post:i}}=e;return(0,o.Y)(l.A,{title:i.title,description:i.description?i.description:i.excerpt,image:i.banner?null===(t=i.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:i.slug,canonicalUrl:i.canonicalUrl})};function h(e){let{...t}=e;return r.createElement(p,t)}},7169:function(e,t,n){"use strict";var r=n(6540),o=n(4194),i=n(7533);t.A=e=>{let{title:t="",description:n="",pathname:a="",image:s="",children:l=null,canonicalUrl:u=""}=e;const c=(0,i.A)(),{siteTitle:d,siteTitleAlt:m,siteUrl:p,siteDescription:f,siteImage:h,author:g,siteLanguage:w}=c,y={title:t?t+" | "+d:m,description:n||f,url:""+p+(a||""),image:""+p+(s||h)};return r.createElement(r.Fragment,null,r.createElement("html",{lang:w}),r.createElement("title",null,y.title),r.createElement("meta",{name:"description",content:y.description}),r.createElement("meta",{name:"image",content:y.image}),r.createElement("meta",{property:"og:title",content:y.title}),r.createElement("meta",{property:"og:url",content:y.url}),r.createElement("meta",{property:"og:description",content:y.description}),r.createElement("meta",{property:"og:image",content:y.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:y.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:y.title}),r.createElement("meta",{name:"twitter:url",content:y.url}),r.createElement("meta",{name:"twitter:description",content:y.description}),r.createElement("meta",{name:"twitter:image",content:y.image}),r.createElement("meta",{name:"twitter:image:alt",content:y.description}),r.createElement("meta",{name:"twitter:creator",content:g}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,o.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,o.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,o.withPrefix)("/apple-touch-icon.png")}),u?r.createElement("link",{rel:"canonical",href:u}):null,l)}},3694:function(e,t,n){"use strict";var r=n(557),o=n(6540),i=n(4194),a=n(3601),s=n(2174);t.A=e=>{let{tags:t}=e;const{tagsPath:n,basePath:l}=(0,a.A)();return(0,r.Y)(o.Fragment,null,t.map(((e,t)=>(0,r.Y)(o.Fragment,{key:e.slug},!!t&&", ",(0,r.Y)(i.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,s.A)("/"+l+"/"+n+"/"+e.slug)},e.name.toLowerCase())))))}},79:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},5901:function(e,t,n){var r=n(79);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9291:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},1869:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},4893:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},1132:function(e,t,n){var r=n(5901),o=n(9291),i=n(7122),a=n(1869);e.exports=function(e){return r(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},7122:function(e,t,n){var r=n(79);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=f5ed9ba0715eb3f3f79b181335fabf600a3268f3-049c5e1f503969b435de.js.map