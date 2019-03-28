

$().ready(function()
{
   $("#link1").click(
		function()
		{
		  $("#Toalety1").toggle("normal");
		});
});

 var listaKart=[
   "images/s_as.bmp","images/s_2.bmp","images/s_3.bmp","images/s_4.bmp","images/s_5.bmp","images/s_6.bmp","images/s_7.bmp","images/s_8.bmp","images/s_9.bmp","images/s_10.bmp","images/s_J.bmp","images/s_K.bmp","images/s_Q.bmp",
   "images/d_as.bmp","images/d_2.bmp","images/d_3.bmp","images/d_4.bmp","images/d_5.bmp","images/d_6.bmp","images/d_7.bmp","images/d_8.bmp","images/d_9.bmp","images/d_10.bmp","images/d_J.bmp","images/d_K.bmp","images/d_Q.bmp",
   "images/z_as.bmp","images/z_2.bmp","images/z_3.bmp","images/z_4.bmp","images/z_5.bmp","images/z_6.bmp","images/z_7.bmp","images/z_8.bmp","images/z_9.bmp","images/z_10.bmp","images/z_J.bmp","images/z_K.bmp","images/z_Q.bmp",
   "images/w_as.bmp","images/w_2.bmp","images/w_3.bmp","images/w_4.bmp","images/w_5.bmp","images/w_6.bmp","images/w_7.bmp","images/w_8.bmp","images/w_9.bmp","images/w_10.bmp","images/w_J.bmp","images/w_K.bmp","images/w_Q.bmp"];

 // document.getElementById("twarz_"+i).innerHTML = MultidimentionArray[i][2];
 //     document.getElementById("twarzO_"+i).src = MultidimentionArray[i][0];
 var listaKartWylosowanych=[];

//zadanie1
var res = [];
var poziom;
var i_zadanie1;
var i_zadanie1_1=0;
var punkty_zad1=0;
var punkty=0;
function myFunction() {
    $("#Zadanie1").toggle("normal");
		document.getElementById("Zadanie1_button").disabled = true;
    poziom = document.getElementById("ilosc_elementow").value;
    var text = "";
    listaKart.sort(function() { return 0.5 - Math.random() });

    var iloscwierszy = Math.ceil(poziom/7);
    var mojatabela="<table align=center width=100%><tbody>";
    var licznik =0;
     for (var i = 0; i < iloscwierszy; i++) {
     mojatabela+="<tr>";
       for (var j = 0; j < 7; j++) {
             mojatabela+="<td align=center id = karta_"+licznik+"></td>";
             licznik+=1;
        }
     mojatabela+="</tr>";
       }
     mojatabela+="</table></tbody>";
       document.getElementById("tabelaKart").innerHTML = mojatabela;

    for(var i = 0; i < poziom; i++) {
         var tekst_obrazka ="<img id=img_karty_"+i+" style=width:100px;height:150px;>";
           document.getElementById("karta_"+i).innerHTML=tekst_obrazka;
           document.getElementById("img_karty_"+i).src = listaKart[i];
           listaKartWylosowanych.push(listaKart[i]);
    }
    i_zadanie1=8*poziom;
    onTimer();
 }



function zadanie1_czasStop(){
  i_zadanie1_1=1;
}

function onTimer() {
  document.getElementById('timer_zad1').innerHTML = i_zadanie1;
  i_zadanie1--;
  if (i_zadanie1_1==0){
  if (i_zadanie1 < 0) {
 for(var i = 0; i < poziom; i++) {
           document.getElementById("img_karty_"+i).src = "images/rewers.bmp";
    }
          $("#Zadanie1_odp").toggle("fast" , function(){losujKartOdpowiedzi();});
  //   losujKartOdpowiedzi();

  }
  else {
    setTimeout(onTimer, 1000);
  }
  }else{
 for(var i = 0; i < poziom; i++) {
           document.getElementById("img_karty_"+i).src = "images/rewers.bmp";
    }
    $("#Zadanie1_odp").toggle("fast", function(){losujKartOdpowiedzi();});
 //  losujKartOdpowiedzi();
      
  }
}

