var Utils={bindReady:function(e,t){function n(){i||(i=!0,e(t))}function o(){if(!i&&document.body)try{document.documentElement.doScroll("left"),n()}catch(e){setTimeout(o,0)}}var i=!1;document.addEventListener?document.addEventListener("DOMContentLoaded",function(){n()},!1):document.attachEvent&&(document.documentElement.doScroll&&window==window.top&&o(),document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&n()})),window.addEventListener?window.addEventListener("load",n,!1):window.attachEvent&&window.attachEvent("onload",n)},extend:function(e){e=e||{};for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var o in n)n.hasOwnProperty(o)&&("object"==typeof n[o]?Utils.extend(e[o],n[o]):e[o]=n[o])}return e},getViewport:function(e){if(e=e||window,null!=e.innerWidth)return{w:e.innerWidth,h:e.innerHeight};var t=e.document;return"CSS1Compat"==document.compatMode?{w:t.documentElement.clientWidth,h:t.documentElement.clientHeight}:{w:t.body.clientWidth,h:t.body.clientWidth}},russDeclOfNum:function(e,t){var n=[2,0,1,1,1,2];return t[e%100>4&&20>e%100?2:n[5>e%10?e%10:5]]},getUrlSearch:function(e){return(e=new RegExp("[?&]"+encodeURIComponent(e)+"=([^&]*)").exec(location.search))?decodeURIComponent(e[1]):void 0}};Utils.events={add:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&htmlEvents["on"+t]?e.attachEvent("on"+t,n):e["on"+t]=n},remove:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent&&htmlEvents["on"+t]?e.detachEvent("on"+t,n):e["on"+t]=null},trigger:function(e,t){var n;document.createEvent?(n=document.createEvent("HTMLEvents"),n.initEvent(t,!0,!0)):document.createEventObject&&(n=document.createEventObject(),n.eventType=t),n.eventName=t,e.dispatchEvent?e.dispatchEvent(n):e.fireEvent?e.fireEvent("on"+n.eventType,n):e[t]?e[t]():e["on"+t]&&e["on"+t]()}},Utils.events.waitFinal=function(){var e={};return function(t,n,o){o||(o="timer"+(new Date).getTime()),e[o]&&clearTimeout(e[o]),e[o]=setTimeout(t,n)}}(),Utils.cookie={get:function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},set:function(e,t,n){n=n||{};var o=n.expires;if("number"==typeof o&&o){var i=new Date;i.setTime(i.getTime()+1e3*o),o=n.expires=i}o&&o.toUTCString&&(n.expires=o.toUTCString()),n.path=n.path||"/",t=encodeURIComponent(t);var a=e+"="+t;for(var s in n){a+="; "+s;var r=n[s];r!==!0&&(a+="="+r)}document.cookie=a},remove:function(e){Utils.cookie.set(e,"",{expires:-1})}},Utils.bindReady(function(){window.Modernizr&&Modernizr.touchevents&&document.body.setAttribute("ontouchstart","")}),Utils.bindReady(obsoleteBrowser,{test:"ie9"}),$(function(){svg4everybody();var e=($("body"),$("#aside-logo"),$("html")),t=$("#header"),n=$("#bx-panel"),o=n.length>0;o&&($(document).on("scroll",function(){var o=$(document).scrollTop();if(e.hasClass("admin-bar-normal")){var i=n.outerHeight(),a=i-o>0?i-o:0;t.css("top",a)}}),$(document).on("adminBarChanged",function(){t.css("top","")})),$(".js-toggle-nav").on("click",function(){$("html").toggleClass("is-show-nav")}),$(".js-nav-1lvl").on("click",function(){var e=$(this).closest(".nav-item"),t=e.find(".nav-item__childs");t.animate({height:"toggle"},300,function(){e.toggleClass("is-opened")})}),$(".js-nav-2lvl").on("click",function(){var e=$(this).closest(".nav-item-child");e.toggleClass("is-opened")}),$(".js-home-scroll").on("click",function(){});var i=$("#article-scroll-bg"),a=$("#article-bg-scroll-stop");if(0!=i.length&&0!=a.length){var s,r,t=$("#header"),c=function(){s=$.windowHeight(),r=t.outerHeight()};c(),$(window).on("resize",c),$(window).on("scroll",function(){var e=$(window).scrollTop(),t=Math.floor(a.offset().top-e-s);0>=t?i.css({top:t+r,bottom:-t+"px"}):i.css({top:"",bottom:""})})}$(".js-responsive-table").wrap('<div class="responsive-table"></div>')}),function(){var e={panel:!1,checkStatus:function(){if(!this.panel||null==this.panel)return!1;var e=this._isClassExist(this.panel,"bx-panel-fixed"),t=this._isClassExist(this.panel,"bx-panel-folded"),n=document.documentElement;e?(this._removeClass(n,"admin-bar-normal"),this._addClass(n,"admin-bar-fixed")):(this._removeClass(n,"admin-bar-fixed"),this._addClass(n,"admin-bar-normal")),t?this._addClass(n,"admin-bar-folded"):this._removeClass(n,"admin-bar-folded")},controlsEvent:function(){if(this.checkStatus(),document.createEvent){var e=document.createEvent("HTMLEvents");e.initEvent("adminBarChanged",!0,!0),document.dispatchEvent(e)}},run:function(){var e=this.panel=document.getElementById("bx-panel");if(e){this.checkStatus();var t=document.getElementById("bx-panel-hider"),n=document.getElementById("bx-panel-expander"),o=document.getElementById("bx-panel-pin");t.addEventListener("click",this.controlsEvent.bind(this),!1),n.addEventListener("click",this.controlsEvent.bind(this),!1),o.addEventListener("click",this.controlsEvent.bind(this),!1)}},_isClassExist:function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},_addClass:function(e,t){this._isClassExist(e,t)||(e.classList?e.classList.add(t):e.className+=" "+t)},_removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^| )"+t.split(" ").join("|")+"( |$)","gi")," ")}},t=function(e,t){var n=!1,o=function(){n||(n=!0,e(t))},i=function(){if(!n&&document.body)try{document.documentElement.doScroll("left"),o()}catch(e){setTimeout(i,0)}};document.addEventListener?document.addEventListener("DOMContentLoaded",function(){o()},!1):document.attachEvent&&(document.documentElement.doScroll&&window==window.top&&i(),document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&o()})),window.addEventListener?window.addEventListener("load",o,!1):window.attachEvent&&window.attachEvent("onload",o)};t(e.run.bind(e))}(),$(function(){function e(){n=new ScrollMagic.Controller({});var e=new ScrollMagic.Scene({duration:600});e.setTween("#paper-family",{y:"-20%",opacity:0,ease:Ease.easeInOut}),e.addTo(n);var t=new ScrollMagic.Scene({duration:100});t.setTween("#paper-scroll-me",{opacity:0,ease:Ease.easeInOut}),t.addTo(n);var o=new ScrollMagic.Scene({triggerElement:"#paper-scene-trigger",duration:650,offset:150});o.setTween("#paper-clip",{y:"380px",ease:Ease.easeInOut}),o.addTo(n);var i=new ScrollMagic.Scene({triggerElement:"#paper-scene-trigger",duration:1400,offset:100});i.setTween("#paper-asks",{y:"480px",ease:Cubic.easeOut}),i.addTo(n);var a=new ScrollMagic.Scene({triggerElement:"#paper-scene-trigger",duration:1400,offset:100});a.setTween("#paper-test",{y:"480px",ease:Cubic.easeOut}),a.addTo(n);var s=new ScrollMagic.Scene({triggerElement:"#every-day"});s.setClassToggle("#every-day","is-active"),s.addTo(n);var r=new ScrollMagic.Scene({triggerElement:"#products-scene-start",duration:400});r.setTween("#products-scene",{y:"0",ease:Cubic.easeOut}),r.addTo(n);var c=new ScrollMagic.Scene({triggerElement:"#products-scene-start",duration:400});c.setTween("#products-clouds",{y:"0",ease:Linear.easeOut}),c.addTo(n);var l=new ScrollMagic.Scene({triggerElement:"#products-scene-start",offset:250});l.setClassToggle("#products","is-active"),l.addTo(n);var d=new ScrollMagic.Scene({triggerElement:"#why-scene-start",duration:400});d.setTween("#why-scene",{y:"0",ease:Cubic.easeOut}),d.addTo(n);var u=new ScrollMagic.Scene({triggerElement:"#why-scene-start",offset:250});u.setClassToggle("#why","is-active"),u.addTo(n)}function t(){Modernizr.mq("(min-width: 980px)")?n||e():n&&(n.destroy(!0),n=!1)}if(document.getElementById("paper-family")){var n;t(),$(window).on("resize",function(){Utils.events.waitFinal(function(){t()},200,"resizeForScenes")});var o=$("#everyday-video");if(0!=o.length){var i=new Bideo;i.init({videoEl:document.getElementById("everyday-video"),container:document.getElementById("everyday-bg"),resize:!0,src:[{src:o.data("video-src"),type:"video/mp4"}]})}}}),$(function(){void 0!=$.fn.placeholder&&$("input, textarea").placeholder(),void 0!=$.fn.magnificPopup&&$(".js-magnific-iframe").magnificPopup({disableOn:!1,type:"iframe",mainClass:"mfp-theme-video",removalDelay:160,preloader:!1,iframe:{patterns:{bxPlayer:{index:"/ajax/player.php",id:function(e){var t,n=$.windowWidth("visual");return t=n>=916?880:n-16-20,e+"&width="+t+"&is_ajax=true"},src:"%id%"}},srcAction:"iframe_src"}})}),function(){function e(){var e=document.getElementById("test");if(e){var t=function(){$(e).html('<div class="test-error">Ошибка при загрузке данных.</div>')},n=$(e).data("source");n||t(),$.get(n,{},null,"json").success(function(t){r=new o(t),ko.applyBindings(r,e)}).error(function(){t()})}}function t(){i.show(),a.show(),s.css("overflow","hidden")}function n(){i.hide(),a.hide(),s.css("overflow","")}var o=function(e){if(void 0!=e){var t=this;t.questions=ko.observableArray([]),t.results=e.results||[],t.current=ko.observable(null),t.last=e.questions.length-1,t.nextButtonText=ko.computed(function(){return t.current()==t.last?"Узнать результат":"Далее"}),t.complete=ko.observable(!1),t.result=ko.observable(null),t.current.subscribe(function(){var e=t.questions()[t.current()].image;t.image(e)}),t.image=ko.observable(null),t.makeQuestions(e.questions),t.current(0)}};o.prototype.makeQuestions=function(e){var t=this;if(!$.isArray(e))return!1;t.questions([]);for(var n=0,o=e.length;o>n;n++)t.questions.push({text:e[n].text,image:e[n].image,available:ko.observableArray(e[n].answers),selected:ko.observable(null)});return!0},o.prototype.nextQuestion=function(){var e=this,t=e.current();t!=e.last?e.current(t+1):e.calcResult()},o.prototype.calcResult=function(){for(var e=this,t=0,n=!1,o=0,i=e.questions().length;i>o;o++){var a=e.questions()[o].selected();a&&a.count&&(t+=parseInt(a.count))}for(var s=0,r=e.results.length;r>s;s++)if(parseInt(e.results[s].values[0])<=t&&t<=parseInt(e.results[s].values[1])){n=!0,e.result(e.results[s]),e.image(e.results[s].image);break}n||e.result({text:"Ошибка при вычислении результата",textSub:"",image:!1}),e.complete(!0)},o.prototype.reset=function(){var e=this;e.complete(!1),e.result(null);for(var t=0,n=e.questions().length;n>t;t++)e.questions()[t].selected(null);e.current(0)};var i,a,s,r;$(function(){i=$("#popup-mask"),a=$("#popup-test"),s=$("html"),e(),$(".js-open-test").on("click",function(){testWeborama();return r||e(),t(),!1}),$(".js-close-test").on("click",function(){return n(),r.reset(),!1}),$(".js-reset-test").on("click",function(){r.reset()})})}();

function testWeborama(){
var adperftrackobj = {
    fullhost : 'rtbprojects.solution.weborama.fr'
    ,site : 534
    ,conversion_page : 405
};
try{adperfTracker.track( adperftrackobj );}catch(err){}
}