/*<!-- ------------------------------------------------------------------------------------------------------------------------------- --*/

// about content see more button content start
$(document).ready(function aboutusseemorebutton11000()
    {
        $(".aboutinvisible-content11000").hide();
        $(document).on('click',"#aboutbtn11000",function aboutusseemorebutton11000()
            {
                var morelessbutton11000=$(".aboutinvisible-content11000").is(":visible")?'Read more':'Read less';
                $(this).text(morelessbutton11000);
                $(this).parent(".aboutbox11000").find(".aboutinvisible-content11000").toggle();
                $(this).parent(".aboutbox11000").find(".aboutvisible-content11000").toggle();
            });
    });
// about content see more button content end

/*<!-- ------------------------------------------------------------------------------------------------------------------------------- --*/