$(document).ready(function () {

    checkWidth();
    // $("body").resize(adjustNav);

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        console.log("smooothing");

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


});


$(window).resize(checkWidth);

function checkWidth() {

    let curWindowWidth = $("body").innerWidth();
    console.log(curWindowWidth);

    if (curWindowWidth <= 900) {

        $(".card1Img").attr("src", "images/Group 16.png");
        $(".poster").attr("src", "images/Group 18.png");
    }
    else {
        $(".card1Img").attr("src", "images/iPhone-X-on-Hand---PSD-Mockup-by-tranmautritam 1.png");
        $(".poster").attr("src", "images/Poster-Mockup-by-ZokiDesign.png");
    }




    // $("nav").css()


}