var jestesNa=0;

function losujKartOdpowiedzi(){
var mojatablica =[];

mojatablica.push(listaKartWylosowanych[jestesNa]);
var i=0;
while (i < 6) {
  var wylosowana = Math.floor((Math.random() * 51) + 1);
    if (mojatablica.indexOf( listaKart[wylosowana]) == -1 ){
     mojatablica.push(listaKart[wylosowana]);
     i++;} 
}
  mojatablica.sort(function() { return 0.5 - Math.random() });

 for(var i = 0; i < poziom; i++) {
   mojatablica.sort(function() { return 0.5 - Math.random() });
  if (i == jestesNa){
   document.getElementById("img_karty_"+i).style.width = "120px";
   document.getElementById("img_karty_"+i).style.height = "170px";
  }else{
   document.getElementById("img_karty_"+i).style.width = "100px";
   document.getElementById("img_karty_"+i).style.height = "150px";
  }
  }

for(var i = 0; i < 7; i++) {
          document.getElementById("kartaOdp_"+i).src = mojatablica[i];
  }

         // document.getElementById("kartaOdp_"+i).style.cur="pointer";
          $("#kartaOdp_0").toggle("fast", function(){
             $("#kartaOdp_1").toggle("fast", function(){
                $("#kartaOdp_2").toggle("fast", function(){
                   $("#kartaOdp_3").toggle("fast", function(){
                      $("#kartaOdp_4").toggle("fast", function(){
                         $("#kartaOdp_5").toggle("fast", function(){
                            $("#kartaOdp_6").toggle("fast", function(){
                                
          });});});});});});});
      
}

function koniecgry(){
alert("tutaj");
document.getElementById("kartaOdp_0").disabled=true;
      document.getElementById("kartaOdp_1").disabled=true;
      document.getElementById("kartaOdp_2").disabled=true;
      document.getElementById("kartaOdp_3").disabled=true;
      document.getElementById("kartaOdp_4").disabled=true;
      document.getElementById("kartaOdp_5").disabled=true;
          document.getElementById("kartaOdp_6").disabled=true;
          document.getElementById("zadanie1_pkt_1").innerHTML=punkty+" pkt";
    
          document.getElementById("zadanie1_pkt_max").innerHTML=(poziom*5)+" pkt";
$("#tabelapodsumowania").toggle("normal");
}

function karta_0() {
  var myimage = document.getElementById("kartaOdp_0").src;
  ///document.getElementById("testertxt").innerHTML = myimage+"  "+listaKartWylosowanych[jestesNa];
  if (myimage.indexOf("images/rewers.bmp") < 0){
  if (myimage.indexOf(listaKartWylosowanych[jestesNa]) >= 0){//myimage == listaKartWylosowanych[jestesNa]){
         document.getElementById("img_karty_"+jestesNa).src = listaKartWylosowanych[jestesNa];
         jestesNa+=1;
         punkty+=5;
          document.getElementById("zadanie1_pkt").innerHTML=punkty+" pkt";

      document.getElementById("kartaOdp_0").style.display="none";
      document.getElementById("kartaOdp_1").style.display="none";
      document.getElementById("kartaOdp_2").style.display="none";
      document.getElementById("kartaOdp_3").style.display="none";
      document.getElementById("kartaOdp_4").style.display="none";
      document.getElementById("kartaOdp_5").style.display="none";
          document.getElementById("kartaOdp_6").style.display="none";
       //   document.getElementById("testertxt").innerHTML = jestesNa+"  "+poziom;
      if (jestesNa>=poziom){koniecgry();}else{
                 document.getElementById("img_karty_"+jestesNa).style.width = "120px";
         document.getElementById("img_karty_"+jestesNa).style.height = "170px";
         document.getElementById("img_karty_"+(jestesNa-1)).style.width = "100px";
         document.getElementById("img_karty_"+(jestesNa-1)).style.height = "150px";
       losujKartOdpowiedzi();
      }
      }else{
       if (punkty-1>=0){     punkty-=1;}
        document.getElementById("zadanie1_pkt").innerHTML=punkty+" pkt";
    document.getElementById("kartaOdp_0").src = "images/rewers.bmp";
  }
  }
}

