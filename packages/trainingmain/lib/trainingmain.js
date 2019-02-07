"use strict";
const trainingshared = require("@guillaume.chervet/trainingshared");

module.exports = trainingmain;

function trainingmain(a, b) {
  return trainingshared(a, b + 1);
}
