parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kvIT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={galleryContainerRef:document.querySelector(".js-gallery"),modalWindowRef:document.querySelector(".lightbox"),closeModalBtnRef:document.querySelector('[data-action="close-lightbox"]'),lightboxImageRef:document.querySelector(".lightbox__image"),lightboxOverlayRef:document.querySelector(".lightbox__overlay")};exports.default=e;
},{}],"k87A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"EzL3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.galleryMarkup=void 0;var e=r(require("./gallery-items"));function r(e){return e&&e.__esModule?e:{default:e}}var n=a(e.default);function a(e){return e.map(function(e){var r=e.preview,n=e.original,a=e.description;return'<li class="gallery__item">\n    <a\n     class="gallery__link"\n     href="'.concat(n,'"\n    >\n     <img\n      class="gallery__image"\n      src=').concat(r,"\n      data-source=").concat(n,"\n      alt=").concat(a,"\n     />\n    </a>\n   </li>")}).join("")}exports.galleryMarkup=n;
},{"./gallery-items":"k87A"}],"r1NF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getImageAttributes=r;var e=t(require("./refs"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t,r){e.default.lightboxImageRef.src=t,e.default.lightboxImageRef.alt=r}
},{"./refs":"kvIT"}],"H6u9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onRightPress=a,exports.onLeftPress=f;var e=l(require("./gallery-items")),t=l(require("./refs"));function l(e){return e&&e.__esModule?e:{default:e}}function a(){var l=e.default.findIndex(function(e){return e.original===t.default.lightboxImageRef.src});l!==e.default.length-1?(t.default.lightboxImageRef.src=e.default[l+1].original,t.default.lightboxImageRef.alt=e.default[l+1].description):(t.default.lightboxImageRef.src=e.default[0].original,t.default.lightboxImageRef.alt=e.default[0].description)}function f(){var l=e.default.findIndex(function(e){return e.original===t.default.lightboxImageRef.src});0!==l?(t.default.lightboxImageRef.src=e.default[l-1].original,t.default.lightboxImageRef.alt=e.default[l-1].description):(t.default.lightboxImageRef.src=e.default[e.default.length-1].original,t.default.lightboxImageRef.alt=e.default[e.default.length-1].description)}
},{"./gallery-items":"k87A","./refs":"kvIT"}],"SfML":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onKeyPress=r;var e=require("./modal-window"),o=require("./modal-close");function r(r){"ArrowRight"===r.code&&(0,e.onRightPress)(),"ArrowLeft"===r.code&&(0,e.onLeftPress)(),"Escape"===r.code&&(0,o.onModalCLose)()}
},{"./modal-window":"H6u9","./modal-close":"aNxB"}],"aNxB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onModalCLose=s,exports.onOverlayClick=n;var e=o(require("./refs")),r=require("./keyPress"),t=require("./getAttributes");function o(e){return e&&e.__esModule?e:{default:e}}function s(){e.default.modalWindowRef.classList.remove("is-open"),(0,t.getImageAttributes)("",""),window.removeEventListener("keydown",r.onKeyPress)}function n(){s()}
},{"./refs":"kvIT","./keyPress":"SfML","./getAttributes":"r1NF"}],"A2T1":[function(require,module,exports) {
"use strict";var e=n(require("./refs")),t=require("./markup"),r=require("./getAttributes"),a=require("./modal-close"),l=require("./keyPress");function n(e){return e&&e.__esModule?e:{default:e}}function i(t){t.preventDefault(),t.target.classList.contains("gallery__image")&&(e.default.modalWindowRef.classList.add("is-open"),(0,r.getImageAttributes)(t.target.dataset.source,t.target.alt),window.addEventListener("keydown",l.onKeyPress))}e.default.galleryContainerRef.insertAdjacentHTML("beforeend",t.galleryMarkup),e.default.galleryContainerRef.addEventListener("click",i),e.default.closeModalBtnRef.addEventListener("click",a.onModalCLose),e.default.lightboxOverlayRef.addEventListener("click",a.onOverlayClick);
},{"./refs":"kvIT","./markup":"EzL3","./getAttributes":"r1NF","./modal-close":"aNxB","./keyPress":"SfML"}]},{},["A2T1"], null)
//# sourceMappingURL=/goit-js-hw-09-parcel/app.b6b22474.js.map