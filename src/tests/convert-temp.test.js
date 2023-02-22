import { tryConvert } from "../utils/convert-temp";

describe("tryConvert", () => {
  it("should covert 32F to 0C", () => {
    // Arrange
    const input = "32";
    const conversion = "convert2Celsius";

    const expected = "0";

    // Act
    const actual = tryConvert(input, conversion);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should covert 212F to 100C", () => {
    // Arrange
    const input = "212";
    const conversion = "convert2Celsius";

    const expected = "100";

    // Act
    const actual = tryConvert(input, conversion);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should covert 0C to 32F", () => {
    // Arrange
    const input = "0";
    const conversion = "convert2Fahrenheit";

    const expected = "32";

    // Act
    const actual = tryConvert(input, conversion);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should covert 100C to 212F", () => {
    // Arrange
    const input = "100";
    const conversion = "convert2Fahrenheit";

    const expected = "212";

    // Act
    const actual = tryConvert(input, conversion);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return empty string if input is not a number", () => {
    // Arrange
    const input = "abc";
    const conversion = "convert2Fahrenheit";

    const expected = "";

    // Act
    const actual = tryConvert(input, conversion);

    // Assert
    expect(actual).toBe(expected);
  });
});
