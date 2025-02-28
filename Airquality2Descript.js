// Compute the air quality given an air quality index:

function Airquality2Descript(AQI) 
{
    let airDescript;
    if(AQI >= 0 && AQI <= 50){
        airDescript = "Good";
    }else if (AQI >= 51 && AQI <= 100){
        airDescript = "Moderate";
    }else if (AQI >= 101 && AQI <= 150){
        airDescript = "Unhealthy for Sensitive Groups";
    }else if (AQI >= 151 && AQI <= 200){
        airDescript = "Unhealthy";
    }
    else if (AQI >= 201 && AQI <= 300){
        airDescript = "Very Unhealthy";
    }
    else if (AQI >= 301){
        airDescript = "Hazardous";
    }  else {  // invalid inputs
        airDescript = "Invalid AQI value";
    }
    return airDescript;
}


//console.log(` its  ${Airquality2Descript(12)}`);

export { Airquality2Descript }