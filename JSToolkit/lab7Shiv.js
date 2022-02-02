function P1Shiv(){
  var num = parseInt(prompt("Please enter a number",""));
  var prime =true;
  var d=2;

  while((prime==true)&&(d<=num/2)){

    /* Let's entered d<=num/2 instead of just "<"
    because for example if we enter 8,it's twice to it's half i.e
    2 is dividing 8 and that's the only reason
    8 is not prime,etc. */

    if(num%d==0){
      prime="false";
    }
      d=d+1;
  }
  if(prime=="true"){
    alert(num+" is prime");
  }
  else{
    alert(num+" is not prime");
  }

}

function P2Shiv(){
  var sum1 = 0;
  var sum2 = 0;
//using "for loop" we are able to find sum of first 4 and last 4 numbers entered by users
//Taking input for first 4 number
 for(var i=1;i<=4;i=i+1){
   var num = parseInt(prompt("Please enter first 4 number",""));
   sum1=sum1+num;
 }
//Taking input for last 4 number
 for(var i=1;i<=4;i=i+1){
   var num = parseInt(prompt("Please enter last 4 number",""));
   sum2=sum2+num;
 }
//checking whether sum1 and sum2 are equal or not using if-else
 if(sum1==sum2){
   alert("Yes sum of first and last four number are same");
   alert("Sum1="+sum1 +"  "+"Sum2="+ sum2 );
 }
 else{
   alert("No the sum is not same ");
   alert("Sum1="+sum1 +"  "+"Sum2="+ sum2);
 }
}


function P3Shiv(){
  var p = 0;
  var n = 0;
//taking number from user until o is enterd or the positive number enter is twice the negative ones
  do{
    var num = parseInt(prompt("Please enter a number",""));
    if(num>0){
      p=p+1;
    }
    if(num<0){
      n=n+1;
    }
  }while((num!=0)&&(p<=2n));

 }

 function P4Shiv(){
   var cnt1=0;
   var cnt2=0;
//taking first 4 number of 8 numbers
   for(var i=1;i<=4;i=i+1){
     var num = parseInt(prompt("Please enter First Half of number",""));

     if(num<0){
       cnt1=cnt1+1;
     }
   }
//taking last 4 inputs
   for(var i=1;i<=4;i=i+1){
     var num = parseInt(prompt("Please enter Second Half of number",""));
     if(num>0){
       cnt2=cnt2+1;
     }
   }
//checking whether positive number entered is equal to numbr of negatives one entered
   if(cnt1==cnt2){
     alert("Yes, number of negative values entered in first half is equal to number of positive values entered in second half");
   }
   else{
     alert("No number of negative values entered in first half is not equal to number of positive values entered in second half");
   }

 }

//here we will get all a the positive prime number less than or equal to the number entered by users
 function P5Shiv(){

     var num = parseInt(prompt("Please enter a number",""));

//defining for loop to print prime number within the number entered
   for(var i=2;i<=num;i=i+1){
     if(prime(i)==true){
        alert(i);
     }
   }
}

//condition for prime number
function prime(num){

var flag=true;
var d=2;

while((flag==true)&&(d<=num/2)){
  if(num%d==0){
            flag=false;
            }
  d=d+1;
}
return flag;
 }
