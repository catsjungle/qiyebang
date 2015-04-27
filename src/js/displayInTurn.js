/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-22 21:32:17
 * @version $Id$
 */
$.playInTrun = function(play, btn, option){
    option.time = option.time || 5000; 
    var current = 0;
    var timer = null;
    function playFn(){
        timer = setInterval(function(){
            current++;
            if(current == 3){
                current = 0;
            }
            for(var i=0; i<btn.length; i++){
                (function(index){
                    btn.removeClass('current');
                    play.css('opacity','0');
                })(i);
            }
            btn.eq(current).addClass('current');
            play.eq(current).animate({'opacity':1},500);
            
            
        }, option.time);
    }
    playFn();

    btn.on('click',function(){
        // console.log($(this).index());
        clearInterval(timer);

        current = $(this).index();
        btn.removeClass('current');
        play.css('opacity', '0');
        $(this).addClass('current');
        play.eq(current).animate({'opacity':1},500);
        playFn();
    });

    btn.on('mouseover', function(){
        clearInterval(timer);
    });
    btn.on('mouseout', function(){
        clearInterval(timer);
        playFn();
    });
}