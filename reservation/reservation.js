$( function() {

    var monthName = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre',];
    var dateFormat = "dd/mm/yy";
    var days = ['Di', 'Lu', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

        from = $( "#from" )
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1,
                dayNamesMin: days,
                changeYear: true,
                monthNamesShort: monthName,
                dateFormat: 'dd/mm/yy',
            })
            .on( "change", function() {
                to.datepicker( "option", "minDate", getDate( this ) );
            }),
        to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            dayNamesMin: days,
            changeYear: true,
            monthNamesShort: monthName,
            dateFormat: 'dd/mm/yy',
        })
            .on( "change", function() {
                from.datepicker( "option", "maxDate", getDate( this ) );
            });

    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }
        return date;
    }
} );



