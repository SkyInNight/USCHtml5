$(function () {
	$('.tlt').textillate({
		selector: '.texts',
		loop: true,
		minDisplayTime: 3000,
		initialDelay: 0,
		autoStart: true,
		inEffects: ['flash'],
		outEffects: [ 'rotateOut' ],
		in: {
		  effect: 'flash',
		  delayScale: 1.5,
		  delay: 50,
		  sync: false,
		  shuffle: true,
		  reverse: false,
		  callback: function () {}
		},
		out: {
		  effect: 'rotateOut',
		  delayScale: 1.5,
		  delay: 50,
		  sync: false,
		  shuffle: false,
		  reverse: false,
		  callback: function () {}
		},
		callback: function () {},
		type: 'char'
	});
	new previewSlider({
        container: '.preview-slider',
        content: true,
        arrowLeft: '.arrow-left',
        arrowRight: '.arrow-right',
        scale: 0.4,
        scrollSpeed: 4
    });
})
$('.typing__module').each(function (index) {
	var self = $(this),
		    _wrapper = $('.typed', self)[0],
		    optData = eval('(' + self.attr('data-options') + ')'),
		    optDefault = {
		stringsElement: self.find('.typed-strings')[0],
		typeSpeed: 50,
		backSpeed: 500,
		fadeOut: true,
		loop: true
	},
		    options = $.extend(optDefault, optData);
	var typed = new Typed(_wrapper, options);
});
