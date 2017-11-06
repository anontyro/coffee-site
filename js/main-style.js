$(document).ready(function(){
    console.log("set bindings");
    setBindings();
    coffeeAnimation('black-coffee');
    coffeeAnimation('iced-coffee');
    coffeeAnimation('mocha-coffee');
    coffeeAnimation('vanilla-coffee');    
    
    
});

$(window).scroll(()=>{
    let wScroll = $(this).scrollTop();
    let shrinkLogo = wScroll+10;
    console.log(wScroll);

    if(wScroll > ( $(".header-section").height() -50 ) ){
        
        $('.main-nav-bar-original').addClass("main-nav-bar-scroll");
    }else{
        $('.main-nav-bar-original').removeClass("main-nav-bar-scroll");          
    }

    $('.main-logo').css({
        
        'transform' : 'translate(0px, '+ wScroll /4+'%) scale('+1+')',

    });

    $('.brand-title').css({
        'transform' : 'translate(0px, '+ wScroll +'%) scale('+1+')',        
    });

})

const coffeeAnimation=(containerName)=>{
    $('.'+containerName).hover(()=>{
        $('.'+containerName+'-text').addClass("fadeInDown");
        $('.'+containerName+'-text').css("display", "inherit");
        $('.'+containerName+'-text').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $('.'+containerName+'-text').removeClass("fadeInDown");
            });
        
    },()=>{
        $('.'+containerName+'-text').addClass("fadeOutDown");
        $('.'+containerName+'-text').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $('.'+containerName+'-text').removeClass("fadeOutDown");
            $('.'+containerName+'-text').css("display", "none");
        
            });
    
    })
}



setBindings=()=>{
	$("li a").click(function(e){
		e.preventDefault();
		let sectionID = e.currentTarget.id + "Section";

        $("html,body").animate({
			scrollTop: $("#"+sectionID).offset().top - 70
        },1000)

        // $("html,body").animate({ scrollTop: 0 }, "slow");
	})
}