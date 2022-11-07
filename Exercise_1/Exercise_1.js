function password(){
  var first = document.getElementById("firstpw").value;
    var repeat = document.getElementById("repeat").value;
  if(first.length >= 8){
    if(repeat.length>=8){
      if(first==repeat){
        alert("Validate Password!");
      }
      else{
        alert("Your entries don't match.");
      }

    }
    else{
    alert("Password needs at least 8 characters!");
  }
}
  else{
    alert("Password needs at least 8 characters!");
  }
}