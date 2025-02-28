import { Airquality2Descript } from "../Airquality2Descript.js";

describe("What is the text for the air quality given an air quality index ", function() {
    it("if 20 AQI", function() {
      let AQI = 20;
      let airDescript = Airquality2Descript(AQI)
      expect(airDescript).toBe("Good");
    });
  });

  describe("What is the text for the air quality given an air quality index ", function() {
    it("if 60 AQI", function() {
      let AQI = 60;
      let airDescript = Airquality2Descript(AQI)
      expect(airDescript).toBe("Moderate");
    });
  });

  describe("What is the text for the air quality given an air quality index ", function() {
    it("if 110 AQI", function() {
      let AQI = 110;
      let airDescript = Airquality2Descript(AQI)
      expect(airDescript).toBe("Unhealthy for Sensitive Groups");
    });
  });

  describe("What is the text for the air quality given an air quality index ", function() {
    it("if 110 AQI", function() {
      let AQI = 155;
      let airDescript = Airquality2Descript(AQI)
      expect(airDescript).toBe("Unhealthy");
    });
  });

  describe("What is the text for the air quality given an air quality index ", function() {
    it("if 110 AQI", function() {
      let AQI = 201;
      let airDescript = Airquality2Descript(AQI)
      expect(airDescript).toBe("Very Unhealthy");
    });
  });

  describe("What is the text for the air quality given an air quality index ", function() {
    it("if 110 AQI", function() {
      let AQI = 400;
      let airDescript = Airquality2Descript(AQI)
      expect(airDescript).toBe("Hazardous");
    });
  });

  describe("What is the text for the air quality given an air quality index ", function() {
    it("if 110 AQI", function() {
      let AQI = -5;
      let airDescript = Airquality2Descript(AQI)
      expect(airDescript).toBe("Invalid AQI value");
    });
  });