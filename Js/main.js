//esto es para la parte del slider
$(document).ready(function(){

slider();
validation();
subir();

});


//funcion del sliders
function slider(){
	$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		slideWidth: 1200
	});

}


//funcion que realiza la validacion de los campos del formulario
function validation(){

if (window.location.href.indexOf('contacto') > -1) {

	
		$.validate({
			lang : 'es'
		});
		

	}

}

//parte para el funcionamiento del scroll
function subir(){
	$('.top').click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

}
