!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector(".form"),l=(document.querySelector("button[type='submit']"),{userDelay:u.elements.delay.value,userStep:u.elements.step.value,userAmount:u.elements.amount.value});function s(e,n){new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),l.userDelay)}))}u.addEventListener("submit",(function(n){n.preventDefault();var t=l.userDelay,o=l.userStep,r=l.userAmount;if(t<0||o<0||r<0)e(i).Notify.warning("❌ Only positive numbers");else for(var u=0;u<=r;u+=1){s(u+1,t+o*u),promise.then((function(n,t){e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(n,t){e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.4d261448.js.map