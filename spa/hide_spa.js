cardHide = (function () {
    var myDeck = $('#myDeck-hide');
    myDeck.hide();
    $('#price_button').click(function () {
        $(myDeck).toggle();
        if(myDeck.is(':hidden')){
            $('#price_button').text('Voir les tarifs de soins')
        }else{
            $('#price_button').text('Masquer les tarifs de soins')
        }
        console.log('caca')
    })
})();








row0 = (function () {
    var row = $('.row0');
    var row_offset = row.offset();
    var row_offsetTop = parseInt(row_offset.top) - 800 ;
    row.css({opacity: 0.5});


    $(document).ready(function () {
        if($(window).scrollTop() > row_offsetTop){
            row.animate({opacity: 1}, 2000);
        }
    });
})();





row1 = (function () {
    var row = $('#row1');
    var row_offset = row.offset();
    var row_offsetTop = parseInt(row_offset.top) - 800 ;
    row.css({opacity: 0});


    $(window).scroll(function () {
        if($(window).scrollTop() > row_offsetTop){
            row.animate({opacity: 1}, 2000);
        }
    });
})();

row2 = (function () {
    var row = $('#row2');
    var row_offset = row.offset();
    var row_offsetTop = parseInt(row_offset.top) - 800 ;
    row.css({opacity: 0});


    $(window).scroll(function () {
        if($(window).scrollTop() > row_offsetTop){
            row.animate({opacity: 0.9}, 2000);
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
    var row_offsetTop = parseInt(row_offset.top) - 800 ;
    row.css({opacity: 0});


    $(window).scroll(function () {
        if($(window).scrollTop() > row_offsetTop){
            row.animate({opacity: 1}, 2000);
        }
    });
})();


row5 = (function () {
    var row = $('#row5');
    var row_offset = row.offset();
    var row_offsetTop = parseInt(row_offset.top) - 800 ;
    row.css({opacity: 0});


    $(window).scroll(function () {
        if($(window).scrollTop() > row_offsetTop){
            row.animate({opacity: 1}, 2000);
        }
    });
})();
