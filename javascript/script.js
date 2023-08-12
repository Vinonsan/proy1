// /*<!-- ------------------------------------------------------------------------------------------------------------------------------- --

// sidebar javascript start
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});
// sidebar javascript end

/*<!-- ------------------------------------------------------------------------------------------------------------------------------- --*/

// home content javascript start
var typed = new Typed(".home-profile-text",{
    strings: ["Frontend Developer","YouTuber","Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});
// home content javascript end

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