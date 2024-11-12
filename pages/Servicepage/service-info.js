const dataPaths = {
  washing: '../../Data/item_eng.js',
  fridge: '../../Data/item_eng.js',
  electrician: '../../Data/extra_eng.js',
  labour: '../../Data/labour.js'
};


const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('value');


if (value && dataPaths[value]) {
  fetchDataAndDisplay(value);
} else {
  document.getElementById('Sevice-here').innerHTML = '<p>Value not found.</p>';
}

async function fetchDataAndDisplay(value) {
  try {
      const response = await fetch(dataPaths[value]);
      const data = await response.json();

      let content = `<h2>${value.charAt(0).toUpperCase() + value.slice(1)} Data</h2>`;
      // console.log(content);

      data.forEach(item => {
          // Modified part: passing all necessary details in the URL as query parameters
          content += `
              <div class="card">
                  <img src="${item.image}" alt="${item.name}">
                  <h3>${item.name}</h3>
                  <p>${item.description}</p>
                  <p>Price: $${item.price}</p>
                  <button onclick="window.location.href='../../pages/order/order.html?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}&description=${encodeURIComponent(item.description)}&price=${encodeURIComponent(item.price)}'">Order Now</button>
              </div>
          `;
      });

      document.getElementById('Sevice-here').innerHTML = content;
  } catch (error) {
      console.error('Error fetching data:', error);
      document.getElementById('Sevice-here').innerHTML = '<p>Error loading data.</p>';
  }
}
