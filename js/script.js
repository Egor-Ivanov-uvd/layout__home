$(document).ready(function() {
    $('.section-header__navbar-burger').click(function(event) {
        $('.section-header__navbar-burger,.section-header__navbar-nav').toggleClass('active');
        $('body').toggleClass('lock')
    });
});