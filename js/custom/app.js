var isExpanding = true;
var clickedNavbar;

$(document).ready(function () {
    /* toggle examples button on GeoWords>Query*/
    $(".examples").click(function () {
		debugger;
        $("#panel").slideToggle("slow");

        if (isExpanding) {
            $(".examples span").removeClass("glyphicon-chevron-down");
            $(".examples span").addClass("glyphicon-chevron-up")
            isExpanding = false;
        }
        else {
            $(".examples span").removeClass("glyphicon-chevron-up")
            $(".examples span").addClass("glyphicon-chevron-down");
            isExpanding = true;
        }
    });



});