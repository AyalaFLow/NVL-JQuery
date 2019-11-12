   // JavaScript Document

$(document).ready(function(){	
	$(".even").attr("type","square");
	
    $(document).attr("li.odd span".toUpperCase);
	/*$("[class*=odd]").toUpperCase;*/
	
	var lista = $("ul li");
	alert(lista.length);
	$("ul li").each(function(recorrer){
	if(recorrer>5 && recorrer<7){
			$(this).height(recorrer + 50);
	}
	});
	
	
	$("#murcia").appendTo("#madrid");
	
		$("button").click(function(){
		$("#prueba").hide();
	     });
 });