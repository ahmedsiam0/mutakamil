$(document).ready(function () {
    "use strict";
    /**************/
    /*My Functions*/
    /**************/
    function as(a, c) {
        $(c).hide();
        $(a).click(function () {
            var e;
            for(e = 0; e < $(".MenuItem").length; e++){
                if(".Menu" + (e + 1) != c){
                    $(".Menu" + (e + 1)).hide();
                }
            }
        $(c).slideToggle();
        });
    }
    function blockFun(d,t){
        var g;
        var y;
        var space = "&nbsp;&nbsp;";
        for(g=0;g<d.length;g++){
            var textblock = d[g].innerHTML;
            if(t==1){d[g].innerHTML = space+textblock;}
            else if(t==2){d[g].innerHTML = space+space+textblock;}
            else if(t==3){d[g].innerHTML = space+space+space+textblock;}
            else if(t==4){d[g].innerHTML = space+space+space+space+textblock;}
        }
    }
    /**************/
    /***My Loops***/
    /**************/
    var Blocks1 = document.getElementsByClassName("Block1");
    var Blocks2 = document.getElementsByClassName("Block2");
    var Blocks3 = document.getElementsByClassName("Block3");
    var Blocks4 = document.getElementsByClassName("Block4");
    blockFun(Blocks1,1);
    blockFun(Blocks2,2);
    blockFun(Blocks3,3);
    blockFun(Blocks4,4);
    /*var text = Blocks1[1].innerHTML;
    Blocks1[1].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;"+text;*/
    var q;
    for (q = 0; q < $(".MenuItem").length; q++) {
        as(".MenuToggle" + (q + 1), ".Menu" + (q + 1));
    }
    /***************/
    /***My Events***/
    /***************/
    $(".top-button").hide();
    $(".top-button").click(function() {
        $('html, body').animate({scrollTop: 0},500);
    });
    var topbutton = $('.top-button');
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 400) {
            if (! topbutton.is(':visible')) {
                topbutton.fadeIn(200);
            }
        } else {
            if (topbutton.is(':visible')) {
                topbutton.fadeOut(200);
            }
        }
    });
    $(".MenuIMG").click(function () {
        $(".header").slideToggle();
    });
    $(window).on('resize', function () {
        if($(window).width() >= 750 && $(".header").hide()){
           $(".header").css("display","flex");
        }
        else{
           $(".header").css("display","block");
           $(".header").css("display","none");
        }
    });
    /***************************/
    /***My Lesson Menu Events***/
    /***************************/
    $(".LessonMenuContent").width("0px");
    $(".LessonMenu-button").click(function () {
        if($(".LessonMenuContent").width() == 0){
            $(".LessonMenuContent").animate({width:"200px"});
            $(".LessonTitle,.LessonMenuLink").show();
            $(".LessonMenu-button").animate({right:"200px"});
            $(".LessonMenu-button").attr("class","LessonMenu-button fa fa-chevron-right");
        }
        else{
            $(".LessonTitle,.LessonMenuLink").hide();
            $(".LessonMenu-button").animate({right:"0px"});
            $(".LessonMenuContent").animate({width:"0px"});
            $(".LessonMenu-button").attr("class","LessonMenu-button fa fa-chevron-left");
        }
    });
});
