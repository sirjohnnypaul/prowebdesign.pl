
$("#pricing").click(function() {
    $('html, body').animate({
        scrollTop: $('#contactform').offset().top
    }, 2000, 'easeOutExpo');

});


$("#ouroffer").click(function() {
    $('html, body').animate({
        scrollTop: $('#website-photos').offset().top
    }, 2000, 'easeOutExpo');

});

$("#websites").click(function() {
    $('html, body').animate({
        scrollTop: $('#website-photos').offset().top
    }, 2000, 'easeOutExpo');

});


$("#logographics").click(function() {
    $('html, body').animate({
        scrollTop: $('#logo-section').offset().top
    }, 2000, 'easeOutExpo');

});

$("#marketingmaterials").click(function() {
    $('html, body').animate({
        scrollTop: $('#logo-section').offset().top
    }, 2000, 'easeOutExpo');

});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $('#contactform').offset().top
    }, 2000, 'easeOutExpo');

});

$(".button-see-our-offer").click(function() {
    $('html, body').animate({
        scrollTop: $('#website-photos').offset().top
    }, 2000, 'easeOutExpo');

});

$(".button-make-an-order").click(function() {
    $('html, body').animate({
        scrollTop: $('#contactform').offset().top
    }, 2000, 'easeOutExpo');

});

$(".button-see-more").click(function() {
    $('html, body').animate({
        scrollTop: $('#contactform').offset().top
    }, 2000, 'easeOutExpo');

});

$(".button-see-more1").click(function() {
    $('html, body').animate({
        scrollTop: $('#contactform').offset().top
    }, 2000, 'easeOutExpo');

});

$(".button-see-more2").click(function() {
    $('html, body').animate({
        scrollTop: $('#contactform').offset().top
    }, 2000, 'easeOutExpo');

});

$(".button-see-more3").click(function() {
    $('html, body').animate({
        scrollTop: $('#contactform').offset().top
    }, 2000, 'easeOutExpo');

});

$(".button-see-more4").click(function() {
    $('html, body').animate({
        scrollTop: $('#contactform').offset().top
    }, 2000, 'easeOutExpo');

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Wrap every letter in a span
$('.website-first-section h1').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.website-first-section h1 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 3500,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  }).add({
    targets: '.website-first-section h1 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 3500,
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  });




  // Wrap every letter in a span
$('.center-section-h1 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0,$(".center-section-h1 .letters").width()],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.center-section-h1 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function(el, i) {
      return 34 * (i+1)
    }
  }).add({
    targets: '.center-section-h1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });





$("#button-offer").mouseenter(function(){
	$(this)
		.velocity( { translateY: "-10px", backgroundColor: "#FFEB3B" }, 400 );
});

$("#button-offer").mouseleave(function(){
	$(this)
		.velocity( { translateY: "0", backgroundColor: "#FFC107" }, 200 );
});

$("#button-order").mouseenter(function(){
	$(this)
		.velocity( { translateY: "-10px", backgroundColor: "#FFEB3B" }, 400 );
});

$("#button-order").mouseleave(function(){
	$(this)
		.velocity( { translateY: "0", backgroundColor: "#FFC107" }, 200 );
});
