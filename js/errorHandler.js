!function(n,r){var e=encodeURIComponent||escape,o=function(r,e,o,t,u){n.onerror(r,e,o,t,u)};n.attachErrorHandler=function(t,u,i){u=void 0!==u&&u,t=e(t);var a=r.userAgent.match(/Trident\/(\d)\.\d(?:;|$)/gi),c=document.documentMode,d=c&&c<10||a&&parseInt(a)<6;return n.JSON||(d=!0),n.onerror=function(o,a,c,f,g){if("function"==typeof i&&i(o,a,c,f,g)&&(d=!0),!d){var s=f?" | column: "+f:"";s+=g?" | error: "+g:"";var l="Error: "+o+" | url: "+a+" | line: "+c+(s+=r.userAgent?" | user agent: "+r.userAgent:"");n.location="?action=debugFileOutput&file="+t+"&message="+e(l)}return u},o}}(window,window.navigator);