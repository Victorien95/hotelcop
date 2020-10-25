


spanInit = (function () {
    $('.warning_span').css({display:'none'})
})();

sexe = (function () {
    var sexe = $('input[name=sexe]');
    var sexeSpan = $('#sexeSpan');
    sexeSpan.css({display:'inline-block'});
    sexe.change(function () {
        if(sexe.is(':checked')){
            sexeSpan.css({display:'none'});
        }else{
            sexeSpan.css({display:'inline-block'});
        }
    });
    $('body').ready(function () {
        if(sexe.is(':checked')){
            sexeSpan.css({display:'none'});
        }else{
            sexeSpan.css({display:'inline-block'});
        }
    })
})();



nom = (function () {
    var name = $('#input_nom');
    var nameSPan = $('#nameSpan');
    name.keyup(function () {
        if(name.val().length >= 2){
            nameSPan.css({display: 'none'});
            name.removeClass('incorrecte');
            name.addClass('correcte');
        }else{
            nameSPan.css({display: 'inline-block'});
            name.removeClass('correcte');
            name.addClass('incorrecte');
        }
    });
    name.blur(function () {
        if(name.val().length >= 2){
            nameSPan.css({display: 'none'});
            name.removeClass('incorrecte');
            name.addClass('correcte');
        }else{
            nameSPan.css({display: 'inline-block'});
            name.removeClass('correcte');
            name.addClass('incorrecte');
        }
    })
})();

prenom = (function () {
    var prenom = $('#input_prenom');
    var prenomSPan = $('#prenomSpan');
    prenom.keyup(function () {
        if(prenom.val().length >= 2){
            prenomSPan.css({display: 'none'});
            prenom.removeClass('incorrecte');
            prenom.addClass('correcte');
        }else{
            prenomSPan.css({display: 'inline-block'});
            prenom.removeClass('correcte');
            prenom.addClass('incorrecte');
        }
    });
    prenom.blur(function () {
        if(prenom.val().length >= 2){
            prenomSPan.css({display: 'none'});
            prenom.removeClass('incorrecte');
            prenom.addClass('correcte');
        }else{
            prenomSPan.css({display: 'inline-block'});
            prenom.removeClass('correcte');
            prenom.addClass('incorrecte');
        }
    })
})();


email = (function () {
    var email = $('#input_email');
    var emailSpan = $('#emailSpan');
    email.keyup(function () {
        if(email.val().length >=6){
            emailSpan.css({display: 'none'});
            email.removeClass('incorrecte');
            email.addClass('correcte');
        }else {
            emailSpan.css({display: 'inline-block'});
            email.removeClass('correcte');
            email.addClass('incorrecte');
        }
    });
    email.blur(function () {
        if(email.val().length >=6){
            emailSpan.css({display: 'none'});
            email.removeClass('incorrecte');
            email.addClass('correcte');
        }else {
            emailSpan.css({display: 'inline-block'});
            email.removeClass('correcte');
            email.addClass('incorrecte');
        }
    })
})();

tel = (function () {
    var tel = $('#input_tel');
    var telSpan = $('#telSpan');
    tel.keyup(function () {
        if($.trim(tel.val().length) >= 10 && $.isNumeric(tel.val())){
            telSpan.css({display: 'none'});
            tel.removeClass('incorrecte');
            tel.addClass('correcte');
        }else {
            telSpan.css({display: 'inline-block'});
            tel.removeClass('correcte');
            tel.addClass('incorrecte');
        }
    });
    tel.blur(function () {
        if($.trim(tel.val().length) >= 10 && $.isNumeric(tel.val())){
            telSpan.css({display: 'none'});
            tel.removeClass('incorrecte');
            tel.addClass('correcte');
        }else {
            telSpan.css({display: 'inline-block'});
            tel.removeClass('correcte');
            tel.addClass('incorrecte');
        }
    })
})();




check = (function () {
    var check = true;
    $('#myForm').submit(function (e) {
        var spanCheck = $('.warning_span');
        $('.warning_span').each(function () {
            if($(this).is(':visible')){
                check = false;
            }
        });
        if(!check){
            e.preventDefault();
            return false;
        }
    })
})();