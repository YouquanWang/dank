(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10752e19"],{"0782":function(t,e,n){"use strict";n("6680")},"49c7":function(t,e,n){"use strict";n("dfb2")},"4b00":function(t,e,n){"use strict";n.r(e);n("38cf");var r=n("7a23"),o=n("8a16"),a=n.n(o),i=Object(r["gb"])("data-v-137eb1c2");Object(r["I"])("data-v-137eb1c2");var c={class:"container collection-box"},s={class:"avatar-list flex-middle"},u={class:"item"},l={class:"title"},f={class:"avatar-btn-box flex-middle"},d={key:1,class:"avatar-btn flex-item"},g=Object(r["o"])("img",{src:a.a,alt:""},null,-1),h={class:"page-box"};Object(r["G"])();var v=i((function(t,e,n,o,a,i){var v=Object(r["O"])("el-pagination");return Object(r["F"])(),Object(r["j"])("div",c,[Object(r["o"])("div",s,[(Object(r["F"])(!0),Object(r["j"])(r["b"],null,Object(r["M"])(t.avatars,(function(e){return Object(r["F"])(),Object(r["j"])("div",u,[Object(r["o"])("div",{class:["svg","svg"+e.tokenId+" svg"+e.tokenId%3],innerHTML:e.svg,onClick:function(n){return t.changeImg(e.tokenId)}},null,10,["innerHTML","onClick"]),Object(r["o"])("div",l,"Dank-punk #"+Object(r["S"])(e.tokenId.length<5?"0".repeat(5-e.tokenId.length)+e.tokenId:e.tokenId),1),Object(r["o"])("div",f,[t.avatar!=e.svg?(Object(r["F"])(),Object(r["j"])("div",{key:0,class:"avatar-btn flex-item",onClick:function(n){return t.setAvatar(e.svg)}},"Set Avatar",8,["onClick"])):(Object(r["F"])(),Object(r["j"])("div",d,"Selected")),Object(r["o"])("a",{href:t.getHerf(e.tokenId)},[g],8,["href"])])])})),256))]),Object(r["o"])("div",h,[Object(r["o"])(v,{background:"",layout:"prev, pager, next","page-size":t.limit,"current-page":t.page,onCurrentChange:t.currentChange,total:t.total},null,8,["page-size","current-page","onCurrentChange","total"])])])})),A=(n("99af"),n("5530")),w=(n("96cf"),n("1da1")),p=n("ee10"),b=n("5502"),m=n("01ea"),x=n("ae04"),O=n("82b5"),j=n("3fd4"),y={setup:function(){var t=Object(b["b"])(),e=Object(r["J"])({web3:Object(r["h"])((function(){return t.state.provider})),rate:Object(r["h"])((function(){return t.state.rate})),address:Object(r["h"])((function(){return t.state.accounts[0]})),avatar:Object(r["h"])((function(){return t.state.avatar})),currentBalance:Object(r["h"])((function(){return t.state.currentBalance})),nftContract:null,total:0,limit:4,page:1,avatars:[],initContract:function(){e.nftContract=new e.web3.eth.Contract(x,m["a"].nftAddress),e.initData()},currentChange:function(t){console.log(t),e.page=t,e.getAvatars()},initData:function(){e.getAvatars()},initWeb3:function(){p["a"].initWeb3()},changeImg:function(t){var e=document.querySelector(".svg".concat(t," svg"));console.log(e),Object(O["saveSvgAsPng"])(e,"my_svg")},getHerf:function(t){return"https://twitter.com/intent/tweet?text=".concat(window.location.origin,"/#/svg/").concat(t)},setAvatar:function(e){j["b"].success("Set Success"),t.commit("updateAvatar",e)},getAvatars:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a,i,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[],r=j["a"].service({lock:!0,text:"Please wait while the data is loaded",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t.next=4,e.nftContract.methods.getUserAllTokens(e.address).call();case 4:o=t.sent,e.total=o.length,a=o.length-e.page*e.limit,a=a>0?a:0,i=o.length-(e.page-1)*e.limit-1;case 9:if(!(i>=a)){t.next=18;break}return t.next=12,e.nftContract.methods.tokenURI(o[i]).call();case 12:c=t.sent,s={tokenId:o[i],svg:c},n.push(s);case 15:i--,t.next=9;break;case 18:e.avatars=n,r.close();case 20:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()});e.address&&e.initContract(),Object(r["ab"])((function(){return e.address}),(function(t){t&&e.initContract()}));var n=Object(r["U"])(e);return Object(A["a"])({},n)}};n("0782"),n("49c7");y.render=v,y.__scopeId="data-v-137eb1c2";e["default"]=y},6680:function(t,e,n){},"82b5":function(t,e,n){"use strict";var r,o;(function(){var n=e||{}||this||window;r=[],o=function(){return n}.apply(e,r),void 0===o||(t.exports=o),n.default=n;var a="http://www.w3.org/2000/xmlns/",i="http://www.w3.org/1999/xhtml",c="http://www.w3.org/2000/svg",s='<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>',u=/url\(["']?(.+?)["']?\)/,l={woff2:"font/woff2",woff:"font/woff",otf:"application/x-font-opentype",ttf:"application/x-font-ttf",eot:"application/vnd.ms-fontobject",sfnt:"application/font-sfnt",svg:"image/svg+xml"},f=function(t){return t instanceof HTMLElement||t instanceof SVGElement},d=function(t){if(!f(t))throw new Error("an HTMLElement or SVGElement is required; got "+t)},g=function(t){return new Promise((function(e,n){f(t)?e(t):n(new Error("an HTMLElement or SVGElement is required; got "+t))}))},h=function(t){return t&&0===t.lastIndexOf("http",0)&&-1===t.lastIndexOf(window.location.host)},v=function(t){var e=Object.keys(l).filter((function(e){return t.indexOf("."+e)>0})).map((function(t){return l[t]}));return e?e[0]:(console.error("Unknown font format for "+t+". Fonts may not be working correctly."),"application/octet-stream")},A=function(t){for(var e="",n=new Uint8Array(t),r=0;r<n.byteLength;r++)e+=String.fromCharCode(n[r]);return window.btoa(e)},w=function(t,e,n){var r=t.viewBox&&t.viewBox.baseVal&&t.viewBox.baseVal[n]||null!==e.getAttribute(n)&&!e.getAttribute(n).match(/%$/)&&parseInt(e.getAttribute(n))||t.getBoundingClientRect()[n]||parseInt(e.style[n])||parseInt(window.getComputedStyle(t).getPropertyValue(n));return"undefined"===typeof r||null===r||isNaN(parseFloat(r))?0:r},p=function(t,e,n,r){if("svg"===t.tagName)return{width:n||w(t,e,"width"),height:r||w(t,e,"height")};if(t.getBBox){var o=t.getBBox(),a=o.x,i=o.y,c=o.width,s=o.height;return{width:a+c,height:i+s}}},b=function(t){return decodeURIComponent(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,(function(t,e){var n=String.fromCharCode("0x"+e);return"%"===n?"%25":n})))},m=function(t){for(var e=window.atob(t.split(",")[1]),n=t.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(e.length),o=new Uint8Array(r),a=0;a<e.length;a++)o[a]=e.charCodeAt(a);return new Blob([r],{type:n})},x=function(t,e){if(e)try{return t.querySelector(e)||t.parentNode&&t.parentNode.querySelector(e)}catch(n){console.warn('Invalid CSS selector "'+e+'"',n)}},O=function(t,e){var n=t.cssText.match(u),r=n&&n[1]||"";if(r&&!r.match(/^data:/)&&"about:blank"!==r){var o=r.startsWith("../")?e+"/../"+r:r.startsWith("./")?e+"/."+r:r;return{text:t.cssText,format:v(o),url:o}}},j=function(t){return Promise.all(Array.from(t.querySelectorAll("image")).map((function(t){var e=t.getAttributeNS("http://www.w3.org/1999/xlink","href")||t.getAttribute("href");return e?(h(e)&&(e+=(-1===e.indexOf("?")?"?":"&")+"t="+(new Date).valueOf()),new Promise((function(n,r){var o=document.createElement("canvas"),a=new Image;a.crossOrigin="anonymous",a.src=e,a.onerror=function(){return r(new Error("Could not load "+e))},a.onload=function(){o.width=a.width,o.height=a.height,o.getContext("2d").drawImage(a,0,0),t.setAttributeNS("http://www.w3.org/1999/xlink","href",o.toDataURL("image/png")),n(!0)}}))):Promise.resolve(null)})))},y={},C=function(t){return Promise.all(t.map((function(t){return new Promise((function(e,n){if(y[t.url])return e(y[t.url]);var r=new XMLHttpRequest;r.addEventListener("load",(function(){var n=A(r.response),o=t.text.replace(u,'url("data:'+t.format+";base64,"+n+'")')+"\n";y[t.url]=o,e(o)})),r.addEventListener("error",(function(n){console.warn("Failed to load font from: "+t.url,n),y[t.url]=null,e(null)})),r.addEventListener("abort",(function(n){console.warn("Aborted loading font from: "+t.url,n),e(null)})),r.open("GET",t.url),r.responseType="arraybuffer",r.send()}))}))).then((function(t){return t.filter((function(t){return t})).join("")}))},k=null,S=function(){return k||(k=Array.from(document.styleSheets).map((function(t){try{return{rules:t.cssRules,href:t.href}}catch(e){return console.warn("Stylesheet could not be loaded: "+t.href,e),{}}})))},I=function(t,e){var n=e||{},r=n.selectorRemap,o=n.modifyStyle,a=n.modifyCss,i=n.fonts,c=n.excludeUnusedCss,s=a||function(t,e){var n=r?r(t):t,a=o?o(e):e;return n+"{"+a+"}\n"},u=[],l="undefined"===typeof i,f=i||[];return S().forEach((function(e){var n=e.rules,r=e.href;n&&Array.from(n).forEach((function(e){if("undefined"!=typeof e.style)if(x(t,e.selectorText))u.push(s(e.selectorText,e.style.cssText));else if(l&&e.cssText.match(/^@font-face/)){var n=O(e,r);n&&f.push(n)}else c||u.push(e.cssText)}))})),C(f).then((function(t){return u.join("\n")+t}))},E=function(){if(!navigator.msSaveOrOpenBlob&&!("download"in document.createElement("a")))return{popup:window.open()}};n.prepareSvg=function(t,e,n){d(t);var r=e||{},o=r.left,s=void 0===o?0:o,u=r.top,l=void 0===u?0:u,f=r.width,g=r.height,h=r.scale,v=void 0===h?1:h,A=r.responsive,w=void 0!==A&&A,b=r.excludeCss,m=void 0!==b&&b;return j(t).then((function(){var r=t.cloneNode(!0);r.style.backgroundColor=(e||{}).backgroundColor||t.style.backgroundColor;var o=p(t,r,f,g),u=o.width,d=o.height;if("svg"!==t.tagName){if(!t.getBBox)return void console.error("Attempted to render non-SVG element",t);null!=r.getAttribute("transform")&&r.setAttribute("transform",r.getAttribute("transform").replace(/translate\(.*?\)/,""));var h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.appendChild(r),r=h}if(r.setAttribute("version","1.1"),r.setAttribute("viewBox",[s,l,u,d].join(" ")),r.getAttribute("xmlns")||r.setAttributeNS(a,"xmlns",c),r.getAttribute("xmlns:xlink")||r.setAttributeNS(a,"xmlns:xlink","http://www.w3.org/1999/xlink"),w?(r.removeAttribute("width"),r.removeAttribute("height"),r.setAttribute("preserveAspectRatio","xMinYMin meet")):(r.setAttribute("width",u*v),r.setAttribute("height",d*v)),Array.from(r.querySelectorAll("foreignObject > *")).forEach((function(t){t.setAttributeNS(a,"xmlns","svg"===t.tagName?c:i)})),!m)return I(t,e).then((function(t){var e=document.createElement("style");e.setAttribute("type","text/css"),e.innerHTML="<![CDATA[\n"+t+"\n]]>";var o=document.createElement("defs");o.appendChild(e),r.insertBefore(o,r.firstChild);var a=document.createElement("div");a.appendChild(r);var i=a.innerHTML.replace(/NS\d+:href/gi,'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');if("function"!==typeof n)return{src:i,width:u,height:d};n(i,u,d)}));var A=document.createElement("div");A.appendChild(r);var b=A.innerHTML;if("function"!==typeof n)return{src:b,width:u,height:d};n(b,u,d)}))},n.svgAsDataUri=function(t,e,r){return d(t),n.prepareSvg(t,e).then((function(t){var e=t.src,n=t.width,o=t.height,a="data:image/svg+xml;base64,"+window.btoa(b(s+e));return"function"===typeof r&&r(a,n,o),a}))},n.svgAsPngUri=function(t,e,r){d(t);var o=e||{},a=o.encoderType,i=void 0===a?"image/png":a,c=o.encoderOptions,s=void 0===c?.8:c,u=o.canvg,l=function(t){var e=t.src,n=t.width,o=t.height,a=document.createElement("canvas"),c=a.getContext("2d"),l=window.devicePixelRatio||1;a.width=n*l,a.height=o*l,a.style.width=a.width+"px",a.style.height=a.height+"px",c.setTransform(l,0,0,l,0,0),u?u(a,e):c.drawImage(e,0,0);var f=void 0;try{f=a.toDataURL(i,s)}catch(d){if("undefined"!==typeof SecurityError&&d instanceof SecurityError||"SecurityError"===d.name)return void console.error("Rendered SVG images cannot be downloaded in this browser.");throw d}return"function"===typeof r&&r(f,a.width,a.height),Promise.resolve(f)};return u?n.prepareSvg(t,e).then(l):n.svgAsDataUri(t,e).then((function(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){return e(l({src:r,width:r.width,height:r.height}))},r.onerror=function(){n("There was an error loading the data URI as an image on the following SVG\n"+window.atob(t.slice(26))+"Open the following link to see browser's diagnosis\n"+t)},r.src=t}))}))},n.download=function(t,e,n){if(navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(m(e),t);else{var r=document.createElement("a");if("download"in r){r.download=t,r.style.display="none",document.body.appendChild(r);try{var o=m(e),a=URL.createObjectURL(o);r.href=a,r.onclick=function(){return requestAnimationFrame((function(){return URL.revokeObjectURL(a)}))}}catch(i){console.error(i),console.warn("Error while getting object URL. Falling back to string URL."),r.href=e}r.click(),document.body.removeChild(r)}else n&&n.popup&&(n.popup.document.title=t,n.popup.location.replace(e))}},n.saveSvg=function(t,e,r){var o=E();return g(t).then((function(t){return n.svgAsDataUri(t,r||{})})).then((function(t){return n.download(e,t,o)}))},n.saveSvgAsPng=function(t,e,r){var o=E();return g(t).then((function(t){return n.svgAsPngUri(t,r||{})})).then((function(t){return n.download(e,t,o)}))}})()},"8a16":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAGQElEQVRYCc2Za2xURRTHZ+bO3d22hPKShCLQLpBoEIiwBSSSADGY8AGQYKNUSgwkRiN8IPLRV0z8YIxR8JtGYrFIigI2SjQhghIDpaUJKEbDowVkifIwUrvd3XtnxvO/7V2XfRfa1Zs0996Zc+b8dubOmXNOObvLa0bn3umaOau1NvMZ5zXcmBrcveGMiRrOo4zuQvBTgtlfnI88deFuTPGhKM3oar1PuYktjLMnDGPjBWNtTLBjQrOr2rajFbaIulaQO/H+ScJxarRgk5lmSzRjq8jQTWbYAUsGd56f13C9VLslAc453Vx1O8lfohnZwploMULv6Z6/4STnnDiLX8YYXndq9wKuxXrDdCPN9M7RAfP2mblNfcW0iwKGT7as1Vy/z5k5zCzr5e55jZeKDVqov66rZRpT6g3D+GPCiBcvLmjcX0i+IGBtx+5XSeBZbsl1F+c93VlooKH2hbs+jRjlfkZLsKunfsPr+fRzAi7tPhK6dONKM2O8RgTM2gtzm/7IN8C9tE8/3TxRJznNoIlOmzCl6WjdsnjmePSdZ1+AoyVQlZXB5SMFB6sYGzZga2BCslmyALGsmLmqyuDGs7Maktkqw9sCG7AFmwO27xz/DkBsCHxzWNZywPkosAWbsA0Gvx331Dc46ErOCUuuGu4NkW6w0DM2jlZuG7mgmb4LSs0g/BxcyX8FB3DYBoPncwd/iQeIEwJOGH6u0C8sSx8YiMVjIoMeoHKTW3FC3KsTHo4fAAaweEcqDSi9QblZQ6ybSjUAP8lqmXuUL3MzdZaaI7LnzM35Tp/9jiViC+k05Nqt6JIyvs0aV33SUk7g1wdW92bqpb/jKCW1D6ntFY6oxDXOse7IM5NLOVvDna3VbtJ6gY7Xnxctdr/cxxtU+uDT2pvrXFV1xLZjU2mpBjYhUSo3dI0ZvscSgc97Fq06ka6T+eyd3Z2fXJXcXkKBiLOa1rmtFDgM5LpsNkUn25lw9x4/Hnx+xrlDQQzoGyG4Fbbs/xcOHdRvycQkcsibDOuv8GXz3cECJrBJxHNCiK/yCWe2c8EnCu6OEjxhM57cEb9e9dyUWwffnd6xv91w90oyKUczplPAKX2jyax1zJKqK9VW6IHCOK3MSokgU1BgWUg2vc8o8bs2vFdINo6RUSl7HzLG/iDhBG4ZE7jMuAmly6c/E6JdFXC8jZnenuvZizHBhkgYwWYuocw2LGXlGP4LM+KQMTIVC3LuEGjfeNu+/bAtbz+Yqee/G6bifUmbvpDiF5jAJjCDiISLqzC2+Ld9odifZp1h9jit7L9INwVZVJ8LygL42bEsHCsqSwIeE2aQPmCDML0UpcfvfzJBnjMmRGwFffTVqV1agrLWgaRgTsepSMQpQZx5TMSG7+EacohSlF7jXFeMkQc1C7xHBhPkO0ubQZo95cofgkF2vBQ7kBlkuoZ5jyLBKVURTjZU2fuWcoJtWsssR501zoAP7LVs9eZQkiUweWy0TFEv+8oaOX+DcUIJ8vbVXGgrv9RAj1ZS0d7aFq6f8F0x2fR+j4nYJPJWpIbU2ZIukOs5fGL/ownHWhjvF3GamO+1tpdYwq3MJYtdrlTghsXNxs2PrP0Gn0cuubxtxOTl1Eiqkbemnwb5lMbKqe3SdrvIUS8XIrndshJZpwKBadetuqxUaEeQ6cU9i9Z9PVQ4sIAJbN7urevY/aPhZnNPpKk9H1x6+6yzraPiMV3rKrnAKGsLk/1zOJOOUYHDwkrsDFS453TF2KvnZ66kjTT0q7azeSGChe76DbMHohnK+On0W09DlQRIIfrfJPvT4N9HQ0corIEEnw7wA5Dyjh2UI5Dxe0l1Yd0R7wUDWMCUAvS2P5UjkPGPOEExA2AgFt8lpQ5u1EpQjkDiUmyMker3qg3EABbfRgoQWRRqJShHIOP3Bcp1h03YBoOf0cF2ChAvKOTQ2bUL5QjaqQG0leOCLdiE7cxiUs4goa6juRXliHJUFwDXF0t8TOmm1V3f1JA5IXfMoN+JQg4UYrHEtyO53BgbNmALNn376fecM+gL/G/Lbz4g7v/rAqYPmlkCJj/VcjGyvqPUTBBna7hzTz1FTo3DXgL2IXEfKKInt1JitIZ2XM4iOuT6HV1T1iI6jGZe5fo3xD9hwSUlLxe23AAAAABJRU5ErkJggg=="},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),a=n("e8b5"),i=n("861d"),c=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),f=n("1dde"),d=n("b622"),g=n("2d00"),h=d("isConcatSpreadable"),v=9007199254740991,A="Maximum allowed index exceeded",w=g>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),p=f("concat"),b=function(t){if(!i(t))return!1;var e=t[h];return void 0!==e?!!e:a(t)},m=!w||!p;r({target:"Array",proto:!0,forced:m},{concat:function(t){var e,n,r,o,a,i=c(this),f=l(i,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?i:arguments[e],b(a)){if(o=s(a.length),d+o>v)throw TypeError(A);for(n=0;n<o;n++,d++)n in a&&u(f,d,a[n])}else{if(d>=v)throw TypeError(A);u(f,d++,a)}return f.length=d,f}})},dfb2:function(t,e,n){}}]);
//# sourceMappingURL=chunk-10752e19.2a029819.js.map