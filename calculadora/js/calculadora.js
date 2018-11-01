window.onload=function(){
	var operador = ""
	var colorAmarillo = function(){
	this.style.background = "yellow"
}
var colorBlanco = function(){
	this.style.background = "white"
}		

var numeros= function(){
	var valor=this.value;
	if (operador==""){
		var valorInput=document.getElementById("operando1").value;
		if (valorInput=="0"){
			document.getElementById("operando1").value="";
		}
		document.getElementById("operando1").value+=valor;
	}
	else {//operando2
		if (operador==""){
		var valorInput=document.getElementById("operando2").value;
		if (valorInput=="0"){
			document.getElementById("operando2").value="";
		}
		document.getElementById("operando2").value+=valor;	
	}
}		
}

var operando1=document.getElementById("operando1")
	operando1.addEventListener("focus", colorAmarillo)
	operando1.addEventListener("focusout", colorBlanco)

var operando2=document.getElementById("operando2")
	operando2.addEventListener("focus", colorAmarillo)
	operando2.addEventListener("focusout", colorBlanco)

var cero=document.getElementById("cero")
	cero.addEventListener("click",numeros)

var uno=document.getElementById("uno")
	uno.addEventListener("click",numeros)

var dos=document.getElementById("dos")
	dos.addEventListener("click",numeros)

var tres=document.getElementById("tres")
	tres.addEventListener("click",numeros)

var cuatro=document.getElementById("cuatro")
	cuatro.addEventListener("click",numeros)

var cinco=document.getElementById("cinco")
	cinco.addEventListener("click",numeros)

var seis=document.getElementById("seis")
	seis.addEventListener("click",numeros)

var siete=document.getElementById("siete")
	siete.addEventListener("click",numeros)

var ocho=document.getElementById("ocho")
	ocho.addEventListener("click",numeros)

var nueve=document.getElementById("nueve")
	nueve.addEventListener("click",numeros)

var suma=document.getElementById("suma")
	suma.addEventListener("click",numeros)
 
var resta=document.getElementById("resta")
	resta.addEventListener("click",numeros)

var multiplicacion=document.getElementById("multiplicacion")
	multiplicacion.addEventListener("click",numeros)

var division=document.getElementById("division")
	division.addEventListener("click",numeros)

var igual=document.getElementById("igual")
	igual.addEventListener("click",numeros)
}
