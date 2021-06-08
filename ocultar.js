$(document).ready(function(){
	$("#ocultar").click(function(event){
		event.preventDefault();
		$("#ocultar1").hide(5000);
	});

	$("#mostrar").click(function(event){
		event.preventDefault();
		$("#ocultar1").show(3000);
	});

	$("#parrafo").fadeOut(5000, function(){
		$("#parrafo").css({'top':300, 'left':200});
		$("#parrafo").fadeIn(5000);
	});

	$("#ocultar1").fadeOut(5000, function(){
		$("#ocultar1").css({'top':300, 'left':200});
		$("#ocultar1").fadeIn(5000);
	});
});