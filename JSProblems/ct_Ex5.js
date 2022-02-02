// in Ex2 to Ex5, change the name of the following function properly
function mapping() {



  var a=document.getElementById("num1").value;
  var answer;
  switch (true){
	case (a>89):
		answer="A+";
		break;
	case (a>79):
		answer="A";
		break;
    case (a>74):
  		answer="B+";
  		break;
  	case (a>69):
  		answer="B";
  		break;
      case (a>64):
    		answer="C+";
    		break;
    	case (a>59):
    		answer="C";
    		break;
        case (a>54):
      		answer="D+";
      		break;
      	case (a>49):
      		answer="D";
      		break;
          case (a>44):
        		answer="E";
        		break;
        
		// in Ex5, you need to add more cases for other letter grades
	default:
		answer="F";
  }

  document.getElementById("output").innerHTML=answer;

  /* in Ex2 to Ex5, you need to renmae "sum" to make it more readable
     for those problem, you may also need to rename s to a better
	 varibale that you have in your formulas above */

}
