/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

        // FitVid Video Width Target
        $.getScript("/assets/js/jquery.fitvids.js", function(){
            $(".post-content").fitVids();

        });
		$("#search").ghostHunter({
              results: "#search-results",
			  zeroResultsInfo : false,
			  result_template 	: "<a class='search-result-entry' href='{{link}}'><h2>{{title}}</h2><h4>{{pubDate}}</h4></a>",
			  info_template   : "<p>共找到{{amount}}篇文章</p>",
			  onKeyUp         : false
        });

    });

}(jQuery));
