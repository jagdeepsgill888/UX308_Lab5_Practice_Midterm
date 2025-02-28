import { number2Yeeha } from "../number2Yeeha.js";

describe("What will the integer be in Yeeha? ", function() {
    it("if integer is 1 ", function() {
      let integer = 1;
      let strings = number2Yeeha(integer);
      expect(strings).toBe("Nada");
    });
  });

  describe("What will the integer be in Yeeha? ", function() {
    it("if integer is 21 ", function() {
      let integer = 21;
      let strings = number2Yeeha(integer);
      expect(strings).toBe("Yee Ha");
    });
  });

  describe("What will the integer be in Yeeha? ", function() {
    it("if integer is 6 ", function() {
      let integer = 6;
      let strings = number2Yeeha(integer);
      expect(strings).toBe("Yee");
    });
  });

  describe("What will the integer be in Yeeha? ", function() {
    it("if integer is 17 ", function() {
      let integer = 14;
      let strings = number2Yeeha(integer);
      expect(strings).toBe("Ha");
    });
  });