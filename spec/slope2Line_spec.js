import { CalculateSlopeLine } from "../slope2Line.js";

  describe("What is the slope line of x1, y1, x2, y2? ", function() {
    it("if the slope points are (3,5,7,9) ", function() {
      let x1 = 3;
      let y1 = 5;
      let x2 = 7;
      let y2 = 9; 
      let sline = CalculateSlopeLine(x1, y1, x2, y2);
      expect(sline).toBe(1);
    });
  });

  describe("What is the slope line of x1, y1, x2, y2? ", function() {
    it("if the slope points are (1,3,7,11) ", function() {
      let x1 = 1;
      let y1 = 3;
      let x2 = 7;
      let y2 = 11; 
      let sline = CalculateSlopeLine(x1, y1, x2, y2);
      expect(sline.toFixed(2)).toBe("1.33");
    });
  });

  describe("What is the slope line of x1, y1, x2, y2? ", function() {
    it("if the slope points are ((1,4,7,5)) ", function() {
      let x1 = 1;
      let y1 = 4;
      let x2 = 7;
      let y2 = 5; 
      let sline = CalculateSlopeLine(x1, y1, x2, y2);
      expect(sline.toFixed(2)).toBe("0.17");
    });
  });