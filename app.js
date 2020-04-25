// UI Variables
const weight = document.querySelector('.weight');
const weightList = document.getElementById('weightList');
let converted = document.querySelector('.converted');
const form = document.querySelector('form');

// Event Handler
form.addEventListener('submit', convertValue);

// Submit Event
function convertValue(e) {
  e.preventDefault();

  if (weightList.value == 'K') {
    converted.value = `${parseFloat(weight.value * 2.205).toFixed(1)} (Lbs)`
  } else if (weightList.value == 'L') {
    converted.value = `${parseFloat(weight.value / 2.205).toFixed(1)} (Kilo)`;
  }
}