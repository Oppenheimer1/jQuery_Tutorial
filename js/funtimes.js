
/*This code auto hides and then shows the element*/
$(document).ready(function(){
	$(".target").hide(1000, "linear").show(1000, "linear");
});

/*This code hides the element*/
$(document).ready(function(){
    $(".target2a").click(function(){
        $(".target2").hide(1000, "linear");
    });
});

/*This code shows the element*/
$(document).ready(function(){
    $(".target3a").click(function(){
        $(".target3").show(1000, "linear");
    });
});

/*This code hides or shows the element whenever you click toggle*/
$(document).ready(function(){
    $(".target4a").click(function(){
        $(".target4").toggle(1000, "linear");
    });
});

/*This code auto fades out and then fades in the element*/
$(document).ready(function(){
$(".target5").fadeOut(1000, "linear").fadeIn(1000, "linear");
});

/*This code fades out the element*/
$(document).ready(function(){
    $(".target6a").click(function(){
        $(".target6").fadeOut(1000, "linear");
    });
});

/*This code fades in the element*/
$(document).ready(function(){
    $(".target7a").click(function(){
        $(".target7").fadeIn(1000, "linear");
    });
});

/*This code fades in or fades out the element the element whenever you click toggle*/
$(document).ready(function(){
    $(".target8a").click(function(){
        $(".target8").fadeToggle(1000, "linear");
    });
});

/*This code fades out the element to a certain opacity*/
$(document).ready(function(){
    $(".target9a").click(function(){
        $(".target9").fadeTo(1000, 0.4);
    });
});

/*This code will cause the panel to slide down and then slide up*/
$(document).ready(function(){
    $(".slide1").slideDown(1000,"linear").slideUp(1000,"linear"); 
});

/*This code will cause the panel to slide down when clicked*/
$(document).ready(function(){
    $(".up2").click(function(){
        $(".slide2").slideDown(1000,"linear");
    });
});

/*This code will cause the panel to slide down when clicked*/
$(document).ready(function(){
    $(".up3").click(function(){
        $(".slide3").slideUp(1000,"linear");
    });
});

/*This code will cause the panel to toggle between sliding down or sliding up*/
$(document).ready(function(){
    $(".up4").click(function(){
        $(".slide4").slideToggle(1000,"linear");
    });
});

/*This code causes the box to animate by sliding from the left to the right*/
$(document).ready(function(){
        $(".animate1").animate({left: '250px'});
});

/*This code causes the box to animate by sliding from the left to the right when you click*/
$(document).ready(function(){
    $(".animate2a").click(function(){
        $(".animate2").animate({left: '250px'});
    });
});

/*This code causes the box to animate by making it bigger when you click*/
$(document).ready(function(){
    $(".animate3a").click(function(){
        $(".animate3").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
});

/*This code causes the box to animate by making it bigger or smaller when you click toggle*/
$(document).ready(function(){
    $(".animate4a").click(function(){
        $(".animate4").animate({
            height: 'toggle',
            width: 'toggle'
        });
    });
});

/*This code causes the box to animate in each step one by one*/
$(document).ready(function(){
    $(".animate5a").click(function(){
        var funtimes = $(".animate5");
        funtimes.animate({height: '300px', opacity: '0.4'}, "slow");
        funtimes.animate({width: '300px', opacity: '0.8'}, "slow");
        funtimes.animate({height: '100px', opacity: '0.4'}, "slow");
        funtimes.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});

/*This code causes the box and the font to animate when you click*/
$(document).ready(function(){
    $(".animate6a").click(function(){
        var funtimes = $(".animate6");  
        funtimes.animate({left: '100px'}, "slow");
        funtimes.animate({fontSize: '3em'}, "slow");
    });
});

/*This code causes the bar to slide down and stop when you click stop*/
$(document).ready(function(){
    $(".animate7a").click(function(){
        $(".animate7").slideDown(5000);
    });
    $(".stop").click(function(){
        $(".animate7").stop();
    });
});