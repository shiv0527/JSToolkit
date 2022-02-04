// in Ex9 to Ex15, change the name of the following function properly
function sept(){

  var outputObj=document.getElementById("output");

  var a=parseInt(prompt("Please enter a number: ", ""));


  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/
  outputObj.innerHTML="number: "+a+"<br><br> ";


  // transltate rest of your flowcharts to js here:

  for(var i=1;i<=a;i++){
      for(var j=1;j<=i;j++){
        outputObj.innerHTML=outputObj.innerHTML+"[]";
      }
      outputObj.innerHTML=outputObj.innerHTML+"<br>";
  }

  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
