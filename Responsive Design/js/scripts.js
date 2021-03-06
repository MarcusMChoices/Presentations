$(document).ready(function () {

    $('body').scrollspy({ target: '#sidenav' });

    $("#sidenav ul li a[href^='#'], .internallink").on('click', function (e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500, function () {
            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });

    });

    setTimeout(function () {
        $("#sidenav li").removeClass("active");
        $("#sidenav li:first-child").addClass("active");
    }, 200);

});