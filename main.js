// Carousel 
const carousel = $(".carousel");
let currdeg = 0;

$(".next").on("click", {
    d: "n"
}, rotate);
$(".prev").on("click", {
    d: "p"
}, rotate);

function rotate(e) {
    if (e.data.d == "n") {
        currdeg = currdeg - 60;
    }
    if (e.data.d == "p") {
        currdeg = currdeg + 60;
    }
    carousel.css({
        "-webkit-transform": "rotateY(" + currdeg + "deg)",
        "-moz-transform": "rotateY(" + currdeg + "deg)",
        "-o-transform": "rotateY(" + currdeg + "deg)",
        "transform": "rotateY(" + currdeg + "deg)"
    });
}

// Typewriter effect 
$('#pills-about-tab').on('click', function () {
    const typed = new Typed('#typed', {
        strings: ["soccer enthusiast", "musician", "web ^1000 developer"],
        backSpeed: 40,
        typeSpeed: 80,
        showCursor: false
    })
})




