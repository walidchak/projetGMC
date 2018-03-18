function prompt() {
	var nom = prompt("ton nom");
	alert("Welcome" + nom);
	document.getElementById("name")
	.innerHTML=nom;
}



function css(){
	document.getElementById("name")
	.style.backgroundColor="red";
}


function attribute() {
	document.getElementById("img")
	.setAttribute("...","...")
}


function pluselement() {
	var balise = document.creatElement("li")
	var texte = document.creatTextNode("ena texte")
	balise.appendChild("texte");
	
	var container = document
	.getElementById("conteneur");
	container.apprendChild("balise");

	var liste = document
	.getElementById("conteneur");
	var item = prompet("...");
	liste.innerHTML += "<li>"+item+"</li>";	
}

var x = 1;
setTimeout(carousel,1000);
//setIntaerval(carousel,1000)

function carousel() {
	if (x>4){x=1;}

	var path = "src"+x+"jpg";
	document.getElementById("photo")
	.setAttribute("src",path);
	x++;
	setTimeout(carousel,1000);
	//order 1,2,3,4
	//none if setInterval
}



$(document).ready(function(){
	$("#event").click(function(){
		alert("Exp");
	});
});


$(document).ready(function(){
	$("#hide").click(function(){
		$("p").hide();
	});
});

$(document).ready(function(){
	$("#show").click(function(){
		$("p").show();
	});
});

$(document).ready(function(){
	$("#toggle").click(function(){
		$("p").toggle();
	});
});


$("#").html()




