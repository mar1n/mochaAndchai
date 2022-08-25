const assert = require("chai").assert;
const expect = require('chai').expect;
let expected, current;

beforeEach(() => {
  expected = ["a", "b", "c"];
});

describe("String#split", () => {
  beforeEach(() => {
    current = "a,b,c".split(',');
  });
  it("should return an array", () => {
    expect(Array.isArray(current)).to.be.true;
  });
  it("should return the same array", () => {
    expect(expected.length).to.equal(current.length);

    for (let i = 0; i < expected.length; i++) {
      expect(expected[i]).equal(current[i]);
    }
  });
});
