$(document).ready(function() {

    $("#image_list a").each(function()
    {
            var swapimage = new Image();
            swapimage.src = $(this).attr("href");
    });

    $("#image_list a").click(function(evt)
    {
            var url = $(this).attr("href");
            var caption = $(this).attr("title");
            
            $("#image").fadeOut(1000, function(){
                    $("#image").attr("src", url).fadeIn(1000);
            });
            
            $("#caption").fadeOut(1000, function(){
                    $("#caption").text(caption).fadeIn(1000);
                    
                    $("#caption").css("font-size", "2.0em");
            })
            
            evt.preventDefault();
    });

$("li:first-child a").focus();
}); 