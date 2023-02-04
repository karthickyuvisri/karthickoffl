let length;
let width;
let lengthMultiplier,storeValue=0;
let count=0;
let check;

function calculator(){
length=document.querySelector(".length").value;
width=document.querySelector(".width").value;
let widthdouble=width*10;
let add=Math.trunc(width);
let calc=widthdouble%10;
let calcFinal=((add*12)+calc)-4;
let multiplyTwice=calcFinal*calcFinal;
const valueone=2034;
lengthMultiplier=(multiplyTwice*length)/valueone;
console.log(lengthMultiplier)

if(count===0)
    {
        console.log("Number of wood count is " + (count+1) +" and wood value is " +lengthMultiplier );
        document.querySelector(".count").value=(count+1);
        document.querySelector(".value").value=lengthMultiplier;
        }
//document.querySelector(".displaycvf").value=lengthMultiplier;
if(check==="y" || check==="Y" || check==="yes"){
    document.querySelector(".count").value=(count+1);
    document.querySelector(".value").value=lengthMultiplier;
//console.log("Number of wood count is " + (count+1) +" and wood value is " +lengthMultiplier );
}
else{
    document.querySelector(".count").value=(count+1);
    document.querySelector(".value").value=lengthMultiplier;
}
reRunning();
return lengthMultiplier;
}


function reRunning(){
     check=document.querySelector(".radioone").value;
    if(check==="y" || check==="Y" || check==="yes"){
        storeValue=storeValue+lengthMultiplier;
        count=count+1;
        console.log(count);
        
    }
    else{
        document.querySelector(".displaycvf1").value=storeValue;
    }
    console.log(check,storeValue);

}

document.querySelector(".button").addEventListener("click",calculator);
document.querySelector(".displaying").addEventListener("click",reRunning);

