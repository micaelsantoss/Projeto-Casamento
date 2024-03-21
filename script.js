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