(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-daeb0adc"],{"0c97":function(t,e,n){"use strict";n("4b9b")},"138a":function(t,e,n){},"4b9b":function(t,e,n){},"53c7":function(t,e,n){"use strict";n.r(e);var r=n("7a23"),o=Object(r["gb"])("data-v-63c3ec7c");Object(r["I"])("data-v-63c3ec7c");var i={class:"container svg-box"};Object(r["G"])();var a=o((function(t,e,n,o,a,c){return Object(r["F"])(),Object(r["j"])("div",i,[Object(r["o"])("div",{class:"avatar-box",onClick:e[1]||(e[1]=function(){return t.changeImg&&t.changeImg.apply(t,arguments)}),innerHTML:t.avatar},null,8,["innerHTML"])])})),c=n("5530"),u=(n("96cf"),n("1da1")),s=n("5502"),l=n("6c02"),f=n("01ea"),d=n("ae04"),h=n("82b5"),w={setup:function(){var t=Object(s["b"])(),e=Object(l["c"])(),n=Object(r["J"])({web3:Object(r["h"])((function(){return t.state.provider})),rate:Object(r["h"])((function(){return t.state.rate})),address:Object(r["h"])((function(){return t.state.accounts[0]})),avatar:"",tokenId:e.params.id,initContract:function(){n.nftContract=new n.web3.eth.Contract(d,f["a"].nftAddress),n.initData()},initData:function(){n.getAvatar()},changeImg:function(){var t=document.querySelector(".avatar-box svg");Object(h["saveSvgAsPng"])(t,"my_svg")},getAvatar:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.nftContract.methods.tokenURI(n.tokenId).call();case 2:e=t.sent,n.avatar=e;case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()});n.web3&&n.initContract(),Object(r["ab"])((function(){return n.web3}),(function(t){t&&n.initContract()}));var o=Object(r["U"])(n);return Object(c["a"])({},o)}};n("0c97"),n("8fe8");w.render=a,w.__scopeId="data-v-63c3ec7c";e["default"]=w},"82b5":function(t,e,n){"use strict";var r,o;(function(){var n=e||{}||this||window;r=[],o=function(){return n}.apply(e,r),void 0===o||(t.exports=o),n.default=n;var i="http://www.w3.org/2000/xmlns/",a="http://www.w3.org/1999/xhtml",c="http://www.w3.org/2000/svg",u='<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>',s=/url\(["']?(.+?)["']?\)/,l={woff2:"font/woff2",woff:"font/woff",otf:"application/x-font-opentype",ttf:"application/x-font-ttf",eot:"application/vnd.ms-fontobject",sfnt:"application/font-sfnt",svg:"image/svg+xml"},f=function(t){return t instanceof HTMLElement||t instanceof SVGElement},d=function(t){if(!f(t))throw new Error("an HTMLElement or SVGElement is required; got "+t)},h=function(t){return new Promise((function(e,n){f(t)?e(t):n(new Error("an HTMLElement or SVGElement is required; got "+t))}))},w=function(t){return t&&0===t.lastIndexOf("http",0)&&-1===t.lastIndexOf(window.location.host)},g=function(t){var e=Object.keys(l).filter((function(e){return t.indexOf("."+e)>0})).map((function(t){return l[t]}));return e?e[0]:(console.error("Unknown font format for "+t+". Fonts may not be working correctly."),"application/octet-stream")},v=function(t){for(var e="",n=new Uint8Array(t),r=0;r<n.byteLength;r++)e+=String.fromCharCode(n[r]);return window.btoa(e)},p=function(t,e,n){var r=t.viewBox&&t.viewBox.baseVal&&t.viewBox.baseVal[n]||null!==e.getAttribute(n)&&!e.getAttribute(n).match(/%$/)&&parseInt(e.getAttribute(n))||t.getBoundingClientRect()[n]||parseInt(e.style[n])||parseInt(window.getComputedStyle(t).getPropertyValue(n));return"undefined"===typeof r||null===r||isNaN(parseFloat(r))?0:r},m=function(t,e,n,r){if("svg"===t.tagName)return{width:n||p(t,e,"width"),height:r||p(t,e,"height")};if(t.getBBox){var o=t.getBBox(),i=o.x,a=o.y,c=o.width,u=o.height;return{width:i+c,height:a+u}}},b=function(t){return decodeURIComponent(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,(function(t,e){var n=String.fromCharCode("0x"+e);return"%"===n?"%25":n})))},y=function(t){for(var e=window.atob(t.split(",")[1]),n=t.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(e.length),o=new Uint8Array(r),i=0;i<e.length;i++)o[i]=e.charCodeAt(i);return new Blob([r],{type:n})},x=function(t,e){if(e)try{return t.querySelector(e)||t.parentNode&&t.parentNode.querySelector(e)}catch(n){console.warn('Invalid CSS selector "'+e+'"',n)}},A=function(t,e){var n=t.cssText.match(s),r=n&&n[1]||"";if(r&&!r.match(/^data:/)&&"about:blank"!==r){var o=r.startsWith("../")?e+"/../"+r:r.startsWith("./")?e+"/."+r:r;return{text:t.cssText,format:g(o),url:o}}},S=function(t){return Promise.all(Array.from(t.querySelectorAll("image")).map((function(t){var e=t.getAttributeNS("http://www.w3.org/1999/xlink","href")||t.getAttribute("href");return e?(w(e)&&(e+=(-1===e.indexOf("?")?"?":"&")+"t="+(new Date).valueOf()),new Promise((function(n,r){var o=document.createElement("canvas"),i=new Image;i.crossOrigin="anonymous",i.src=e,i.onerror=function(){return r(new Error("Could not load "+e))},i.onload=function(){o.width=i.width,o.height=i.height,o.getContext("2d").drawImage(i,0,0),t.setAttributeNS("http://www.w3.org/1999/xlink","href",o.toDataURL("image/png")),n(!0)}}))):Promise.resolve(null)})))},C={},O=function(t){return Promise.all(t.map((function(t){return new Promise((function(e,n){if(C[t.url])return e(C[t.url]);var r=new XMLHttpRequest;r.addEventListener("load",(function(){var n=v(r.response),o=t.text.replace(s,'url("data:'+t.format+";base64,"+n+'")')+"\n";C[t.url]=o,e(o)})),r.addEventListener("error",(function(n){console.warn("Failed to load font from: "+t.url,n),C[t.url]=null,e(null)})),r.addEventListener("abort",(function(n){console.warn("Aborted loading font from: "+t.url,n),e(null)})),r.open("GET",t.url),r.responseType="arraybuffer",r.send()}))}))).then((function(t){return t.filter((function(t){return t})).join("")}))},E=null,k=function(){return E||(E=Array.from(document.styleSheets).map((function(t){try{return{rules:t.cssRules,href:t.href}}catch(e){return console.warn("Stylesheet could not be loaded: "+t.href,e),{}}})))},j=function(t,e){var n=e||{},r=n.selectorRemap,o=n.modifyStyle,i=n.modifyCss,a=n.fonts,c=n.excludeUnusedCss,u=i||function(t,e){var n=r?r(t):t,i=o?o(e):e;return n+"{"+i+"}\n"},s=[],l="undefined"===typeof a,f=a||[];return k().forEach((function(e){var n=e.rules,r=e.href;n&&Array.from(n).forEach((function(e){if("undefined"!=typeof e.style)if(x(t,e.selectorText))s.push(u(e.selectorText,e.style.cssText));else if(l&&e.cssText.match(/^@font-face/)){var n=A(e,r);n&&f.push(n)}else c||s.push(e.cssText)}))})),O(f).then((function(t){return s.join("\n")+t}))},T=function(){if(!navigator.msSaveOrOpenBlob&&!("download"in document.createElement("a")))return{popup:window.open()}};n.prepareSvg=function(t,e,n){d(t);var r=e||{},o=r.left,u=void 0===o?0:o,s=r.top,l=void 0===s?0:s,f=r.width,h=r.height,w=r.scale,g=void 0===w?1:w,v=r.responsive,p=void 0!==v&&v,b=r.excludeCss,y=void 0!==b&&b;return S(t).then((function(){var r=t.cloneNode(!0);r.style.backgroundColor=(e||{}).backgroundColor||t.style.backgroundColor;var o=m(t,r,f,h),s=o.width,d=o.height;if("svg"!==t.tagName){if(!t.getBBox)return void console.error("Attempted to render non-SVG element",t);null!=r.getAttribute("transform")&&r.setAttribute("transform",r.getAttribute("transform").replace(/translate\(.*?\)/,""));var w=document.createElementNS("http://www.w3.org/2000/svg","svg");w.appendChild(r),r=w}if(r.setAttribute("version","1.1"),r.setAttribute("viewBox",[u,l,s,d].join(" ")),r.getAttribute("xmlns")||r.setAttributeNS(i,"xmlns",c),r.getAttribute("xmlns:xlink")||r.setAttributeNS(i,"xmlns:xlink","http://www.w3.org/1999/xlink"),p?(r.removeAttribute("width"),r.removeAttribute("height"),r.setAttribute("preserveAspectRatio","xMinYMin meet")):(r.setAttribute("width",s*g),r.setAttribute("height",d*g)),Array.from(r.querySelectorAll("foreignObject > *")).forEach((function(t){t.setAttributeNS(i,"xmlns","svg"===t.tagName?c:a)})),!y)return j(t,e).then((function(t){var e=document.createElement("style");e.setAttribute("type","text/css"),e.innerHTML="<![CDATA[\n"+t+"\n]]>";var o=document.createElement("defs");o.appendChild(e),r.insertBefore(o,r.firstChild);var i=document.createElement("div");i.appendChild(r);var a=i.innerHTML.replace(/NS\d+:href/gi,'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');if("function"!==typeof n)return{src:a,width:s,height:d};n(a,s,d)}));var v=document.createElement("div");v.appendChild(r);var b=v.innerHTML;if("function"!==typeof n)return{src:b,width:s,height:d};n(b,s,d)}))},n.svgAsDataUri=function(t,e,r){return d(t),n.prepareSvg(t,e).then((function(t){var e=t.src,n=t.width,o=t.height,i="data:image/svg+xml;base64,"+window.btoa(b(u+e));return"function"===typeof r&&r(i,n,o),i}))},n.svgAsPngUri=function(t,e,r){d(t);var o=e||{},i=o.encoderType,a=void 0===i?"image/png":i,c=o.encoderOptions,u=void 0===c?.8:c,s=o.canvg,l=function(t){var e=t.src,n=t.width,o=t.height,i=document.createElement("canvas"),c=i.getContext("2d"),l=window.devicePixelRatio||1;i.width=n*l,i.height=o*l,i.style.width=i.width+"px",i.style.height=i.height+"px",c.setTransform(l,0,0,l,0,0),s?s(i,e):c.drawImage(e,0,0);var f=void 0;try{f=i.toDataURL(a,u)}catch(d){if("undefined"!==typeof SecurityError&&d instanceof SecurityError||"SecurityError"===d.name)return void console.error("Rendered SVG images cannot be downloaded in this browser.");throw d}return"function"===typeof r&&r(f,i.width,i.height),Promise.resolve(f)};return s?n.prepareSvg(t,e).then(l):n.svgAsDataUri(t,e).then((function(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){return e(l({src:r,width:r.width,height:r.height}))},r.onerror=function(){n("There was an error loading the data URI as an image on the following SVG\n"+window.atob(t.slice(26))+"Open the following link to see browser's diagnosis\n"+t)},r.src=t}))}))},n.download=function(t,e,n){if(navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(y(e),t);else{var r=document.createElement("a");if("download"in r){r.download=t,r.style.display="none",document.body.appendChild(r);try{var o=y(e),i=URL.createObjectURL(o);r.href=i,r.onclick=function(){return requestAnimationFrame((function(){return URL.revokeObjectURL(i)}))}}catch(a){console.error(a),console.warn("Error while getting object URL. Falling back to string URL."),r.href=e}r.click(),document.body.removeChild(r)}else n&&n.popup&&(n.popup.document.title=t,n.popup.location.replace(e))}},n.saveSvg=function(t,e,r){var o=T();return h(t).then((function(t){return n.svgAsDataUri(t,r||{})})).then((function(t){return n.download(e,t,o)}))},n.saveSvgAsPng=function(t,e,r){var o=T();return h(t).then((function(t){return n.svgAsPngUri(t,r||{})})).then((function(t){return n.download(e,t,o)}))}})()},"8fe8":function(t,e,n){"use strict";n("138a")}}]);
//# sourceMappingURL=chunk-daeb0adc.e3dd7112.js.map