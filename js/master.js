$('body').scrollspy({target: ".navbar", offset: 50});

$("#collapsible-navbar a").on('click',  function(event) {
  $("#hamburger-button").click();

  if (this.hash !== "") {

    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 600, () => {

      window.location.hash = hash;
    });

  }
});
