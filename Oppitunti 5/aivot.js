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
