// in Ex9 to Ex15, change the name of the following function properly
function sept(){
  var rem=0;
  var revInt=0;
  var n=0;
  var outputObj=document.getElementById("output");

  var a=parseInt(prompt("Please enter a number: ", ""));

  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/

  outputObj.innerHTML=outputObj.innerHTML+"Number :"+a+"<br><br>Reversed Integer is :"+" ";

  // transltate rest of your flowcharts to js here:

  n=a;

  do{
      rem=Math.floor(a%10);
      revInt=Math.floor((revInt*10)+(rem));
      a=Math.floor(a/10);
  }while(a!=0);

  outputObj.innerHTML=outputObj.innerHTML+revInt;

  if(revInt==n){
    outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"YES it's equal to its reverse ";
  }
  else {
    outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"NO it's not equal to its reverse";

  }

  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