function karta_1() {
  var myimage = document.getElementById("kartaOdp_1").src;
  ///document.getElementById("testertxt").innerHTML = myimage+"  "+listaKartWylosowanych[jestesNa];
   if (myimage.indexOf("images/rewers.bmp") < 0){
  if (myimage.indexOf(listaKartWylosowanych[jestesNa]) >= 0){//myimage == listaKartWylosowanych[jestesNa]){
         document.getElementById("img_karty_"+jestesNa).src = listaKartWylosowanych[jestesNa];
         jestesNa+=1;
          punkty+=5;
           document.getElementById("zadanie1_pkt").innerHTML=punkty+" pkt";

      document.getElementById("kartaOdp_0").style.display="none";
      document.getElementById("kartaOdp_1").style.display="none";
      document.getElementById("kartaOdp_2").style.display="none";
      document.getElementById("kartaOdp_3").style.display="none";
      document.getElementById("kartaOdp_4").style.display="none";
      document.getElementById("kartaOdp_5").style.display="none";
          document.getElementById("kartaOdp_6").style.display="none";
     //       document.getElementById("testertxt").innerHTML = jestesNa+"  "+poziom;
      if (jestesNa>=poziom){koniecgry();}else{
                 document.getElementById("img_karty_"+jestesNa).style.width = "120px";
         document.getElementById("img_karty_"+jestesNa).style.height = "170px";
         document.getElementById("img_karty_"+(jestesNa-1)).style.width = "100px";
         document.getElementById("img_karty_"+(jestesNa-1)).style.height = "150px";
       losujKartOdpowiedzi();
      }
      }else{
         if (punkty-1>=0){     punkty-=1;}
          document.getElementById("zadanie1_pkt").innerHTML=punkty+" pkt";
    document.getElementById("kartaOdp_1").src = "images/rewers.bmp";
  }
}}

