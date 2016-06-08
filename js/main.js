$(document).ready(function(){
	var data, hora;

	// EXTRAER EL VALOR DEL INPUT Y COLOCARLO EN EL CHAT
	$(".yourMessage").keypress(function(){
		data = new Date();
		hora = data.getHours();
		var minutos = data.getMinutes();
		var hourMyMessage = hora+":"+minutos;
		var yourMessage = $(".yourMessage").val();
		var chatMessage = $(".chat-message"); // DIV PADRE DEL CHAT
		var myMessageChat = $("<div class='message-user-right'> <div class='message-user'> <div class='text-author'>"+yourMessage+"</div> <div class='bubble-chat-hour'><span class='chat-hour'>"+hourMyMessage+"</span></div>"+"</div></div></div>");
		
		if(event.which===13&&yourMessage!== ""){
			$(".yourMessage").val("");
			chatMessage.append(myMessageChat);	
		}
	});

	// NÚMEROS DE CLICK PARA ABRIR Y CERRAR EL DIV EMOTICON
	// EL ICON-MESSAGE SERÍA REEMPLAZADO POR UN ICONO DE CERRAR QUE COLOQUÉ EL CÓDIGO DE LA PÁG. ICOMOON EN EL ICOMOON.CSS PERO NO ESTÁ APARECIENDO :(
	var numClick = 1;
	$(".icon").click(function(){
		numClick++;
		if(numClick%2===0) {
			$(".emoticons-list").css("display","block");
			$(this).removeClass("icon-insert_emoticon").addClass("icon-message");
		} else {
			$(".emoticons-list").css("display","none");
			$(this).removeClass("icon-message").addClass("icon-insert_emoticon");
		}
	});

	// LIMPIAR EL CHAT
	$(".panel-list-message-contact").click(function(){
		$(".chat-message").empty();
	});


	// NIVEL 1
	// BUSCADOR FILTRADO CUANDO SE PRESIONA ENTER
	$("#inputSearch").keypress(function(){
		if(event.which===13){
			var nameContact = $(".panel-list-message-contact");
			var texto = $("#inputSearch").val();
			texto = texto.toLowerCase();
			nameContact.show();
			for(var i=0; i< nameContact.size(); i++){
				var contenido = nameContact.eq(i).text();
				contenido = contenido.toLowerCase();
				var index = contenido.indexOf(texto);
				if(index == -1){
					nameContact.eq(i).hide();
				}		
			}
		}
	});
	// alert(data.contactos.usser);
	// POP OVER DEL EMOJI
	// $("[data-toggle=popover]").popover();
});

