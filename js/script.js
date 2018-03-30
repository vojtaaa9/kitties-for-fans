$(document).ready(function() {
    console.log("loaded");
    $(".menu-close").click( function(){
        var check = $("#menu-toggle").prop('checked', false);
    })
});