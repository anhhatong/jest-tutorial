const mathOperations = require("./calculator");

describe("Calculator tests", () => {
  // called once before running the test suite
  beforeAll(() => {
    console.log("beforeAll called");
  });

  // called once after running all the test suite
  afterAll(() => {
    console.log("afterAll called");
  });

  //called before running each individual test
  beforeEach(() => {
    console.log("beforeEach called");
    input1 = 1;
    input2 = 2;
  });

  //called after running each individual test
  afterEach(() => {
    console.log("afterEach called");
  });

  test("1 + 2 = 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
  test("1 - 2 = -1", () => {
    expect(mathOperations.diff(1, 2)).toBe(-1);
  });
  test("1 * 2 = 2", () => {
    expect(mathOperations.product(1, 2)).toBe(2);
  });
});

describe("Matcher tests", () => {
  test("equality", () => {
    expect(5 + 3).toBe(8);
    expect(2 * 4).not.toBe(2);
  });
  test("truthiness", () => {
    let notANum = NaN;
    let emptyString = "";
    let zero = 0;
    let nil = null;
    let s = "maddie tong";

    expect(nil).toBeNull();
    expect(s).not.toBeNull();

    expect(emptyString).toBeFalsy();
    expect(zero).toBeFalsy();
    expect(notANum).toBeFalsy();
    expect(nil).not.toBeTruthy();
    expect(s).toBeTruthy();
  });
  test("number", () => {
    expect(3).toBeGreaterThan(2);
    expect(2).not.toBeLessThanOrEqual(1);
    expect(2).toBeGreaterThanOrEqual(2);
  });
  test("string", () => {
    expect("hello world").toMatch(/wor/);
    expect("hello world").not.toMatch(/dwor/);
  });
});
