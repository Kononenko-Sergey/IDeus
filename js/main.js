$( function() {
	const imageSrcList = [
		'image/logo-2.png',
		'image/karus01.png',
		'image/karus02.png',
		'image/foto-m.jpg'
	];

    const slider = $( "#slider-range-max" ).slider({
      range: "max",
      min: 0,
      max: 3,
      value: 0,
      slide: function( event, ui ) {
      	$("#img-container").attr("src", imageSrcList[ui.value]);
      }
    });

    $(".label-container").click(function(event) {
    	const index = event.currentTarget.dataset.index;

    	slide(index);
    });

    function slide(index) {
    	slider.slider("value", index);

      	$("#img-container").attr("src", imageSrcList[index]);
    }
  });


$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }   

    var accordion = new Accordion($('#accordion'), false);
});



$('.sl').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
});



