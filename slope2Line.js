/* Calculate the slope of a line. Slope is calculated as
    rise / run, where rise is distance between y coordinates,
    and run is distance between x coordinates.
    Use: slp = slope(x1, y1, x2, y2) */
    let slp = CalculateSlopeLine (3,5,7,9);

    function CalculateSlopeLine(x1, y1, x2, y2) {
        let sline = ( y2 - y1) / ( x2 - x1);
        return sline;
    }

   // console.log(`The slope line is ${slp}`);

   export { CalculateSlopeLine }