function karta_2() {
  var myimage = document.getElementById("kartaOdp_2").src;
  ///document.getElementById("testertxt").innerHTML = myimage+"  "+listaKartWylosowanych[jestesNa];
   if (myimage.indexOf("images/rewers.bmp") < 0){
  if (myimage.indexOf(listaKartWylosowanych[jestesNa]) >= 0){//myimage == listaKartWylosowanych[jestesNa]){

         document.getElementById("img_karty_"+jestesNa).src = listaKartWylosowanych[jestesNa];
         jestesNa+=1;
          punkty+=5;
           document.getElementById("zadanie1_pkt").innerHTML=punkty+" pkt";

      document.getElementById("kartaOdp_0").style.display="none";
      document.getElementById("kartaOdp_1").style.display="none";
      document.getElementById("kartaOdp_2").style.display="none";
      document.getElementById("kartaOdp_3").style.display="none";
      document.getElementById("kartaOdp_4").style.display="none";
      document.getElementById("kartaOdp_5").style.display="none";
          document.getElementById("kartaOdp_6").style.display="none";
        //    document.getElementById("testertxt").innerHTML = jestesNa+"  "+poziom;
      if (jestesNa>=poziom){koniecgry();}else{
                 document.getElementById("img_karty_"+jestesNa).style.width = "120px";
         document.getElementById("img_karty_"+jestesNa).style.height = "170px";
         document.getElementById("img_karty_"+(jestesNa-1)).style.width = "100px";
         document.getElementById("img_karty_"+(jestesNa-1)).style.height = "150px";
       losujKartOdpowiedzi();
      }
      }else{
         if (punkty-1>=0){     punkty-=1;}
          document.getElementById("zadanie1_pkt").innerHTML=punkty+" pkt";
    document.getElementById("kartaOdp_2").src = "images/rewers.bmp";
  }
}}
function karta_3() {
  var myimage = document.getElementById("kartaOdp_3").src;
  ///document.getElementById("testertxt").innerHTML = myimage+"  "+listaKartWylosowanych[jestesNa];
   if (myimage.indexOf("images/rewers.bmp") < 0){
  if (myimage.indexOf(listaKartWylosowanych[jestesNa]) >= 0){//myimage == listaKartWylosowanych[jestesNa]){

         document.getElementById("img_karty_"+jestesNa).src = listaKartWylosowanych[jestesNa];
         jestesNa+=1;
          punkty+=5;
           document.getElementById("zadanie1_pkt").innerHTML=punkty+" pkt";

      document.getElementById("kartaOdp_0").style.display="none";
      document.getElementById("kartaOdp_1").style.display="none";
      document.getElementById("kartaOdp_2").style.display="none";
      document.getElementById("kartaOdp_3").style.display="none";
      document.getElementById("kartaOdp_4").style.display="none";
      document.getElementById("kartaOdp_5").style.display="none";
          document.getElementById("kartaOdp_6").style.display="none";
   //         document.getElementById("testertxt").innerHTML = jestesNa+"  "+poziom;
      if (jestesNa>=poziom){koniecgry();}else{
                 document.getElementById("img_karty_"+jestesNa).style.width = "120px";
         document.getElementById("img_karty_"+jestesNa).style.height = "170px";
         document.getElementById("img_karty_"+(jestesNa-1)).style.width = "100px";
         document.getElementById("img_karty_"+(jestesNa-1)).style.height = "150px";
       losujKartOdpowiedzi();
      }
      }else{
         if (punkty-1>=0){     punkty-=1;}
          document.getElementById("zadanie1_pkt").innerHTML=punkty+" pkt";
    document.getElementById("kartaOdp_3").src = "images/rewers.bmp";
  }
}}
function karta_4() {
  var myimage = document.getElementById("kartaOdp_4").src;
  ///document.getElementById("testertxt").innerHTML = myimage+"  "+listaKartWylosowanych[jestesNa];
   if (myimage.indexOf("images/rewers.bmp") < 0){
  if (myimage.indexOf(listaKartWylosowanych[jestesNa]) >= 0){//myimage == listaKartWylosowanych[jestesNa]){

         document.getElementById("img_karty_"+jestesNa).src = listaKartWylosowanych[jestesNa];
         jestesNa+=1;
          punkty+=5;
           document.getElementById("zadanie1_pkt").innerHTML=punkty+" pkt";

      document.getElementById("kartaOdp_0").style.display="none";
      document.getElementById("kartaOdp_1").style.display="none";
      document.getElementById("kartaOdp_2").style.display="none";
      document.getElementById("kartaOdp_3").style.display="none";
      document.getElementById("kartaOdp_4").style.display="none";
      document.getElementById("kartaOdp_5").style.display="none";
          document.getElementById("kartaOdp_6").style.display="none";
   //         document.getElementById("testertxt").innerHTML = jestesNa+"  "+poziom;
      if (jestesNa>=poziom){koniecgry();}else{
                 document.getElementById("img_karty_"+jestesNa).style.width = "120px";
         document.getElementById("img_karty_"+jestesNa).style.height = "170px";
         document.getElementById("img_karty_"+(jestesNa-1)).style.width = "100px";
         document.getElementById("img_karty_"+(jestesNa-1)).style.height = "150px";
       losujKartOdpowiedzi();
      }
      }else{
         if (punkty-1>=0){     punkty-=1;}
          document.getElementById("zadanie1_pkt").innerHTML=punkty+" pkt";
    document.getElementById("kartaOdp_4").src = "images/rewers.bmp";
  }
}}
function karta_5() {
  var myimage = document.getElementById("kartaOdp_5").src;
  ///document.getElementById("testertxt").innerHTML = myimage+"  "+listaKartWylosowanych[jestesNa];
   if (myimage.indexOf("images/rewers.bmp") < 0){
  if (myimage.indexOf(listaKartWylosowanych[jestesNa]) >= 0){//myimage == listaKartWylosowanych[jestesNa]){

         document.getElementById("img_karty_"+jestesNa).src = listaKartWylosowanych[jestesNa];
         jestesNa+=1;
          punkty+=5;
           document.getElementById("zadanie1_pkt").innerHTML=punkty+" pkt";

      document.getElementById("kartaOdp_0").style.display="none";
      document.getElementById("kartaOdp_1").style.display="none";
      document.getElementById("kartaOdp_2").style.display="none";
      document.getElementById("kartaOdp_3").style.display="none";
      document.getElementById("kartaOdp_4").style.display="none";
      document.getElementById("kartaOdp_5").style.display="none";
          document.getElementById("kartaOdp_6").style.display="none";
   //         document.getElementById("testertxt").innerHTML = jestesNa+"  "+poziom;
      if (jestesNa>=poziom){koniecgry();}else{
                 document.getElementById("img_karty_"+jestesNa).style.width = "120px";
         document.getElementById("img_karty_"+jestesNa).style.height = "170px";
         document.getElementById("img_karty_"+(jestesNa-1)).style.width = "100px";
         document.getElementById("img_karty_"+(jestesNa-1)).style.height = "150px";
       losujKartOdpowiedzi();
      }
      }else{
         if (punkty-1>=0){     punkty-=1;}
          document.getElementById("zadanie1_pkt").innerHTML=punkty+" pkt";
    document.getElementById("kartaOdp_5").src = "images/rewers.bmp";
  }
}}

