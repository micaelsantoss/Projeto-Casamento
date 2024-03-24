/* MENU HAMBURGUER */
var hamburguer = document.querySelector(".hamburguer");
var nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => 
nav.classList.toggle("active"));

var rem1 = document.getElementById('rem1');
var rem2 = document.getElementById('rem2');
var rem3 = document.getElementById('rem3');
var rem4 = document.getElementById('rem4');
var rem5 = document.getElementById('rem5');
var rem6 = document.getElementById('rem6');

rem1.addEventListener("click", () => 
nav.classList.toggle("active"));

rem2.addEventListener("click", () => 
nav.classList.toggle("active"));

rem3.addEventListener("click", () => 
nav.classList.toggle("active"));

rem4.addEventListener("click", () => 
nav.classList.toggle("active"));

rem5.addEventListener("click", () => 
nav.classList.toggle("active"));

rem6.addEventListener("click", () => 
nav.classList.toggle("active"));


/* CONTADOR */
var datacasamento = new Date("May 11, 2024 15:30").getTime();


var dias, horas, minutos, segundos

setInterval(() => {
    var dataatual = new Date().getTime();
    
    var segundostotal = (datacasamento - dataatual)/1000;
    
    dias = parseInt(segundostotal/86400);
    segundostotal = segundostotal%86400;

    horas = parseInt(segundostotal/3600);
    segundostotal = segundostotal%3600;

    minutos = parseInt(segundostotal/60);
    segundos = parseInt(segundostotal%60);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

}, 1000);

/* SLIDES */
var count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},5000)

function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}