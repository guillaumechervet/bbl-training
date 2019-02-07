"use strict";

const R = require("ramda");

module.exports = trainingshared;

function trainingshared(a, b) {
  return R.add(a, b);
}