function karta_6() {
  var myimage = document.getElementById("kartaOdp_6").src;
  ///document.getElementById("testertxt").innerHTML = myimage+"  "+listaKartWylosowanych[jestesNa];
   if (myimage.indexOf("images/rewers.bmp") < 0){
  if (myimage.indexOf(listaKartWylosowanych[jestesNa]) >= 0){//myimage == listaKartWylosowanych[jestesNa]){

         document.getElementById("img_karty_"+jestesNa).src = listaKartWylosowanych[jestesNa];
         jestesNa+=1;
          punkty+=5;
           document.getElementById("zadanie1_pkt").innerHTML=punkty+" pkt";
      document.getElementById("kartaOdp_0").style.display="none";
      document.getElementById("kartaOdp_1").style.display="none";
      document.getElementById("kartaOdp_2").style.display="none";
      document.getElementById("kartaOdp_3").style.display="none";
      document.getElementById("kartaOdp_4").style.display="none";
      document.getElementById("kartaOdp_5").style.display="none";
          document.getElementById("kartaOdp_6").style.display="none";
  //          document.getElementById("testertxt").innerHTML = jestesNa+"  "+poziom;
      if (jestesNa>=poziom){koniecgry();}else{
         document.getElementById("img_karty_"+jestesNa).style.width = "120px";
         document.getElementById("img_karty_"+jestesNa).style.height = "170px";
         document.getElementById("img_karty_"+(jestesNa-1)).style.width = "100px";
         document.getElementById("img_karty_"+(jestesNa-1)).style.height = "150px";
       losujKartOdpowiedzi();
      }
      }else{
        if (punkty-1>=0){     punkty-=1;}
     document.getElementById("zadanie1_pkt").innerHTML=punkty+" pkt";
    document.getElementById("kartaOdp_6").src = "images/rewers.bmp";
  }
}}