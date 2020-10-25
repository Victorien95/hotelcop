
/*
row1 = (function () {
    var row = $('#row1');
    var row_offset = row.offset();
    var row_offsetTop = parseInt(row_offset.top) - 900;
    row.css({right: -2000});
    row.css({opacity: 0});



    $(window).scroll(function () {
        if($(window).scrollTop() > row_offsetTop){
            row.animate({left: 0, opacity: 1}, 1800);
        }
    });
})();*/


row1 = (function () {
    var size = $(window).width();
    var row = $('#row1');
    var row_offset = row.offset();
    var row_offsetTop = parseInt(row_offset.top) - 1200;
    if ( size > 1000){
        row.css({opacity: 0});
        row.css({right: -2000});
        $(window).scroll(function () {
            if($(window).scrollTop() > row_offsetTop){
                row.animate({left: 0, opacity: 1}, 1800);
            }
        });
    }else{
        row.css({right: 0});
    }
})();




row2 = (function () {
    var row = $('#row2');
    var row_offset = row.offset();
    var row_offsetTop = parseInt(row_offset.top) - 800;
    row.css({left: -2000});
    row.css({opacity: 0});



    $(window).scroll(function () {
        if($(window).scrollTop() > row_offsetTop){
            row.animate({left: 0, opacity: 1}, 1800);
        }
    });
})();


row3 = (function () {
    var row = $('#row3');
    var row_offset = row.offset();
    var row_offsetTop = parseInt(row_offset.top) - 800 ;
    row.css({opacity: 0});


    $(window).scroll(function () {
        if($(window).scrollTop() > row_offsetTop){
            row.animate({opacity: 1}, 2000);
        }
    });
})();

row4 = (function () {
    var row = $('#row4');
    var row_offset = row.offset();
    var row_offsetTop = parseInt(row_offset.top) - 1200;
    row.css({right: -2000});
    row.css({opacity: 0});



    $(window).scroll(function () {
        if($(window).scrollTop() > row_offsetTop){
            row.animate({left: 0, opacity: 1}, 1800);
        }
    });
})();

row5 = (function () {
    var row = $('#row5');
    var row_offset = row.offset();
    var row_offsetTop = parseInt(row_offset.top) - 800;
    row.css({opacity: 0});


    $(window).scroll(function () {
        if($(window).scrollTop() > row_offsetTop){
            row.animate({opacity: 1}, 1800);
        }
    });
})();



row6 = (function () {
    var row = $('#row6');
    var row_offset = row.offset();
    var row_offsetTop = parseInt(row_offset.top) - 1000;
    row.css({left: -2000});
    row.css({opacity: 0});



    $(window).scroll(function () {
        if($(window).scrollTop() > row_offsetTop){
            row.animate({left: 0, opacity: 1}, 1500);
        }
    });
})();



row7 = (function () {
    var row = $('#row7');
    var row_offset = row.offset();
    var row_offsetTop = parseInt(row_offset.top) - 1000;
    row.css({right: -2000});
    row.css({opacity: 0});


    $(window).scroll(function () {
        if($(window).scrollTop() > row_offsetTop){
            row.animate({left: 0, opacity: 1}, 1500);
        }
    });
})();



row8 = (function () {
    var row = $('#last_row');
    var row_offset = row.offset();
    var row_offsetTop = parseInt(row_offset.top) - 800;
    row.css({opacity: 0});


    $(window).scroll(function () {
        if($(window).scrollTop() > row_offsetTop){
            row.animate({opacity: 1}, 1800);
        }
    });
})();

