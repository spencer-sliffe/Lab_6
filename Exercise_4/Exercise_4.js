function colorChange(){
  var redBorder=document.getElementById("rBorder").value;
  var blueBorder=document.getElementById("bBorder").value;
  var greenBorder=document.getElementById("gBorder").value;
  var redBack=document.getElementById("rBack").value;
  var blueBack=document.getElementById("bBack").value;
  var greenBack=document.getElementById("gBack").value;
  var widBorder=document.getElementById("wBorder").value;
      if(rBorder<0||gBorder<0||bBorder<0||rBorder>255||gBorder>255||bBorder>255){
        alert("Please input a color value!");
      }
      else if(wBorder<0){
        alert("Please input a Border width!");
      }
      else if(rBack<0||gBack<0||bBack<0||rBack>255||gBack>255||bBack>255){
        alert("Please input a color value!");
      }

        text.style.borderColor='rgb('+gBorder+','+bBorder+','+rBorder+')';
        text.style.backgroundColor='rgb('+rBack+','+gBack+','+bBack+')';
        text.style.borderWidth=wBorder;

}