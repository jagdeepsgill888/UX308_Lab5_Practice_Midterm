//4. yee_ha takes an integer parameter and returns one of the following strings:
function number2Yeeha(integer) 
{
    let strings;
    if(integer % 3 === 0 && integer % 7 === 0 ){
        strings = "Yee Ha";
    }else if(integer % 3 === 0 ){
        strings = "Yee";
    }else if (integer % 7 === 0 ){
        strings = "Ha";
    }  else {  // invalid inputs
        strings = "Nada";
    }
    return strings;
}


console.log(` its ${number2Yeeha(5)}`);

export { number2Yeeha }