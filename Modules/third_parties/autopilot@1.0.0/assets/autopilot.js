define('autopilot',['underscore', 'jQuery'],function (_,jquery) {
    'use strict'

    return {
        mountToApp: function(application) {
            console.log('Autopilot Started');
            window.BEIXF=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,o=n(1);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e,t,n){var r=void 0,o=[],i=window.document,a=[],s=window.MutationObserver||window.WebKitMutationObserver;function l(e,t,n){for(var r=i.querySelectorAll(e),o=0,l=r.length;o<l;o++)if(-1==n||o in n){for(var u=r[o],c=0;c<a.length;c++)if(a[c]==u.className||a[c]==u.id)return;u.className&&a.push(u.className),u.id&&a.push(u.id),u.ready&&null!=s||(u.ready=!0,t.call(u,u))}}function u(){o.forEach((function(e){return l(e.selector,e.fn,e.indexList)}))}e.jsElementReady=function(e,t,n){return void 0===n&&(n=[]).push(0),null!=s?(r||(r=new s(u)).observe(i.documentElement,{childList:!0,subtree:!0}),o.push({selector:e,fn:t,indexList:n})):(document.addEventListener||(document.addEventListener=document.attachEvent),document.addEventListener("DOMContentLoaded",(function(r){for(var o=i.querySelectorAll(e),a=0,s=o.length;a<s;a++)if(-1==n||a in n){var l=o[a];l.ready=!0,t.call(l,l)}}))),l(e,t,n),function(){return function(e,t){for(var n=o.length;n--;){var i=o[n];i.selector===e&&i.fn===t&&(o.splice(n,1),!o.length&&r&&(r.disconnect(),r=null))}}(e,t)}},window.jsElementReady=window.BEJSSDKObserver.jsElementReady}(window.BEJSSDKObserver=window.BEJSSDKObserver||{}),(window.BEJSSDKBrowserDetection=window.BEJSSDKBrowserDetection||{}).ieVersion=function(){var e=0,t=/MSIE (\d+\.\d+)/,n=t.test(navigator.userAgent),r=!!navigator.userAgent.match(/Trident\/7.0/),o=navigator.userAgent.indexOf("rv:11.0");return n&&(e=t.exec(navigator.userAgent)[1]),-1!=navigator.appVersion.indexOf("MSIE 10")&&(e=10),r&&-1!=o&&(e=11),e},function(e,t,n){var r=e.ENVIRONMENT_PRODUCTION,a=null,s=null,l=null,u=null,c=null,h=null,p=!1,d=!0,_=!1,f=e.LOG_LEVEL_WARNING,E=null,m=!1,T=[],g=[];function I(t,n){return v(t,e.LOG_LEVEL_DEBUG)}function v(t,n){n<f||function(t){void 0!==window.console?console.log(t):r!=e.ENVIRONMENT_PRODUCTION&&alert(t)}(t)}function N(e,t){var n=document.createElement("script");n.type="text/javascript",n.textContent=e,t.appendChild(n)}function A(){var t="\n\x3c!-- be_ixf, sdk, gho--\x3e",n=!1;return e.PAGE_HIDE_ORIGINALURL&&!p&&(n=o.SDKUtils.getBooleanValue(e.PAGE_HIDE_ORIGINALURL)),t+='\n<meta name="be:sdk" content="'+e.CLIENT_NAME+"_"+e.CLIENT_VERSION+'" />',t+='\n<meta name="be:timer" content="'+e.connectTime+'ms" />',n||(t+='\n<meta name="be:orig_url" content="'+O(l)+'" />'),t+='\n<meta name="be:norm_url" content="'+O(u)+'" />',t+='\n<meta name="be:capsule_url" content="'+O(h)+'" />',null!=e.capsule&&(t+='\n<meta name="be:api_dt" content="'+o.SDKUtils.convertToNormalizedGoogleIndexTimeZone(e.capsule.date_created,"p")+'" />',t+='\n<meta name="be:mod_dt" content="'+o.SDKUtils.convertToNormalizedGoogleIndexTimeZone(e.capsule.date_created,"p")+'" />'),t+='\n<meta name="be:messages" content="'+(T.length>0?"true":"false")+'" />'}function O(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function C(e){T.push(e)}function L(t,n,r,i,a,s,l){if(n){var u=document.createComment("be_ixf, bodystr, _body_opens");t.appendChild(u);var c=document.createElement("ul");c.setAttribute("id","be_sdkms_capsule"),c.setAttribute("style","display:none!important");var h=document.createElement("li");h.setAttribute("id","be_sdkms_capsule_index_time");var d=o.SDKUtils.convertToNormalizedGoogleIndexTimeZone((new Date).getTime(),"i");if(h.innerHTML=d,c.appendChild(h),null!=e.capsule){var _=e.capsule.publishing_engine,f=_+"; "+_+"_"+e.capsule.capsule_version,E=document.createElement("li");E.setAttribute("id","be_sdkms_capsule_pub"),E.innerHTML=f,c.appendChild(E);var T=document.createElement("li");T.setAttribute("id","be_sdkms_capsule_date_modified"),T.innerHTML=o.SDKUtils.convertToNormalizedGoogleIndexTimeZone(e.capsule.date_published,"p"),c.appendChild(T)}t.insertBefore(c,t.firstChild)}var g=r+"; "+r+"_"+i+"; "+a;null!=s&&(g=g+"; "+s);var I=o.SDKUtils.convertToNormalizedTimeZone(l,"p");if("bodystr"==a){if(p){var v=document.createElement("ul");v.setAttribute("id","be_sdkms_node"),v.setAttribute("style","display:none!important");var N=document.createElement("li");N.setAttribute("class","be_sdkms_pub"),N.innerHTML=g,v.appendChild(N);var A=document.createElement("li");A.setAttribute("class","be_sdkms_date_modified"),A.innerHTML=I,v.appendChild(A),t.appendChild(v)}var O=document.createComment("be_ixf, bodystr");t.appendChild(O)}else if(!m){var C="";C+="<script>\n",C=(C=(C+="/*\n")+"   be_sdkms_pub: "+g+"\n")+"   be_sdkms_date_modified: "+I+"\n",C+="*/\n",C+="<\/script>\n",t.insertAdjacentHTML("beforeend",C)}}function R(t){if(p){var n=document.createComment("be_ixf, sdk, is");t.appendChild(n);var r=document.createElement("ul");if(r.setAttribute("id","be_sdkms_capsule"),r.setAttribute("style","display:none!important"),T.length>0){var o=document.createElement("ul");o.setAttribute("id","be_sdkms_capsule_messages");for(var i=0;i<T.length;i++){var l=T[i];o.innerHTML=o.innerHTML+"\x3c!-- ixf_msg: "+l+" --\x3e\n"}r.appendChild(o)}var u=document.createElement("li");u.setAttribute("id","be_sdkms_configuration"),u.innerHTML=JSON.stringify(s),r.appendChild(u);var c=document.createElement("li");c.setAttribute("id","be_sdkms_page_group"),e.capsule.page_group&&(c.innerHTML=JSON.stringify(e.capsule.page_group)),r.appendChild(c);var h=document.createElement("li");h.setAttribute("id","be_sdkms_capsule_response");var d=a.replace("<script>","&lt;script&gt;");h.innerHTML="<![CDATA[\n"+d+"\n]]>\n",r.appendChild(h);var _=document.createElement("li");_.setAttribute("id","be_sdkms_capsule_profile");for(var f=0;f<g.length;f++){var E=g[f],m=document.createElement("li");m.setAttribute("id",E[0]),m.setAttribute("time",E[1]),_.appendChild(m)}r.appendChild(_),t.appendChild(r)}}function b(e){var t=Array.prototype.slice.call(arguments,1);return function(n){var r=[n].concat(t);return e.apply(this,r)}}e.LOG_LEVEL_DEBUG=0,e.LOG_LEVEL_INFO=1,e.LOG_LEVEL_WARNING=2,e.LOG_LEVEL_ERROR=3,e.LOG_LEVEL_FATAL=4,e.capsule=null,e.head_replacement_targets={},e.body_replacement_targets={},e.startTime=0,e.connectTime=0,e.PRODUCT_NAME="be_ixf",e.CLIENT_NAME="js_sdk",e.CLIENT_VERSION="1.2.5",e.API_VERSION="1.0.0",e.ENVIRONMENT_CONFIG="sdk.environment",e.CHARSET_CONFIG="sdk.charset",e.API_ENDPOINT_CONFIG="api.endpoint",e.ACCOUNT_ID_CONFIG="sdk.account",e.CONNECT_TIMEOUT_CONFIG="sdk.connectTimeout",e.SOCKET_TIMEOUT_CONFIG="sdk.socketTimeout",e.CRAWLER_CONNECT_TIMEOUT_CONFIG="sdk.crawlerConnectTimeout",e.CRAWLER_SOCKET_TIMEOUT_CONFIG="sdk.crawlerSocketTimeout",e.LOG_LEVEL_CONFIG="loglevel",e.WHITELIST_PARAMETER_LIST_CONFIG="whitelist.parameter.list",e.FDAPI_PARAMETER_LIST_CONFIG="forcedirectapi.parameter.list",e.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG="requestparameters.caseinsensitive",e.CRAWLER_USER_AGENTS_CONFIG="crawler.useragents",e.CANONICAL_PROTOCOL_CONFIG="canonical.protocol",e.CANONICAL_HOST_CONFIG="canonical.host",e.CANONICAL_PAGE_CONFIG="canonical.page",e.BODY_STRING_TARGET_CONFIG="sdk.target.body",e.HEAD_STRING_TARGET_CONFIG="sdk.target.head",e.ENVIRONMENT_PRODUCTION="production",e.ENVIRONMENT_STAGING="staging",e.ENVIRONMENT_TESTING="testing",e.DEFAULT_CHARSET="UTF-8",e.DEFAULT_DIRECT_API_ENDPOINT="https://api.brightedge.com",e.DEFAULT_API_ENDPOINT="https://ixfd-api.bc0a.com",e.DEFAULT_ACCOUNT_ID="0",e.DEFAULT_CONNECT_TIMEOUT="1000",e.DEFAULT_SOCKET_TIMEOUT="1000",e.DEFAULT_CRAWLER_CONNECT_TIMEOUT="2000",e.DEFAULT_CRAWLER_SOCKET_TIMEOUT="2000",e.DEFAULT_WHITELIST_PARAMETER_LIST="",e.DEFAULT_FD_PARAMETER_LIST="ixf-api|ixf",e.DEFAULT_CRAWLER_USER_AGENTS="google|bingbot|msnbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|ia_archiver|brightedge",e.DEFAULT_REQUESTPARAMETERS_CASEINSENSITIVE=!1,e.construct=function(t){var n;e.startTime=(new Date).getTime(),i(n={},e.ENVIRONMENT_CONFIG,e.ENVIRONMENT_PRODUCTION),i(n,e.API_ENDPOINT_CONFIG,e.DEFAULT_API_ENDPOINT),i(n,e.CHARSET_CONFIG,e.DEFAULT_CHARSET),i(n,e.ACCOUNT_ID_CONFIG,e.DEFAULT_ACCOUNT_ID),i(n,e.CONNECT_TIMEOUT_CONFIG,e.DEFAULT_CONNECT_TIMEOUT),i(n,e.SOCKET_TIMEOUT_CONFIG,e.DEFAULT_SOCKET_TIMEOUT),i(n,e.CRAWLER_CONNECT_TIMEOUT_CONFIG,e.DEFAULT_CRAWLER_CONNECT_TIMEOUT),i(n,e.CRAWLER_SOCKET_TIMEOUT_CONFIG,e.DEFAULT_CRAWLER_SOCKET_TIMEOUT),i(n,e.CRAWLER_USER_AGENTS_CONFIG,e.DEFAULT_CRAWLER_USER_AGENTS),i(n,e.WHITELIST_PARAMETER_LIST_CONFIG,e.DEFAULT_WHITELIST_PARAMETER_LIST),i(n,e.FDAPI_PARAMETER_LIST_CONFIG,e.DEFAULT_FD_PARAMETER_LIST),i(n,e.LOG_LEVEL_CONFIG,e.LOG_LEVEL_WARNING),i(n,e.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG,e.DEFAULT_REQUESTPARAMETERS_CASEINSENSITIVE),s=n,s=(0,o.simpleAssign)(s,t),f=parseInt(s[e.LOG_LEVEL_CONFIG]),l=document.location.href,_=s[e.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG];var a=o.SDKUtils.getParameterDictionaryFromUrl(l);if(a["ixf-debug"]&&(p=o.SDKUtils.getBooleanValue(a["ixf-debug"])),null!=a["ixf-endpoint"]){d=!1;a["ixf-endpoint"].replace(/\/+$/,"").replace(/^https?\:\/\//,"");(a["ixf-endpoint"].endsWith("api.bc0a.com")||a["ixf-endpoint"].endsWith("brightedge.com"))&&(s[e.API_ENDPOINT_CONFIG]=a["ixf-endpoint"])}p&&(f=e.LOG_LEVEL_DEBUG),I("[BEIXF] config: "+JSON.stringify(s)),r=s[e.ENVIRONMENT_CONFIG],I("force direct api list parameter="+s[e.FDAPI_PARAMETER_LIST_CONFIG]);var T=s[e.WHITELIST_PARAMETER_LIST_CONFIG];I("white list parameter="+T);var g=T.split("|"),N=s[e.CONNECT_TIMEOUT_CONFIG],A=s[e.CRAWLER_USER_AGENTS_CONFIG];o.SDKUtils.userAgentMatchesRegex(navigator.userAgent,A)&&I("Detected browser using timeout="+(N=s[e.CRAWLER_CONNECT_TIMEOUT_CONFIG])),u=o.SDKUtils.normalizeUrl(l,g,_),s[e.CANONICAL_PAGE_CONFIG]?u=s[e.CANONICAL_PAGE_CONFIG]:s[e.CANONICAL_HOST_CONFIG]&&(I("Got in canonical host"),u=o.SDKUtils.overrideHostInURL(u,s[e.CANONICAL_HOST_CONFIG])),s[e.CANONICAL_PROTOCOL_CONFIG]&&(u=o.SDKUtils.overrideProtocolInURL(u,s[e.CANONICAL_PROTOCOL_CONFIG]));var O=o.SDKUtils.getPageHash(u);if(d){var C=s[e.FDAPI_PARAMETER_LIST_CONFIG].split("|");for(var L in a)if(-1!==C.indexOf(L)){s[e.API_ENDPOINT_CONFIG]="https://api.brightedge.com",I("Using overridden api endpoint");break}}e.HEAD_STRING_TARGET_CONFIG in s&&s[e.HEAD_STRING_TARGET_CONFIG].forEach((function(t){var n=t[0],r=t[1];e.head_replacement_targets[n]=r})),e.BODY_STRING_TARGET_CONFIG in s&&s[e.BODY_STRING_TARGET_CONFIG].forEach((function(t){var n=t[0],r=t[1];e.body_replacement_targets[n]=r}));var R=s[e.API_ENDPOINT_CONFIG],b=s[e.ACCOUNT_ID_CONFIG],S="/api/ixf/"+e.API_VERSION+"/get_capsule/"+b+"/"+O;c=R+S+"?client="+encodeURIComponent(e.CLIENT_NAME)+"&client_version="+encodeURIComponent(e.CLIENT_VERSION)+"&orig_url="+encodeURIComponent(l)+"&base_url="+encodeURIComponent(u)+"&user_agent="+encodeURIComponent(navigator.userAgent),v("Page_hash normalized_url="+u+", page_hash="+O+", api_url="+c,e.LOG_LEVEL_INFO),h=R+S;var y=BEJSSDKBrowserDetection.ieVersion();m=!1;if(0!=y&&(!0,y<10&&(m=!0)),m){var D=document.location.protocol.substring(0,document.location.protocol.length-1);c=o.SDKUtils.overrideProtocolInURL(c,D),E=new window.XDomainRequest}else E=new XMLHttpRequest;E.onload=e.xhrHandler,E.onerror=e.xhrErrorHandler,E.open("GET",c,!0),E.timeout=N,E.send(null)},e.xhrHandler=function(t){m?e.processCapsule(E.responseText):4===E.readyState&&(200===E.status?e.processCapsule(E.responseText):C("API request invalid HTTP status="+E.status+", capsule_url="+c))},e.xhrErrorHandler=function(t){v("Could not get capsule="+c+", error="+t.statusText,e.LOG_LEVEL_WARNING),C("API request invalid response="+E.statusText+", capsule_url="+c)},e.processCapsule=function(t){var n,r;a=t,e.connectTime=(new Date).getTime()-e.startTime,n="constructor",r=e.connectTime,g.push([n,r]);try{e.capsule=JSON.parse(a)}catch(e){return void C("Invalid JSON capsule_url="+c+", error_msg="+e.message)}if(e.capsule.config.page_groups){var i=e.capsule.config.page_groups;try{var s=o.SDKUtils.derivePageGroup(u,i);I("page group is "+s),e.capsule.page_group=s;var l=e.getPageGroupNodes(s);e.setPageGroupNodes(l)}catch(e){return void C("Exception occured while getting page group, error_msg="+e.message)}}var h=!1;if(e.capsule.page_group_nodes)for(var d=0;d<e.capsule.page_group_nodes.length;d++){for(var _=e.capsule.page_group_nodes[d],f=_.type,E=_.feature_group,T=!1,v=0;v<e.capsule.nodes.length;v++){var O=(S=e.capsule.nodes[v]).type;if(E==(y=S.feature_group)&&O==f){e.capsule.nodes[v]=_,T=!0;break}}T||e.capsule.nodes.push(_)}for(v=0;v<e.capsule.nodes.length;v++){O=(S=e.capsule.nodes[v]).type;var S,y=S.feature_group,D="";S.non_script_content&&(D=S.non_script_content);var G=S.script_content,P=S.publishing_engine,U=S.engine_version,M=S.date_published,x=null;if(S.meta_string&&(x=S.meta_string),C("Adding selector index="+v+" node="+O+"/"+y),"bodystr"==O&&"_body_open"==y)I("Adding selector for index="+v+" node="+O+"/"+y),BEJSSDKObserver.jsElementReady("body",b((function(e,t,n,r,o,i,a){e.insertAdjacentHTML("afterbegin",t),n&&n.length>0&&N(n,e),h=!0,p&&L(e,!0,r,o,i,a,M),R(e)}),D,G,P,U,O,x,M));else if("headstr"==O&&"_head_open"==y)I("Adding selector for index="+v+" node="+O+"/"+y),BEJSSDKObserver.jsElementReady("head",b((function(e,t,n,r,o,i,a){var s=!1,l=!1,u=A();if(m){var c=t.replace("<style>","");if((c=c.replace("</style>","").trim()).length>0){var h=document.createElement("style");h.innerHTML=c+"\n",e.appendChild(h),s=!0}}else t.length>0&&(e.insertAdjacentHTML("beforeend",t),l||(e.insertAdjacentHTML("beforeend",u),l=!0),I("Loading head content="+t+":"),s=!0);if(n&&n.length>0){N(n,e);u=A();l||(e.insertAdjacentHTML("beforeend",u),l=!0),I("Loading script_content= "+n+":"),s=!0}s&&L(e,!1,r,o,i,a,M)}),D,G,P,U,O,x,M));else if("headstr"==O&&y in e.head_replacement_targets){I("Adding explicit selector for index="+v+" node="+O+"/"+y+"/selector="+(F=e.head_replacement_targets[y])),BEJSSDKObserver.jsElementReady(F,b((function(e,t,n,r,o,i,a){e.innerHTML=t+"\n",n&&n.length>0&&N(n,e),L(e,!1,r,o,i,a,M)}),D,G,P,U,O,x,M))}else if("bodystr"==O&&y in e.body_replacement_targets){var F;I("Adding explicit selector for index="+v+" node="+O+"/"+y+"/selector="+(F=e.body_replacement_targets[y])),BEJSSDKObserver.jsElementReady(F,b((function(e,t,n,r,o,i,a){e.innerHTML=t+"\n",n&&n.length>0&&N(n,e),L(e,!1,r,o,i,a,M)}),D,G,P,U,O,x,M))}else I("Skipping non-implict and unspecified explict selector for index="+v+" node="+O+"/"+y)}h||BEJSSDKObserver.jsElementReady("body",b((function(e){R(e)})))},e.getNodes=function(){return e.capsule.nodes},e.getPageGroupNodes=function(t){return e.capsule.page_group_nodes[t]},e.setPageGroupNodes=function(t){e.capsule.page_group_nodes=t},e.getPageGroupNodesConfig=function(){return e.capsule.config.page_group_nodes};var S={};S[e.ACCOUNT_ID_CONFIG]="f00000000084691",S[e.WHITELIST_PARAMETER_LIST_CONFIG]="ixf",S[e.LOG_LEVEL_CONFIG]=2,window.BEJSSDK.construct(S)}(window.BEJSSDK=window.BEJSSDK||{}),void 0===window.BELinkBlockGenerator&&((r=window.BELinkBlockGenerator=window.BELinkBlockGenerator||{}).MAXIMUM_HEADLINE_LENGTH=100,r.MAXIMUM_DESC_LENGTH=200,r.IND_LINK_BLOCK_TYPE_URL_TYPE=0,r.IND_LINK_BLOCK_TYPE_HEADLINE_TYPE=1,r.IND_LINK_BLOCK_TYPE_DESCRIPTION_TYPE=2,r.IND_LINK_BLOCK_TYPE_IMAGE_TYPE=3,r.REPLACEMENT_STRATEGY_OVERWRITE=0,r.REPLACEMENT_STRATEGY_POST_APPEND_ELEMENT=1,r.REPLACEMENT_STRATEGY_PRE_APPEND_ELEMENT=2,r.REPLACEMENT_STRATEGY_PRE_APPEND_PARENT=3,r.setMaximumHeadlineLength=function(e){r.MAXIMUM_HEADLINE_LENGTH=e},r.setMaximumDescriptionLength=function(e){r.MAXIMUM_DESC_LENGTH=e},r.generateIndividualLinks=function(e,t,n){var o=t[0],i=document.createElement(o),a=t[1],s=t[2],l=t[3];for(var u in a)i.setAttribute(u,a[u]);var c=!1;if(s.indexOf(r.IND_LINK_BLOCK_TYPE_URL_TYPE)>=0&&(i.setAttribute("href",n.url),c=!0),s.indexOf(r.IND_LINK_BLOCK_TYPE_HEADLINE_TYPE)>=0&&n.h1){var h=n.h1;h.length>r.MAXIMUM_HEADLINE_LENGTH&&(h=h.substring(0,r.MAXIMUM_HEADLINE_LENGTH)+"...");var p=document.createTextNode(h);i.appendChild(p),c=!0}if(s.indexOf(r.IND_LINK_BLOCK_TYPE_DESCRIPTION_TYPE)>=0&&n.desc){var d=n.desc;d.length,r.MAXIMUM_DESC_LENGTH,p=document.createTextNode(d),i.appendChild(p),c=!0}if(s.indexOf(r.IND_LINK_BLOCK_TYPE_IMAGE_TYPE)>=0&&n.image&&(i.setAttribute("src",n.image),c=!0),c||0==s.length){for(var _=0;_<l.length;_++){var f=l[_];r.generateIndividualLinks(i,f,n)}e.appendChild(i)}},r.insertLinkBlocks=function(e,t,n,o,i,a){if(null!=e){if(t==r.REPLACEMENT_STRATEGY_OVERWRITE)for(;e.firstChild;)e.removeChild(e.firstChild);for(var s=e,l=0;l<n.length;l++){var u=n[l],c=u[0],h=document.createElement(c),p=u[1];for(var d in p)h.setAttribute(d,p[d]);if(a&&a[0]==l){var _=a[1],f=document.createElement(_),E=a[2],m=a[3];for(var T in E)f.setAttribute(T,E[T]);var g=document.createTextNode(m);f.appendChild(g),h.appendChild(f)}if(l==n.length-1)for(var I=0;I<i.length;I++)for(var v=i[I],N=0;N<o.length;N++)r.generateIndividualLinks(h,o[N],v);s==e?t==r.REPLACEMENT_STRATEGY_PRE_APPEND_ELEMENT?s.insertBefore(h,e.firstChild):t==r.REPLACEMENT_STRATEGY_PRE_APPEND_PARENT?s.parentElement.insertBefore(h,s):s.appendChild(h):s.appendChild(h),s=h}}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.simpleAssign=function(e,t){if(null!=t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}};var o=n(2);function i(e,t){for(var n=e+"";n.length<t;)n="0"+n;return n}t.SDKUtils=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"getPageHash",value:function(e){var t=0;if(0==e.length)return t;for(var n=0;n<e.length;n++){t=(t<<5)-t+e.charCodeAt(n),t&=t}return t=t<0?"0"+-t:""+t}},{key:"getBooleanValue",value:function(e){return void 0!==e&&null!=e&&("1"==(e=e.toLowerCase())||"true"==e||"on"==e||"t"==e)}},{key:"normalizeUrl",value:function(e,t,n){var r=o.parse(e,!0),i=r.hostname,a=r.protocol,s=r.port,l=r.pathname;("http:"==a&&80==s||"https:"==a&&443==s)&&(s="");var u=r.query;null==s&&(s=""),s.length>0&&(s=":"+s);var c=Object.keys(u).sort(),h=[];if(c.length>0)for(var p=0;p<c.length;p++){var d=c[p],_=d;if(n&&(_=d.toLowerCase()),t&&t.includes(_))if(u[d]instanceof Array){u[d].sort().forEach((function(e){var t=encodeURIComponent(e);h.push(_+"="+t)}))}else{var f=encodeURIComponent(u[d]);h.push(_+"="+f)}}return h.length>0?a+"//"+i+s+l+"?"+h.join("&"):a+"//"+i+s+l}},{key:"getParameterDictionaryFromUrl",value:function(e){return o.parse(e,!0).query}},{key:"overrideHostInURL",value:function(e,t){var n=t.split(":"),r=-1;2==n.length&&(t=n[0],r=n[1]);var i=o.parse(e,!0),a=i.protocol;return i.hostname=t,i.host=t,r>-1&&("http:"==a&&80==r||"https:"==a&&443==r||(i.port=r,i.host=i.host+":"+r)),o.format(i)}},{key:"overrideProtocolInURL",value:function(e,t){var n=o.parse(e,!0);return n.protocol=t+":",o.format(n)}},{key:"userAgentMatchesRegex",value:function(e,t){return new RegExp(t,"gi").test(e)}},{key:"isDaylightSavings",value:function(e,t,n){if(t<3||t>11)return!1;if(t>3&&t<11)return!0;var r=e-n;return 3==t?r>=8:r<=0}},{key:"convertToNormalizedGoogleIndexTimeZone",value:function(t,n){var r=new Date(t),o=-8,a=r.getTime()+6e4*r.getTimezoneOffset(),s=new Date(a+36e5*o);return e.isDaylightSavings(s.getDate(),s.getMonth()+1,s.getDay())&&(o=-7,s=new Date(a+36e5*o)),n+"y_"+s.getFullYear()+"; "+n+"m_"+i(s.getMonth()+1,2)+"; "+n+"d_"+i(s.getDate(),2)+"; "+n+"h_"+i(s.getHours(),2)+"; "+n+"mh_"+i(s.getMinutes(),2)+"; "+n+"_epoch:"+t}},{key:"convertToNormalizedTimeZone",value:function(t,n){var r=new Date(t),o=-8,i=r.getTime()+6e4*r.getTimezoneOffset(),a=new Date(i+36e5*o);return e.isDaylightSavings(a.getDate(),a.getMonth()+1,a.getDay())&&(o=-7,a=new Date(i+36e5*o)),n+"_tstr:"+a.toString()+"; "+n+"_epoch:"+t}},{key:"matchIncludeRules",value:function(e,t){for(var n=0;n<e.length;n++){if(RegExp(e[n]).test(t))return!0}return!1}},{key:"derivePageGroup",value:function(t,n){for(var r=0;r<n.length;r++){var o=n[r].include_rules,i=n[r].exclude_rules,a=n[r].name;if(i){for(var s=!1,l=0;l<i.length;l++){if(RegExp(i[l]).test(t)){s=!0;break}}if(!s&&e.matchIncludeRules(o,t))return a}else if(e.matchIncludeRules(o,t))return a}return null}}]),e}()},function(e,t,n){"use strict";var r=n(3),o=n(6);function i(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=g,t.resolve=function(e,t){return g(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?g(e,!1,!0).resolveObject(t):t},t.format=function(e){o.isString(e)&&(e=g(e));return e instanceof i?e.format():i.prototype.format.call(e)},t.Url=i;var a=/^([a-z0-9.+-]+:)/i,s=/:[0-9]*$/,l=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,u=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),c=["'"].concat(u),h=["%","/","?",";","#"].concat(c),p=["/","?","#"],d=/^[+a-z0-9A-Z_-]{0,63}$/,_=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,f={javascript:!0,"javascript:":!0},E={javascript:!0,"javascript:":!0},m={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},T=n(7);function g(e,t,n){if(e&&o.isObject(e)&&e instanceof i)return e;var r=new i;return r.parse(e,t,n),r}i.prototype.parse=function(e,t,n){if(!o.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var i=e.indexOf("?"),s=-1!==i&&i<e.indexOf("#")?"?":"#",u=e.split(s);u[0]=u[0].replace(/\\/g,"/");var g=e=u.join(s);if(g=g.trim(),!n&&1===e.split("#").length){var I=l.exec(g);if(I)return this.path=g,this.href=g,this.pathname=I[1],I[2]?(this.search=I[2],this.query=t?T.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var v=a.exec(g);if(v){var N=(v=v[0]).toLowerCase();this.protocol=N,g=g.substr(v.length)}if(n||v||g.match(/^\/\/[^@\/]+@[^@\/]+/)){var A="//"===g.substr(0,2);!A||v&&E[v]||(g=g.substr(2),this.slashes=!0)}if(!E[v]&&(A||v&&!m[v])){for(var O,C,L=-1,R=0;R<p.length;R++){-1!==(b=g.indexOf(p[R]))&&(-1===L||b<L)&&(L=b)}-1!==(C=-1===L?g.lastIndexOf("@"):g.lastIndexOf("@",L))&&(O=g.slice(0,C),g=g.slice(C+1),this.auth=decodeURIComponent(O)),L=-1;for(R=0;R<h.length;R++){var b;-1!==(b=g.indexOf(h[R]))&&(-1===L||b<L)&&(L=b)}-1===L&&(L=g.length),this.host=g.slice(0,L),g=g.slice(L),this.parseHost(),this.hostname=this.hostname||"";var S="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!S)for(var y=this.hostname.split(/\./),D=(R=0,y.length);R<D;R++){var G=y[R];if(G&&!G.match(d)){for(var P="",U=0,M=G.length;U<M;U++)G.charCodeAt(U)>127?P+="x":P+=G[U];if(!P.match(d)){var x=y.slice(0,R),F=y.slice(R+1),w=G.match(_);w&&(x.push(w[1]),F.unshift(w[2])),F.length&&(g="/"+F.join(".")+g),this.hostname=x.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),S||(this.hostname=r.toASCII(this.hostname));var k=this.port?":"+this.port:"",j=this.hostname||"";this.host=j+k,this.href+=this.host,S&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==g[0]&&(g="/"+g))}if(!f[N])for(R=0,D=c.length;R<D;R++){var H=c[R];if(-1!==g.indexOf(H)){var K=encodeURIComponent(H);K===H&&(K=escape(H)),g=g.split(H).join(K)}}var B=g.indexOf("#");-1!==B&&(this.hash=g.substr(B),g=g.slice(0,B));var V=g.indexOf("?");if(-1!==V?(this.search=g.substr(V),this.query=g.substr(V+1),t&&(this.query=T.parse(this.query)),g=g.slice(0,V)):t&&(this.search="",this.query={}),g&&(this.pathname=g),m[N]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){k=this.pathname||"";var q=this.search||"";this.path=k+q}return this.href=this.format(),this},i.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",n=this.pathname||"",r=this.hash||"",i=!1,a="";this.host?i=e+this.host:this.hostname&&(i=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(a=T.stringify(this.query));var s=this.search||a&&"?"+a||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||m[t])&&!1!==i?(i="//"+(i||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),s&&"?"!==s.charAt(0)&&(s="?"+s),t+i+(n=n.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(s=s.replace("#","%23"))+r},i.prototype.resolve=function(e){return this.resolveObject(g(e,!1,!0)).format()},i.prototype.resolveObject=function(e){if(o.isString(e)){var t=new i;t.parse(e,!1,!0),e=t}for(var n=new i,r=Object.keys(this),a=0;a<r.length;a++){var s=r[a];n[s]=this[s]}if(n.hash=e.hash,""===e.href)return n.href=n.format(),n;if(e.slashes&&!e.protocol){for(var l=Object.keys(e),u=0;u<l.length;u++){var c=l[u];"protocol"!==c&&(n[c]=e[c])}return m[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(e.protocol&&e.protocol!==n.protocol){if(!m[e.protocol]){for(var h=Object.keys(e),p=0;p<h.length;p++){var d=h[p];n[d]=e[d]}return n.href=n.format(),n}if(n.protocol=e.protocol,e.host||E[e.protocol])n.pathname=e.pathname;else{for(var _=(e.pathname||"").split("/");_.length&&!(e.host=_.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==_[0]&&_.unshift(""),_.length<2&&_.unshift(""),n.pathname=_.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var f=n.pathname||"",T=n.search||"";n.path=f+T}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var g=n.pathname&&"/"===n.pathname.charAt(0),I=e.host||e.pathname&&"/"===e.pathname.charAt(0),v=I||g||n.host&&e.pathname,N=v,A=n.pathname&&n.pathname.split("/")||[],O=(_=e.pathname&&e.pathname.split("/")||[],n.protocol&&!m[n.protocol]);if(O&&(n.hostname="",n.port=null,n.host&&(""===A[0]?A[0]=n.host:A.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===_[0]?_[0]=e.host:_.unshift(e.host)),e.host=null),v=v&&(""===_[0]||""===A[0])),I)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,A=_;else if(_.length)A||(A=[]),A.pop(),A=A.concat(_),n.search=e.search,n.query=e.query;else if(!o.isNullOrUndefined(e.search)){if(O)n.hostname=n.host=A.shift(),(S=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=S.shift(),n.host=n.hostname=S.shift());return n.search=e.search,n.query=e.query,o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!A.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var C=A.slice(-1)[0],L=(n.host||e.host||A.length>1)&&("."===C||".."===C)||""===C,R=0,b=A.length;b>=0;b--)"."===(C=A[b])?A.splice(b,1):".."===C?(A.splice(b,1),R++):R&&(A.splice(b,1),R--);if(!v&&!N)for(;R--;R)A.unshift("..");!v||""===A[0]||A[0]&&"/"===A[0].charAt(0)||A.unshift(""),L&&"/"!==A.join("/").substr(-1)&&A.push("");var S,y=""===A[0]||A[0]&&"/"===A[0].charAt(0);O&&(n.hostname=n.host=y?"":A.length?A.shift():"",(S=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=S.shift(),n.host=n.hostname=S.shift()));return(v=v||n.host&&A.length)&&!y&&A.unshift(""),A.length?n.pathname=A.join("/"):(n.pathname=null,n.path=null),o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},i.prototype.parseHost=function(){var e=this.host,t=s.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},function(e,t,n){(function(e,r){var o;/*! https://mths.be/punycode v1.4.1 by @mathias */!function(i){t&&t.nodeType,e&&e.nodeType;var a="object"==typeof r&&r;a.global!==a&&a.window!==a&&a.self;var s,l=2147483647,u=/^xn--/,c=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},d=Math.floor,_=String.fromCharCode;function f(e){throw new RangeError(p[e])}function E(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n]);return r}function m(e,t){var n=e.split("@"),r="";return n.length>1&&(r=n[0]+"@",e=n[1]),r+E((e=e.replace(h,".")).split("."),t).join(".")}function T(e){for(var t,n,r=[],o=0,i=e.length;o<i;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<i?56320==(64512&(n=e.charCodeAt(o++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),o--):r.push(t);return r}function g(e){return E(e,(function(e){var t="";return e>65535&&(t+=_((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=_(e)})).join("")}function I(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function v(e,t,n){var r=0;for(e=n?d(e/700):e>>1,e+=d(e/t);e>455;r+=36)e=d(e/35);return d(r+36*e/(e+38))}function N(e){var t,n,r,o,i,a,s,u,c,h,p,_=[],E=e.length,m=0,T=128,I=72;for((n=e.lastIndexOf("-"))<0&&(n=0),r=0;r<n;++r)e.charCodeAt(r)>=128&&f("not-basic"),_.push(e.charCodeAt(r));for(o=n>0?n+1:0;o<E;){for(i=m,a=1,s=36;o>=E&&f("invalid-input"),((u=(p=e.charCodeAt(o++))-48<10?p-22:p-65<26?p-65:p-97<26?p-97:36)>=36||u>d((l-m)/a))&&f("overflow"),m+=u*a,!(u<(c=s<=I?1:s>=I+26?26:s-I));s+=36)a>d(l/(h=36-c))&&f("overflow"),a*=h;I=v(m-i,t=_.length+1,0==i),d(m/t)>l-T&&f("overflow"),T+=d(m/t),m%=t,_.splice(m++,0,T)}return g(_)}function A(e){var t,n,r,o,i,a,s,u,c,h,p,E,m,g,N,A=[];for(E=(e=T(e)).length,t=128,n=0,i=72,a=0;a<E;++a)(p=e[a])<128&&A.push(_(p));for(r=o=A.length,o&&A.push("-");r<E;){for(s=l,a=0;a<E;++a)(p=e[a])>=t&&p<s&&(s=p);for(s-t>d((l-n)/(m=r+1))&&f("overflow"),n+=(s-t)*m,t=s,a=0;a<E;++a)if((p=e[a])<t&&++n>l&&f("overflow"),p==t){for(u=n,c=36;!(u<(h=c<=i?1:c>=i+26?26:c-i));c+=36)N=u-h,g=36-h,A.push(_(I(h+N%g,0))),u=d(N/g);A.push(_(I(u,0))),i=v(n,m,r==o),n=0,++r}++n,++t}return A.join("")}s={version:"1.4.1",ucs2:{decode:T,encode:g},decode:N,encode:A,toASCII:function(e){return m(e,(function(e){return c.test(e)?"xn--"+A(e):e}))},toUnicode:function(e){return m(e,(function(e){return u.test(e)?N(e.slice(4).toLowerCase()):e}))}},void 0===(o=function(){return s}.call(t,n,t,e))||(e.exports=o)}()}).call(this,n(4)(e),n(5))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},function(e,t,n){"use strict";t.decode=t.parse=n(8),t.encode=t.stringify=n(9)},function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,i){t=t||"&",n=n||"=";var a={};if("string"!=typeof e||0===e.length)return a;var s=/\+/g;e=e.split(t);var l=1e3;i&&"number"==typeof i.maxKeys&&(l=i.maxKeys);var u=e.length;l>0&&u>l&&(u=l);for(var c=0;c<u;++c){var h,p,d,_,f=e[c].replace(s,"%20"),E=f.indexOf(n);E>=0?(h=f.substr(0,E),p=f.substr(E+1)):(h=f,p=""),d=decodeURIComponent(h),_=decodeURIComponent(p),r(a,d)?o(a[d])?a[d].push(_):a[d]=[a[d],_]:a[d]=_}return a};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,s){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?i(a(e),(function(a){var s=encodeURIComponent(r(a))+n;return o(e[a])?i(e[a],(function(e){return s+encodeURIComponent(r(e))})).join(t):s+encodeURIComponent(r(e[a]))})).join(t):s?encodeURIComponent(r(s))+n+encodeURIComponent(r(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function i(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var a=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}}]);
            //# sourceMappingURL=autopilot_sdk.js.map
            console.log('Autopilot Ended');
        }
    }
})