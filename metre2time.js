//Given the  width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes

function convertMetre2time(Width, Length, mowRate){
    let lawnArea = Width * Length;
    let mowMintues = lawnArea / mowRate;
    return mowMintues;
}
export { convertMetre2time }
//console.log(`It takes ${convertMetre2time(10, 20)} mintues to mow your Lawn`);
