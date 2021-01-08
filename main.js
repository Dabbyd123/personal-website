// Carousel 
const carousel = $(".carousel");
const iframe = document.getElementById('iframe');
const iButton = document.querySelector('#iButton');
let currdeg = 0;
let iframeShowing = false;


$(".next").on("click", {
    d: "n"
}, rotate);
$(".prev").on("click", {
    d: "p"
}, rotate);

function rotate(e) {
    if (e.data.d == "n") {
        currdeg = currdeg - 120;
    }
    if (e.data.d == "p") {
        currdeg = currdeg + 120;
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
        backSpeed: 60,
        typeSpeed: 110,
        showCursor: false
    })
})

// Add neon body class after animation ends
$('#projectsHeader').one('animationend webkitAnimationEnd mozAnimationEnd', function () {
    $('#projectsHeader').addClass('neon-body');
    $('#projectsHeader').removeClass('animated')
})

$('#aboutHeader').one('animationend webkitAnimationEnd mozAnimationEnd', function () {
    $('#aboutHeader').addClass('neon-body');
    $('#aboutHeader').removeClass('animated')
})

$('#contactHeader').one('animationend webkitAnimationEnd mozAnimationEnd', function () {
    $('#contactHeader').addClass('neon-body');
    $('#contactHeader').removeClass('animated')
})

$('#landingName').one('animationend webkitAnimationEnd mozAnimationEnd', function () {
    $('#landingName').addClass('neon-body');
    $('#landingName').removeClass('animated')
})

//opens project in iframe onclick
iframe.style.display = '';

iButton.addEventListener("click", function () {
    iframeShowing = true
    if (iframeShowing === false) {
        iframe.style.display = 'none'
    } else {
        iframe.style.display = 'block';
    };
    iframeShowing = !iframeShowing;
})









