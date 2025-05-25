// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function calculateCelcius() {
  // input
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

  // process
  const celcius = (fahrenheit - 32) * 5 / 9

  // output
  document.getElementById('temperature').innerHTML = 'The temperature in celcius is: ' + celcius + '°'
}
