$(document).ready(function(){
	$("#ocultar").click(function(event){
		event.preventDefault();
		$("#ocultar1").hide(5000);
	});
	$("#mostrar").click(function(event){
		event.preventDefault();
		$("#ocultar1").show(3000);
	});
	$("#img").fadeOut(5000, function(){
		$("#img").css({'top';300, 'left';200});
		$("#img").fadeIn(5000);
	});
});

	
