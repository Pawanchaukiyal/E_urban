// Get the card type from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const cardType = urlParams.get('card');

// Select the elements
const serviceImg = document.getElementById('service-img');
const serviceTitle = document.getElementById('service-title');
const serviceId = document.getElementById('service-id');
const serviceStatus = document.getElementById('service-status');
const serviceRating = document.getElementById('service-rating');

// Fetch data based on card type
let serviceData = {};
if (cardType === 'X' || cardType === 'Z' || cardType === 'A') {
  serviceData = require('/urban/data/extra_eng.js');
} else if (cardType === 'Y') {
  serviceData = require('/urban/data/labour.js');
}

// Display service data (assumes each dataset is an array and the first element is for the selected card)
const data = serviceData[0];
serviceImg.src = data.imageUrl;
serviceTitle.textContent = data.name;
serviceId.textContent = `Job ID: ${data.job_id}`;
serviceStatus.textContent = `Status: ${data.status}`;
serviceRating.textContent = `Rating: ${data.rating}`;
