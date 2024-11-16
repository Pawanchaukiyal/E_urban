<<<<<<< HEAD

=======
 <<<<<<< HEAD
 =======
>>>>>>> 5e7a794c243a209dd552c6b612ff48023eca25a3
const dataPaths = {
  washing: '../../Data/item_eng.json',
  fridge: '../../Data/fridge.json',
  electrician: '../../Data/extra_eng.json',
  labour: '../../Data/labour.json'
};


const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('value');
// console.log(value);


if (value && dataPaths[value]) {
  fetchDataAndDisplay(value);
  // console.log("success")
} else {
  document.getElementById('Sevice-here').innerHTML = '<p>Value not found.</p>';
  // console.log("failure")
}

async function fetchDataAndDisplay(value) {
  try {
      const response = await fetch(dataPaths[value]);
      // console.log(response);
      const data = await response.json();
      // console.log(data);

      let content = `<h2>${value.charAt(0).toUpperCase() + value.slice(1)} Data</h2>`;
      // console.log(content);

      data.forEach(item => {
          // Modified part: passing all necessary details in the URL as query parameters
          content += `
              <div class="card">
                  <img src="${item.image}" alt="${item.name}">
                  <h3>${item.name}</h3>
                  <p>${item.status}</p>
                  <p>ById: $${item.job_id}</p>
                  <button onclick="window.location.href='../BookNow/book.html?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}&status=${encodeURIComponent(item.status)}&job_id=${encodeURIComponent(item.job_id)}'">BookNow</button>
              </div>
          `;
          // console.log(content)
      });

      document.getElementById('Sevice-here').innerHTML = content;
  } catch (error) {
      console.error('Error fetching data:', error);
      document.getElementById('Sevice-here').innerHTML = '<p>Error loading data.</p>';
  }
}
<<<<<<< HEAD

=======
>>>>>>>      6252f40162610ccf7ac35a84915e97f91716bbec
>>>>>>> 5e7a794c243a209dd552c6b612ff48023eca25a3
