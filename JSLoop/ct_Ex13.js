// in Ex9 to Ex15, change the name of the following function properly
function sept(){

  var no=1;

  var outputObj=document.getElementById("output");

  var a=parseInt(prompt("Please enter a number: ", ""));


  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/
  outputObj.innerHTML="number: "+a+"<br><br>Factorial of Number is : ";


  // transltate rest of your flowcharts to js here:

  for(var i=1;i<=a;i++){
    no=(no*i);
  }

  outputObj.innerHTML=outputObj.innerHTML+no;

  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
