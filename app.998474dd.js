parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
var e=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],o={galleryContainerRef:document.querySelector(".js-gallery"),modalWindowRef:document.querySelector(".lightbox"),closeModalBtnRef:document.querySelector('[data-action="close-lightbox"]'),lightboxImageRef:document.querySelector(".lightbox__image"),lightboxOverlayRef:document.querySelector(".lightbox__overlay")},t=i(e);function i(e){return e.map(function(e){var o=e.preview,t=e.original,i=e.description;return'<li class="gallery__item">\n    <a\n     class="gallery__link"\n     href="'.concat(t,'"\n    >\n     <img\n      class="gallery__image"\n      src=').concat(o,"\n      data-source=").concat(t,"\n      alt=").concat(i,"\n     />\n    </a>\n   </li>")}).join("")}function a(e){e.preventDefault(),e.target.classList.contains("gallery__image")&&(o.modalWindowRef.classList.add("is-open"),n(e.target.dataset.source,e.target.alt),window.addEventListener("keydown",r))}function n(e,t){o.lightboxImageRef.src=e,o.lightboxImageRef.alt=t}function c(){o.modalWindowRef.classList.remove("is-open"),n("",""),window.removeEventListener("keydown",r)}function p(){c()}function r(e){"ArrowRight"===e.code&&l(),"ArrowLeft"===e.code&&g(),"Escape"===e.code&&c()}function l(){var t=e.findIndex(function(e){return e.original===o.lightboxImageRef.src});t!==e.length-1?(o.lightboxImageRef.src=e[t+1].original,o.lightboxImageRef.alt=e[t+1].description):(o.lightboxImageRef.src=e[0].original,o.lightboxImageRef.alt=e[0].description)}function g(){var t=e.findIndex(function(e){return e.original===o.lightboxImageRef.src});0!==t?(o.lightboxImageRef.src=e[t-1].original,o.lightboxImageRef.alt=e[t-1].description):(o.lightboxImageRef.src=e[e.length-1].original,o.lightboxImageRef.alt=e[e.length-1].description)}o.galleryContainerRef.insertAdjacentHTML("beforeend",t),o.galleryContainerRef.addEventListener("click",a),o.closeModalBtnRef.addEventListener("click",c),o.lightboxOverlayRef.addEventListener("click",p);
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/goit-js-hw-09-parcel/app.998474dd.js.map