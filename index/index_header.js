/* DEBUT HEADER + FOOTER*/

/* DEBUT HEADER */
// Function pour afficher le menu hamburger (sans jquery).
myHamburger = (function () {
    var myBool = true;
    var myHamSelect = document.querySelectorAll('.hamburger');
    for(let i = 0; i < myHamSelect.length; i++){
        myHamSelect[i].addEventListener('click', function () {
            if(myBool){
                var headerTop = $('header').offset().top;
                var hamburgerTop = $('.hamburger').offset().top;
                document.querySelector('.hamburger').classList.toggle('is-active');
                $('#myNav__hamburger').offset({top:headerTop});
                $('.hamburger').removeClass('position-relative');
                $('.hamburger').offset({top:headerTop + hamburgerTop});

                document.querySelector('#myNav__hamburger').style.display = 'block';
                $('header').removeClass('position-fixed');


                document.documentElement.style.overflow = 'hidden';
                myBool = false
            }else{

                document.querySelector('.hamburger').classList.toggle('is-active');
                document.querySelector('#myNav__hamburger').style.display = 'none';
                $('header').addClass('position-fixed');
                var headerTop2 = $('header').offset().top;
                $('.hamburger').addClass('position-relative');
                $('.hamburger').offset({top:headerTop2});
                var menuTop = $('.menuPos').offset().top;
                $('.menuPos').offset({top: menuTop + 16.117});
                document.documentElement.style.overflow = 'auto';
                myBool = true
            }
        })
    }
})();



myLanguage = (function () {
    var french = $('#fr');
    french.addClass('font-weight-bold');
    var english = $('#en');
    french.click(function () {
        if(english.hasClass('font-weight-bold')){
            english.removeClass('font-weight-bold');
        }
        french.addClass('font-weight-bold');
    });
    english.click(function () {
        if(french.hasClass('font-weight-bold')){
            french.removeClass('font-weight-bold');
        }
        english.addClass('font-weight-bold');
    })
})();


mySearch_hide = (function () {
    var search = $('#mySearch_hide');
    var glass = $('#glass_search');
    search.hide();
    glass.click(function () {
        search.slideToggle();
    })

})();





to_top_arrow = (function () {
    var toTop = $('#to_top_arrow');
    toTop.css({display:'none'});
    $(window).scroll(function () {
        if($(window).scrollTop() >= 1000){
            toTop.css({display: 'block'},);
        }
    });

    $(window).scroll(function () {
        if($(window).scrollTop() < 1000){
            toTop.css({display: 'none'});
        }
    });

})();
/*  -----------------------------------------------*/


autocompletion =( function() {

    var availableTags = [
        "Accueil",
        "Acces",
        "Actualites",
        "Avis",
        "CGV",
        "Contact",
        "Evenements",
        "Hebergement",
        "Chambres",
        "Newsletter",
        "Panier",
        "Recrutement",
        "Reservation",
        "Restaurant",
        "Spa"
    ];


    const searchArray = {
        'accueil': 'index.html',
        'acces': 'acces/acces.html',
        'actualites': 'actualites/actualites.html',
        'avis': 'avis/avis.html',
        'cgv': 'cgv/cgv.html',
        'contact': 'contact/contact.html',
        'evenements': 'evenements/evenements.html',
        'hebergement': 'hebergement/hebergement.html',
        'chambres': 'hebergement/hebergement.html',
        'newsletter': 'newsletter/newsletter.html',
        'panier': 'panier/panier.html',
        'recrutement': 'recrutement/recrutement.html',
        'reservation': 'reservation/reservation.html',
        'restaurant': 'restaurant/restaurant.html',
        'spa': 'spa/spa.html'}
    ;




    $("#searchBarre").autocomplete({
        source: availableTags,
    });

    $("#searchBarre2").autocomplete({
        source: availableTags,
    });


    $("#searchBarre" ).keydown(function (e) {
        if(e.keyCode === 13){
            var recherche = ($("#searchBarre" ).val()).toLowerCase();
            for(let i = 0; i< availableTags.length; i++){
                if(recherche === availableTags[i].toLocaleLowerCase()){
                    window.location.href = searchArray[recherche];
                }
            }
        }
    });

    $("#searchBarre2" ).keydown(function (e) {
        if(e.keyCode === 13){
            var recherche2 = ($("#searchBarre2" ).val()).toLowerCase();
            for(let i = 0; i< availableTags.length; i++){
                if(recherche2 === availableTags[i].toLocaleLowerCase()){
                    window.location.href = searchArray[recherche2];
                }
            }
        }
    });

})();











/* FIN HEADER */

/* DEBUT FOOTER */

/* FONCTION myToggle:
       Permet le hide automatique des nav du footer selon l'ecran du visiteur
       active toggle ou le desactive selon la width  */
myToggle = (function () {
    //fonction pour changer le sens de la fleche sur les h6 du footer
    function arrowSelector(selectedImg, selectedUl) {
        if(selectedUl.is(':hidden')){
            selectedImg.attr("src", "index/pictures/include/arrow_down.png")
        }else{
            selectedImg.attr("src", "index/pictures/include/arrow_up.png")
        }
    }

    //On hide si l'ecran est inferieur a 993px (lg de boostrap)
    if($(window).width() < 993){
        $('.myUl').hide();
    }
    //Ajout d'un eventListener sur la taille de l'écran pour hide ou show les nav du footer
    $(window).resize(function () {
        var myWindow = $(window).width();
        if(myWindow < 993){
            $('.myUl').hide();
        }else{
            $('.myUl').show();
        }
    });
    //initialisation en global de la selection des titre h6
    var myTitles = $('.myTitle');
    //Si l'écran est inférieur a 993px on ajoute un evenement click pour toggle les nav du footer
    myTitles.each(function () {
        $(this).click(function () {
            var myWidth = $(window).width();
            if(myWidth <= 993){
                myUl = $(this).next('ul');
                myImg = $(this).children('img');
                myUl.toggle();
                arrowSelector(myImg, myUl)
            }
        });
    });
})();
/* FIN FOOTER */
/* FIN DEBUT HEADER + FOOTER*/

