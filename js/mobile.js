/* $(function(){

}) */
$(function(){
    function isMobile() {
        if (navigator.userAgent.indexOf('Mobile') != -1){
            return true;
        }else {
            return false;
        }
    }
    if(!isMobile()){
        var gnbOpen = false;
        $('.gnb > ul > li').mouseenter(function(){
            $(this).find('.menu_sec').addClass('open');
            gnbOpen =  true;
        }).mouseleave(function(){
            $('.gnb > ul > li').find('.menu_sec').removeClass('open');
            gnbOpen = false;
        });
        
    }else{
        $('.m_btn').on('click', function(){
            $('.gnb').toggleClass('open');
            $('.m_btn button').toggleClass('cross');
        });
        $('.gnb > ul > li').on('click', function(){
            
            $(this).find('.menu_sec').toggleClass('open');
            $('.gnb > ul > li').not(this).find('.menu_sec').removeClass('open');
        });
        $('.m_btn').on('click', function(){
            $('.menu_sec').removeClass('open');
        })
    }
}); 
