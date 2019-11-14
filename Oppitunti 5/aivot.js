function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
        document.getElementById("laatikko2").innerHTML = "<table style='width:100%'>"+
    "<tr>" +
    "<th>Firstname</th>"+
    "<th>Lastname</th>"+
    "<th>Age</th>"+
  "</tr>"+
  "<tr>"+
    "<td>Jussi</td>"+
    "<td>Nousiainen</td>"+
    "2<td>17</td>"+
  "</tr>"+
  "<tr>"+
    "<td>Nikki</td>"+
    "<td>Lunden</td>"+
    "<td>16</td>"+
  "</tr>"+
"</table>";
}
else if(boxNumber == 3){
    document.getElementById("laatikko3").innerHTML ="<img src='smiley2.png' alt='koita uudestaa apina'>";
}
else if (boxNumber == 4){
    document.location.reload();
}
    
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = x.length-1; i >= 0; i--) {
      text += x.elements[i].name + ": " + x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
}

function diagrammiFunktio(){
    var c = document.getElementById ('myCanvas');
    var ctx = c.getContext('2d');
    var arvoarray;
    var mittariarray;
    var mittaripituus;
    var arvopituus;
    var piste=20;
    //var diagrammi = c.getContext("2d");
    arvoarray = [260, 240, 232, 227, 225, 225, 215, 190, 155, 125, 105, 90, 85, 80, 80];
    mittariarray = [0, 3, 4, 5, 5, 7, 10, 16, 20, 23, 25, 26, 27, 27];
    
    mittaripituus= mittariarray.length;
    for (i = 1; i < mittaripituus; i++) {
      piste=piste+20;
     ctx.fillText(mittariarray[i], piste, arvoarray[i]);    
     }
/*
    ctx.fillText("0", 20, 260);
    ctx.fillText("3", 40, 240);
    ctx.fillText("4", 60, 232);
    ctx.fillText("5", 80, 227);
    ctx.fillText("5", 100, 225);
    ctx.fillText("7", 120, 215);
    ctx.fillText("10", 140, 190);
    ctx.fillText("16", 160, 155);
    ctx.fillText("20", 180, 125);
    ctx.fillText("23", 200, 105);
    ctx.fillText("25", 220, 90);
    ctx.fillText("26", 240, 85);
    ctx.fillText("27", 260, 80);
    ctx.fillText("27", 280, 80);
*/
      //viiva
     piste=20;
      ctx.beginPath();
      ctx.moveTo(20, 260);
      for (i = 1; i < arvopituus; i++) {
       piste=piste+20;
       ctx.lineTo(piste, arvoarray[i]);
       ctx.fillText(arvoarray[i], piste, arvoarray[i]);    
      }
      ctx.stroke();
      /*
      ctx.lineTo(40, 240);
      ctx.lineTo(60, 232);
      ctx.lineTo(80, 227);
      ctx.lineTo(100, 225);
      ctx.lineTo(120, 215);
      ctx.lineTo(140, 190);
      ctx.lineTo(160, 155);
      ctx.lineTo(180, 125);
      ctx.lineTo(200, 105);
      ctx.lineTo(220, 90);
      ctx.lineTo(240, 85);
      ctx.lineTo(260, 80);
      ctx.lineTo(280, 80);
      ctx.stroke();
*/
    //Vaaaka
    ctx.fillText("1", 30, 260);
    ctx.fillText("2", 50, 260);
    ctx.fillText("3", 70, 260);
    ctx.fillText("4", 90, 260);
    ctx.fillText("5", 110, 260);
    ctx.fillText("6", 130, 260);
    ctx.fillText("7", 150, 260);
    ctx.fillText("8", 170, 260);
    ctx.fillText("9", 190, 260);
    ctx.fillText("10", 210, 260);
    ctx.fillText("11", 230, 260);
    ctx.fillText("12", 250, 260);
    ctx.fillText("13", 270, 260);
    ctx.fillText("14", 290, 260);
    ctx.fillText("x1000 rpm", 340, 260);

    //Pysty
    ctx.fillText("0", 10, 260);
    ctx.fillText("3", 10, 240);
    ctx.fillText("6", 10, 220);
    ctx.fillText("9", 10, 200);
    ctx.fillText("12", 10, 180);
    ctx.fillText("15", 10, 160);
    ctx.fillText("18", 10, 140);
    ctx.fillText("21", 10, 120);
    ctx.fillText("24", 10, 100);
    ctx.fillText("27", 10, 80);
    ctx.fillText("30", 10, 60);
    ctx.fillText("Hevosvoima", 10, 40);
  
  }
