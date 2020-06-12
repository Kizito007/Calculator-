//Selecting Elements
var nul = " ";
function myFunction(event){   
    var clicks = event.target.value;
    if(clicks){
        var inputs = document.querySelector(".disp").value += clicks;      
    }
    document.querySelector(".clr").addEventListener("click", clrBtn)  
//    document.querySelector(".point").addEventListener("click", pointBtn)
    document.querySelector(".zero").addEventListener("click", zeroBtn)
    document.querySelector(".d_zero").addEventListener("click", zerooBtn) 
    document.querySelector(".equ").addEventListener("click", equBtn) 
}
// Mathematics takes place here
//calculate
function think(inputs){
    if(inputs){
        var Ans = eval(inputs);
    }
    return Ans ;
}
function equBtn(){
    //take input value 
    var iVal = document.querySelector(".disp").value;
    //clear whilst calculating 
    document.querySelector(".disp").value= " ";
    //give value with eval func
    var show = think(iVal)
   // show  result 
   document.querySelector(".disp").value = show; 
}

//clear screen
function clrBtn(event) {
    document.querySelector(".disp").value = nul;
    // event.preventDefault();
    // document.querySelector(".disp").value = " ";
}
//add zeros and dot
function zeroBtn() {
    document.querySelector(".disp").value +="0";
}
function zerooBtn() {
    document.querySelector(".disp").value += "00";
}
// function pointBtn() {
//     document.querySelector(".disp").value += ".";
// }