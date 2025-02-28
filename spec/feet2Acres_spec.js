import { convertFeet2Acre } from '../squareFeet2Acres.js'

describe("A suite", function() {
    it("What is 50000 sqaure feet in Ares", function() {
      let squareFeet = 50000;
      let Acre = convertFeet2Acre(squareFeet);
      expect(Acre.toFixed(2)).toBe("1.15");
    });
  });

 describe("A suite", function() {
    it("What is 60000 sqaure feet in Ares", function() {
      let squareFeet = 60000;
      let Acre = convertFeet2Acre(squareFeet);
      expect(Acre.toFixed(2)).toBe("1.38");
    });
  });
  
  describe("A suite", function() {
    it("What is 65000 sqaure feet in Ares", function() {
      let squareFeet = 65000;
      let Acre = convertFeet2Acre(squareFeet);
      expect(Acre.toFixed(2)).toBe("1.49");
    });

  });
  

  