$(document).ready(function(){

    checkWidth();
    // $("body").resize(adjustNav);



});

$(window).resize(checkWidth);

function checkWidth(){

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