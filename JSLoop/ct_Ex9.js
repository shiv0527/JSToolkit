// in Ex9 to Ex15, change the name of the following function properly
function sept(){

   var outputObj=document.getElementById("output");

  var a=parseInt(prompt("Please enter a number: ", ""));


  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/
  outputObj.innerHTML="number: "+a+"<br><br>its digits: ";


  // transltate rest of your flowcharts to js here:

  do{
      var n=Math.floor(a%10);
      a=Math.floor(a/10);
      outputObj.innerHTML=outputObj.innerHTML+n+",";
  }while(a>0);



  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
