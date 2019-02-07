"use strict";

const trainingmain = require("..");
const assert = require("assert");

describe("trainingmain", () => {
  it("needs tests", () => {
    const result = trainingmain(10, 5);
    assert.equal(result, 16);
  });
});
