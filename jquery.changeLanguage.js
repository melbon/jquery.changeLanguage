/*
 * March 2014
 * changeLanguage 1.0.0
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * GPL license
 */

var languages = {};
$.fn.changeLanguage = function(options) {

    var settings = $.extend({
        language: "bg"
    }, options );

    $(this).keyup(function() {
        var match = /[a-zA-Z-\`\[\]\\\}\{\|]/.exec($(this).val());
        if (match) languages[settings.language]($(this));
    });

    languages.en = function(input) {}
    languages.bg = function(input) {
        input.val(input.val().replace(/a/g, "а"));
        input.val(input.val().replace(/b/g, "б"));
        input.val(input.val().replace(/w/g, "в"));
        input.val(input.val().replace(/v/g, "ж"));
        input.val(input.val().replace(/g/g, "г"));
        input.val(input.val().replace(/d/g, "д"));
        input.val(input.val().replace(/e/g, "е"));
        input.val(input.val().replace(/z/g, "з"));
        input.val(input.val().replace(/i/g, "и"));
        input.val(input.val().replace(/j/g, "й"));
        input.val(input.val().replace(/k/g, "к"));
        input.val(input.val().replace(/l/g, "л"));
        input.val(input.val().replace(/m/g, "м"));
        input.val(input.val().replace(/n/g, "н"));
        input.val(input.val().replace(/o/g, "о"));
        input.val(input.val().replace(/p/g, "п"));
        input.val(input.val().replace(/r/g, "р"));
        input.val(input.val().replace(/s/g, "с"));
        input.val(input.val().replace(/t/g, "т"));
        input.val(input.val().replace(/u/g, "у"));
        input.val(input.val().replace(/f/g, "ф"));
        input.val(input.val().replace(/h/g, "х"));
        input.val(input.val().replace(/c/g, "ц"));
        input.val(input.val().replace(/\`/g, "ч"));
        input.val(input.val().replace(/\[/g, "ш"));
        input.val(input.val().replace(/\]/g, "щ"));
        input.val(input.val().replace(/y/g, "ъ"));
        input.val(input.val().replace(/x/g, "ь"));
        input.val(input.val().replace(/\\/g, "ю"));
        input.val(input.val().replace(/q/g, "я"));
        input.val(input.val().replace(/A/g, "А"));
        input.val(input.val().replace(/B/g, "Б"));
        input.val(input.val().replace(/W/g, "В"));
        input.val(input.val().replace(/G/g, "Г"));
        input.val(input.val().replace(/D/g, "Д"));
        input.val(input.val().replace(/E/g, "Е"));
        input.val(input.val().replace(/V/g, "Ж"));
        input.val(input.val().replace(/Z/g, "З"));
        input.val(input.val().replace(/I/g, "И"));
        input.val(input.val().replace(/J/g, "Й"));
        input.val(input.val().replace(/K/g, "К"));
        input.val(input.val().replace(/L/g, "Л"));
        input.val(input.val().replace(/M/g, "М"));
        input.val(input.val().replace(/N/g, "Н"));
        input.val(input.val().replace(/O/g, "О"));
        input.val(input.val().replace(/P/g, "П"));
        input.val(input.val().replace(/R/g, "Р"));
        input.val(input.val().replace(/S/g, "С"));
        input.val(input.val().replace(/T/g, "Т"));
        input.val(input.val().replace(/U/g, "У"));
        input.val(input.val().replace(/F/g, "Ф"));
        input.val(input.val().replace(/H/g, "Х"));
        input.val(input.val().replace(/C/g, "Ц"));
        input.val(input.val().replace(/~/g, "Ч"));
        input.val(input.val().replace(/\{/g, "Ш"));
        input.val(input.val().replace(/\}/g, "Щ"));
        input.val(input.val().replace(/Y/g, "Ъ"));
        input.val(input.val().replace(/X/g, "ѝ"));
        input.val(input.val().replace(/\|/g, "Ю"));
        input.val(input.val().replace(/Q/g, "Я"));
    }
}