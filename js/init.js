(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
      
    /*Per questo sito si potrebe usare angular ma faccio prima a fare tutto a mano tanto sono due cose*/
    
    /*Becchiamoci il parent del dom dove mettere il contenuto modulare*/
      var cardsBody = $('#cardsBody')
      
    for (var i = 0; i < data.length; i++){
        cardsBody.append(
            "<li class=\"col s12 offset-m1 m5 offset-l1 l3 card\">"+
                "<div class=\"card-image waves-effect waves-block waves-light\">"+
                  "<img class=\"activator\" alt=\"Immagine Prodotto\" src=\"" + data[i].image + "\">"+
                "</div>"+
                "<div class=\"card-content\">"+
                 "<span class=\"card-title activator grey-text text-darken-4\">" + data[i].title + "</i></span>"+
                 "<div class=\"card-action\">"+
                  "<a class=\"waves-effect waves-light btn-flat grey-text text-darken-4 white\" href=\"tel:+393341398655\"><i class=\"material-icons left\">phone</i> contattami!</a>"+
                 "</div>"+
                "</div>"+
                "<div class=\"card-reveal\">"+
                  "<span class=\"card-title grey-text text-darken-4\">" + data[i].title + "</i></span>"+
                  "<p>" + data[i].description + "</p>"+
                "</div>"+
              "</li>");                         
    }
  }); // end of document ready
})(jQuery); // end of jQuery name space