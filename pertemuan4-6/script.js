$(document).ready(function(){
    // Efek Hide
    $('#hide').click(function(){
        $('#kotak').hide(1000);
    });

    // Efek Show
    $('#show').click(function(){
        $('#kotak').show(2000);
    });

    // Efek Fade Out
    $('#fadeOut').click(function(){
        $('.box1').fadeOut();
        $('.box2').fadeOut(1000);
        $('.box3').fadeOut(3000);
    });

    // Efek Fade In
    $('#fadeIn').click(function(){
        $('.box1').fadeIn();
        $('.box2').fadeIn(2000);
        $('.box3').fadeIn(4000);
    });

    // Efek Toggle
    $('#fadeToggle').click(function(){
        $('.box1').fadeToggle();
        $('.box2').fadeToggle(2000);
        $('.box3').fadeToggle(4000);
    });

    // Efek To
    $('#fadeTo').click(function(){
        $('.box1').fadeTo("slow", 0.2);
        $('.box2').fadeTo("slow", 0.3);
        $('.box3').fadeTo("slow", 0.4);
    });

    // Efek SlideUp
    $('#slideUp').hover(function(){
        $('#slide').slideUp("slow");
    });

    // Efek SlideDown
    $('#slideDown').hover(function(){
        $('#slide').slideDown(1000);
    });

    // Efek SlideToggle
    $('#slideToggle').click(function(){
        $('#slide').slideToggle(1000);
    });

    // Efek Animate
    $('#kiri').click(function(){
        $('#animate-box').animate({'left':"-=50px"}, "slow");
    });
    $('#kanan').click(function(){
        $('#animate-box').animate({'right':"-=50px"}, "slow");
    });

    // Efek ClearQueue
    $('#start').click(function(){
        $('#clearQueue-Box').animate({'left':"+=500px"}, 5000);
        $('#clearQueue-Box').queue(function(){
        });
    });

    $('#stop').click(function(){
        $('#clearQueue-Box').clearQueue();
        $('#clearQueue-Box').stop();
    });

    // Efek Delay
    $('#delay').click(function(){
        $('#kotak-satu').slideUp(4000).delay(6000).fadeIn(4000);
        $('#kotak-dua').slideUp(4000).fadeIn(4000);
    });
});