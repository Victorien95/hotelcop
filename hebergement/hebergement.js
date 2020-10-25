


roomHide = (function () {
    $('.room_container').hide();
})();





roomDeluxe= (function () {
    var info = $('#deluxe_container');
    var deluxe = $('#deluxe_button');
    deluxe.click(function () {
        info.toggle();
        if(info.is(':hidden')){
            deluxe.text('Voir les details');
        }else{
            deluxe.text('Masquer les details');
        }
    })
})();

roomStandard = (function () {
    var info = $('#standard_container');
    var standard = $('#standard_button');
    standard.click(function () {
        info.toggle();
        if(info.is(':hidden')){
            standard.text('Voir les details');
        }else{
            standard.text('Masquer les details');
        }
    })
})();



roomConfort = (function () {
    var info = $('#confort_container');
    var confort = $('#confort_button');
    confort.click(function () {
        info.toggle();
        if(info.is(':hidden')){
            confort.text('Voir les details');
        }else{
            confort.text('Masquer les details');
        }
    })
})();


roomSuite = (function () {
    var info = $('#suite_container');
    var suite = $('#suite_button');
    suite.click(function () {
        info.toggle();
        if(info.is(':hidden')){
            suite.text('Voir les details');
        }else{
            suite.text('Masquer les details');
        }
    })
})();
