// ==UserScript==
// @name        no vostfr cpas bien
// @namespace   no vost fr
// @description zz
// @include     http://www.cpasbien.*
// @version     1
// @grant       none
// ==/UserScript==

$(function() { 
   $('').each(function() {
	      if ($(this).html().match(/vostfr/) ) {
         $(this).remove();
		 }
   }); 
});
