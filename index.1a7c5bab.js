!function(){var e=document.querySelector("#js-header"),n=document.querySelector(".main-nav"),l=document.querySelector(".js-form"),t=document.querySelector(".js-form-input-email");function i(e){var n,l;null===(n=document.querySelector(".nav__link--current"))||void 0===n||n.classList.remove("nav__link--current"),null===(l=document.querySelector('a[href="'.concat(e,'"]')))||void 0===l||l.classList.add("nav__link--current")}window.addEventListener("scroll",(function(){var n=window.innerWidth<768?"mobile":"desktop";"mobile"===n&&(window.scrollY>120?e.classList.add("visible"):e.classList.remove("visible")),"desktop"===n&&(window.scrollY>70?e.classList.add("visible"):e.classList.remove("visible"))})),n.addEventListener("click",(function(e){var n,l,t,o;if("A"===(null==e||null===(n=e.target)||void 0===n?void 0:n.nodeName)){var r=null==e||null===(l=e.target)||void 0===l||null===(t=l.attributes)||void 0===t||null===(o=t.href)||void 0===o?void 0:o.value;if("/index.html"!==r){e.preventDefault();var s=document.querySelector("".concat(r));null==s||s.scrollIntoView({block:"nearest",behavior:"smooth"}),i(r)}}})),l.addEventListener("submit",(function(e){var n,i,o,r=null==e||null===(n=e.currentTarget)||void 0===n||null===(i=n.elements)||void 0===i||null===(o=i.email)||void 0===o?void 0:o.value;if(""!==r.trim()&&r.includes("@")&&r.includes(".")){t.classList.contains("invalid")&&t.classList.remove("invalid");var s=new FormData(l);return fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(s).toString()}).then((function(){console.log("Form successfully submitted"),l.reset()})).catch((function(e){return console.log("Sending form failed")}))}t.focus(),t.classList.add("invalid");var a=setTimeout((function(){t.classList.remove("invalid"),clearTimeout(a)}),5e3);e.preventDefault()}))}();
//# sourceMappingURL=index.1a7c5bab.js.map