var modal = document.getElementById("modal");
var openModal = document.getElementById("modalBtn");
var closeModal = document.getElementsByClassName("closeBtn")[0];
var mattiasBtn = document.getElementsByClassName("button__mattias")[0];
var mattiasBtn2 = document.getElementsByClassName("button__mattias")[1];
var kristianBtn = document.getElementsByClassName("button__kristian")[0];
var kristianBtn2 = document.getElementsByClassName("button__kristian")[1];
var mariaBtn = document.getElementsByClassName("button__marie")[0];
var mariaBtn2 = document.getElementsByClassName("button__marie")[1];
var martenBtn = document.getElementsByClassName("button__Marten")[0];
var martenBtn2 = document.getElementsByClassName("button__Marten")[1];
var karlsonBtn = document.getElementsByClassName("button__Karlson")[0];
var karlsonBtn2 = document.getElementsByClassName("button__Karlson")[1];
var section1 = document.getElementById("section__1");
var mainContent = document.getElementById("mainContent");
var loeLisaks = document.getElementById("loeLisaks");
var buttons = document.getElementsByClassName("button");
var video = document.getElementById("video");
var videoSource = document.getElementById("videoSource");


for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}





mattiasBtn.addEventListener('click', function () {
	video.src = "images/mattias.mp4";
	section1.style.backgroundImage = 'url("images/Mattias.png")';
	video.load();
});

mattiasBtn2.addEventListener('click', function () {
	video.src = "images/mattias.mp4";
	video.load();
	video.play();
	
});

kristianBtn.addEventListener('click', function () {
	video.src = "images/kristjan.mp4";
	$(section__1).css('background-image', 'url("images/Kristjan.png")');
	video.load();
});
kristianBtn2.addEventListener('click', function () {
	video.src = "images/kristjan.mp4";
	video.load();
	video.play();
});



mariaBtn.addEventListener('click', function () {
	video.src = "images/anna.mp4";
	
	section1.style.backgroundImage = 'url("images/AnnaMaria.png")';
	// $("#section__1").css('background-image', 'url("images/AnnaMaria.png")').fadeIn(10000);
	video.load();
	
});
mariaBtn2.addEventListener('click', function () {
	video.src = "images/anna.mp4";
	video.load();
	video.play();
});

martenBtn.addEventListener('click', function () {
	video.src = "images/marten.mp4";
	section1.style.backgroundImage = 'url("images/Marten.png")';
	video.load();

});

martenBtn2.addEventListener('click', function () {
	video.src = "images/marten.mp4";
	video.load();
	video.play();
	
});

openModal.addEventListener('click',  function() {
	
	modal.style.display = 'block';
	video.play();
	loeLisaks.style.display = 'none';
});


closeModal.addEventListener('click', function () {
	modal.style.display = 'none';
	video.pause();
});

window.addEventListener('click', function (a) {
	if (a.target === modal) {
		modal.style.display = 'none';
	}
});
// JQuery
$(document).ready(function () {
	
	$(window).scroll(function () {
		parallax();
	});
	
	function parallax() {
		var wScroll = $(window).scrollTop();
		$("#section__1").css("background-position", "center " + (wScroll*.9) + 'px');
	}
	
	
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > -10 ) {
			$(".section1LogoForDesktop").addClass("thingsBeFixedLogo");
		}
		if (scroll >= 280) {
			$(".heading__number-desktop").addClass('thingsBeFixed');
			$(".heading__number-desktop-span").addClass('thingsBeFixed-span');
			
			
		} else {
			$('.heading__number-desktop').removeClass('thingsBeFixed');
			$('.heading__number-desktop-span').removeClass('thingsBeFixed-span');
			$(".section1LogoForDesktop").removeClass("thingsBeFixedLogo");
			
		}
	});
	
	
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});

});