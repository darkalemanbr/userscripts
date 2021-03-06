// ==UserScript==
// @name Firefox GTK+ dark themes fix
// @version 0.5
// @description Resets colors in all pages to match those of a bright theme and, hopefully, fix annoying inconsistencies caused by using darker GTK+ themes with Firefox.
// @namespace https://github.com/darkalemanbr/userscripts
// @grant none
// @include *
// @exclude about:*
// @downloadURL https://raw.githubusercontent.com/darkalemanbr/userscripts/master/firefox-gtk-dark-themes-fix/script.user.js
// @updateURL https://raw.githubusercontent.com/darkalemanbr/userscripts/master/firefox-gtk-dark-themes-fix/script.user.js
// @require https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.6/zepto.min.js
// ==/UserScript==

var css = '' +
    ':root, input, textarea, select { color: #000; background-color: #FFF; border-color: #CCC; }' +
    'button, input[type=button], input[type=submit] { background-color: #DDD; }'
;

$('link[rel=stylesheet]:first-of-type, style:first-of-type').before('<style type="text/css">' + css + '"</style>');
