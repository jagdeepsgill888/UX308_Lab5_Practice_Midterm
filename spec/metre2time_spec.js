import { convertMetre2time } from '../metre2time.js'

describe("A suite", function() {
    it("How many mintues will it take to mow a small lawn", function() {
        let Width = 10;
        let Length = 15;
        let mowRate = 3;
        let mowMintues = convertMetre2time(Width, Length, mowRate);
      expect(mowMintues.toFixed(2)).toBe("50.00");
    });
  });


  describe("A suite", function() {
    it("How many mintues will it take to mow a small lawn", function() {
        let Width = 20;
        let Length = 20;
        let mowRate = 3;
        let mowMintues = convertMetre2time(Width, Length, mowRate);
      expect(mowMintues.toFixed(2)).toBe("133.33");
    });
  });

  describe("A suite", function() {
    it("How many mintues will it take to mow a small lawn", function() {
        let Width = 40;
        let Length = 40;
        let mowRate = 3;
        let mowMintues = convertMetre2time(Width, Length, mowRate);
      expect(mowMintues.toFixed(2)).toBe("533.33");
    });
  });
