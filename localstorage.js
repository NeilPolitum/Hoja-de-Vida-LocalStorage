$(document).ready(function(){
	$("#guardar").click(function(){     
    	var nom = document.getElementById("nombre").value;
		var nac = document.getElementById("nacimiento").value;
		var dir = document.getElementById("direccion").value;
		var cel = document.getElementById("celular").value;
		var mail = document.getElementById("mail").value;
		var est = document.getElementById("estudios").value;
		var exp = document.getElementById("experiencia").value;
		var hab = document.getElementById("habilidades").value;
		var ref = document.getElementById("referencias").value;	
		
		localStorage.setItem("Nombre",nom);
		localStorage.setItem("Nacimiento",nac);
		localStorage.setItem("Direccion",dir);
		localStorage.setItem("Celular",cel);
		localStorage.setItem("Email",mail);
		localStorage.setItem("Estudios",est);
		localStorage.setItem("Experiencia",exp);
		localStorage.setItem("Habilidades",hab);
		localStorage.setItem("Referencias",ref);
	
		document.getElementById("nombre").value = "";
		document.getElementById("nacimiento").value = "";
		document.getElementById("direccion").value = "";
		document.getElementById("celular").value = "";
		document.getElementById("mail").value = "";
		document.getElementById("estudios").value = "";
		document.getElementById("experiencia").value = "";
		document.getElementById("habilidades").value = "";
		document.getElementById("referencias").value = "";  
	});

	$("#mostrar").click(function(){                       
		var nombre = localStorage.getItem("Nombre");
		var nacimiento = localStorage.getItem("Nacimiento");
	 	var direccion = localStorage.getItem("Direccion");
	 	var celular = localStorage.getItem("Celular");
	 	var email = localStorage.getItem("Email");
	 	var estudios = localStorage.getItem("Estudios");
	 	var experiencia = localStorage.getItem("Experiencia");
	 	var habilidades = localStorage.getItem("Habilidades");
	 	var referencias = localStorage.getItem("Referencias");
 
	 	document.getElementById("nombrer").innerHTML = nombre;
	 	document.getElementById("nacimientor").innerHTML = nacimiento;
	 	document.getElementById("direccionr").innerHTML = direccion;
	 	document.getElementById("celularr").innerHTML = celular;
	 	document.getElementById("mailr").innerHTML = email;
	 	document.getElementById("estudiosr").innerHTML = estudios;
	 	document.getElementById("experienciar").innerHTML = experiencia;
	 	document.getElementById("habilidadesr").innerHTML = habilidades;
	 	document.getElementById("referenciasr").innerHTML = referencias;   
 	});
});
