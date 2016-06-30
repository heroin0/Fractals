var axiom="F";
var newF="-F+F+[+F-F-]-[-F+F+F]";
var resultStr;

var q=pi/8;


function iterative_transform(axiom, newF, n, current) {
    var newAxiom = "";
    for (var i = 0; i < axiom.length; ++i) {
        if (axiom[i] == "F")
            newAxiom += newF;
        else
            newAxiom += axiom[i];
    }

    if (n != current) {
        current++;
        iterative_transform(newAxiom, newF, n, current);
    }
    else resultStr=newAxiom;
}

function draw(start,x,y){//start - начиная с какой позиции читать.
	for(i=start;i<resultStr.length();++i)
		var cur=resultStr[i];
	var canvas = document.getElementById("canvas");
	context.beginPath();
	context.moveTo(x, y);
	if(cur=="F"")
	{
		
	}
		else if (cur=="+"){
			
		}
		else if (cur=="-"){
			
		}
		else if (cur==""){
			
		}
		else if (cur=="["){
			
		}
		else if (cur=="]"){
			
		}

}