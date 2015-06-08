// ==UserScript==
// @name Firefox GTK+ dark themes fix
// @version 0.2
// @description Resets colors in all pages to match those of a bright theme and, hopefully, fix annoying inconsistencies caused by using darker GTK+ themes with Firefox.
// @namespace https://github.com/darkalemanbr/userscripts
// @include *
// @downloadURL https://raw.githubusercontent.com/darkalemanbr/userscripts/master/firefox-gtk-dark-themes-fix/script.user.js
// @updateURL https://raw.githubusercontent.com/darkalemanbr/userscripts/master/firefox-gtk-dark-themes-fix/script.user.js
// @require https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.6/zepto.min.js
// ==/UserScript==

var cssUrl = 'https://raw.githubusercontent.com/darkalemanbr/userscripts/master/firefox-gtk-dark-themes-fix/style.css?v=0.2'; // match version here to prevent caching

$.get(cssUrl, function (data) {
  $('link[rel=stylesheet]:first-of-type, style:first-of-type').before('<style type="text/css">' + data + '"</style>');
});
