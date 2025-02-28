// There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions

function convertFeet2Acre(squareFeet){
    let Acre = squareFeet / 43560;
    return Acre;
}

// console.log(`It is ${convertFeet2Acre(50000)} acres`);

export { convertFeet2Acre }