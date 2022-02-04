// in Ex9 to Ex15, change the name of the following function properly
function sept(){

  var outputObj=document.getElementById("output");

  var a=parseInt(prompt("Please enter a number: ", ""));

  var f=0;
  var s=1;
  var sum=0;
  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/
  outputObj.innerHTML="number: "+a+"<br><br>Fibonacci sequence is : ";


  // transltate rest of your flowcharts to js here:

  for (var i=1;i<=a;++i){
      outputObj.innerHTML=outputObj.innerHTML+f+",";
      sum=f+s;
      f=s;
      s=sum;

  }

  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
