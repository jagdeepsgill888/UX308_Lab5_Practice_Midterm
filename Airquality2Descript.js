// Compute the air quality given an air quality index:

function Airquality2Descript(AQI) 
{
    let airDescript;
    if(AQI >=0 && <=50){
        airDescript = "Good";
    }else if (AQI >=51 && <=100){
        airDescript = "Moderate";
    }else if (AQI >=101 && <=150){
        airDescript = "Unhealthy for Sensitive Groups";
    }else if (AQI >=151 && <=200){
        airDescript = "Unhealthy";
    }
    return airDescript;
}


//console.log(` 2km/h in The Beaufort Wind Scale means its ${windspeed2Descript(3)}`);

export { windspeed2Descript }