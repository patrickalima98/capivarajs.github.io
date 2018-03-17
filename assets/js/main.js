$(document).ready(function () {

	if (window.particlesJS) {
		/* ===== Affix Sidebar ===== */
		/* Ref: http://getbootstrap.com/javascript/#affix-examples */
		particlesJS('animate-particles',

			{
				"particles": {
					"number": {
						"value": 80,
						"density": {
							"enable": true,
							"value_area": 800
						}
					},
					"color": {
						"value": "#ffffff"
					},
					"shape": {
						"type": "circle",
						"stroke": {
							"width": 0,
							"color": "#000000"
						},
						"polygon": {
							"nb_sides": 5
						},
						"image": {
							"src": "img/github.svg",
							"width": 100,
							"height": 100
						}
					},
					"opacity": {
						"value": 0.5,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1,
							"opacity_min": 0.1,
							"sync": false
						}
					},
					"size": {
						"value": 5,
						"random": true,
						"anim": {
							"enable": false,
							"speed": 40,
							"size_min": 0.1,
							"sync": false
						}
					},
					"line_linked": {
						"enable": true,
						"distance": 150,
						"color": "#ffffff",
						"opacity": 0.4,
						"width": 1
					},
					"move": {
						"enable": true,
						"speed": 6,
						"direction": "none",
						"random": false,
						"straight": false,
						"out_mode": "out",
						"attract": {
							"enable": false,
							"rotateX": 600,
							"rotateY": 1200
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": true,
							"mode": "repulse"
						},
						"onclick": {
							"enable": true,
							"mode": "push"
						},
						"resize": true
					},
					"modes": {
						"grab": {
							"distance": 400,
							"line_linked": {
								"opacity": 1
							}
						},
						"bubble": {
							"distance": 400,
							"size": 40,
							"duration": 2,
							"opacity": 8,
							"speed": 3
						},
						"repulse": {
							"distance": 200
						},
						"push": {
							"particles_nb": 4
						},
						"remove": {
							"particles_nb": 2
						}
					}
				},
				"retina_detect": true,
				"config_demo": {
					"hide_card": false,
					"background_color": "#b61924",
					"background_image": "",
					"background_position": "50% 50%",
					"background_repeat": "no-repeat",
					"background_size": "cover"
				}
			}

		);
	}

	$('#doc-menu').affix({
		offset: {
			top: ($('#header').outerHeight(true) + $('#doc-header').outerHeight(true)) + 45,
			bottom: ($('#footer').outerHeight(true) + $('#promo-block').outerHeight(true)) + 75
		}
	});

	/* Hack related to: https://github.com/twbs/bootstrap/issues/10236 */
	$(window).on('load resize', function () {
		$(window).trigger('scroll');
	});

	/* Activate scrollspy menu */
	$('body').scrollspy({ target: '#doc-nav', offset: 100 });

	/* Smooth scrolling */
	$('a.scrollto').on('click', function (e) {
		//store hash
		var target = this.hash;
		e.preventDefault();
		$('body').scrollTo(target, 800, { offset: 0, 'axis': 'y' });

	});


	/* ======= jQuery Responsive equal heights plugin ======= */
	/* Ref: https://github.com/liabru/jquery-match-height */

	$('#cards-wrapper .item-inner').matchHeight();
	$('#showcase .card').matchHeight();

	/* Bootstrap lightbox */
	/* Ref: http://ashleydw.github.io/lightbox/ */

	$(document).delegate('*[data-toggle="lightbox"]', 'click', function (e) {
		e.preventDefault();
		$(this).ekkoLightbox();
	});


});