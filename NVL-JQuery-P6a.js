   // JavaScript Document

$(document).ready(function(){	
	$(".even").attr("type","square");
	
    $(document).attr("li.odd span".toUpperCase);
	/*$("[class*=odd]").toUpperCase;*/
	
	var lista = $("ul.list li").length;
	$("ul.list li").each(function(){
	if( lista === 6){
			$(this).height(100);
	}
	});
	/*$("#cataluña").height(100);*/
	
	$("#murcia").appendTo("#madrid");
	
		$("button").click(function(){
		$("#prueba").hide();
	     });
 });