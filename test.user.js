// ==UserScript==
// @name        no vostfr cpas bien
// @namespace   no vost fr
// @description zz
// @include     http://www.cpasbien.pw/*
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