// order.js - Fetch the query parameters and display the product details

// Function to get query parameters from the URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Fetch query parameters
const name = getQueryParam('name');
const image = getQueryParam('image');
const status = getQueryParam('status');
const job_id = getQueryParam('job_id');

// Display the order details
const orderDetails = document.getElementById('order-details');

if (name && image && status&& job_id) {
    orderDetails.innerHTML = `
        <div class="order-container">
            <img src="${image}" alt="${name}">
            <div class="order-details">
                <h3>${name}</h3>
                <p>${status}</p>
                <p class="job_id">job_id: $${job_id}</p>
                <button onclick="buyNow()">Buy Now</button>
            </div>
        </div>
    `;
} else {
    orderDetails.innerHTML = '<p>SORRY! FOR YOUR iNCOVENCIENCE .</p>';
}

// Function for "Buy Now" button (you can extend this to implement actual buying functionality)
function buyNow() {
    alert('Thank you for your purchase!');
    // You can implement redirection or other functionality here for the actual buy process.
}
