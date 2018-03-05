document.addEventListener('readystatechange',otorgar(),false);

function otorgar() {
	if(document.readyState=='complete'){
		alert("Hola");
		tds=document.getElementsByTagName('tr');
		alert("Numero de td "+tds.length);
		for (var i = 0; i < tds.length; i++) {
			tds[i].addEventListener('click',function(){alert('hola');},false);

		}
	}
}
function cambiar_color(){
	if(td.style.backgroundColor=="lightcolor"){
		td.style.backgroundColor="yellow";
	}
	else{
		td.style.backgroundColor="lightcolor";
	}
}