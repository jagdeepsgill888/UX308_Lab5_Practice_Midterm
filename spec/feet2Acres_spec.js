import { convertFeet2Acre } from '../squareFeet2Acres.js'

describe("A suite", function() {
    it("What is 50000 sqaure feet in Ares", function() {
      let Acre = convertFeet2Acre(50000);
      expect(Acre.toFixed(2)).toBe("1.15");
    });
  });

 describe("A suite", function() {
    it("What is 60000 sqaure feet in Ares", function() {
      let Acre = convertFeet2Acre(60000);
      expect(Acre.toFixed(2)).toBe("1.38");
    });
  });
  
  describe("A suite", function() {
    it("What is 65000 sqaure feet in Ares", function() {
      let Acre = convertFeet2Acre(65000);
      expect(Acre.toFixed(2)).toBe("1.49");
    });

  });
  

  