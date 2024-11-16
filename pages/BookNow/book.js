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

// Default image if no image URL is provided
const defaultImage = 'path/to/default-image.jpg';

if (name && image && status && job_id) {
    orderDetails.innerHTML = `
        <div class="order-container">
            <img src="${image || defaultImage}" alt="${name}">
            <div class="order-details">
                <h3>${name}</h3>
                <p>Status: ${status}</p>
                <p class="job_id">Job ID: ${job_id}</p>
                <button onclick="buyNow()">Buy Now</button>
            </div>
        </div>
    `;
} else {
    // Log the error for debugging purposes
    console.error('Missing required query parameters:');
    if (!name) console.error('Missing name');
    if (!image) console.error('Missing image');
    if (!status) console.error('Missing status');
    if (!job_id) console.error('Missing job_id');

    // Show user-friendly error message
    orderDetails.innerHTML = `
        <div class="error-message">
            <p>Oops! It seems that some order details are missing. Please check the link and try again.</p>
        </div>
    `;
}

// Function for "Buy Now" button (you can extend this to implement actual buying functionality)
function buyNow() {
    alert('Thank you for your purchase!');
    // You can implement redirection or other functionality here for the actual buy process.
}
