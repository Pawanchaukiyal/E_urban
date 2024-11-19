document.addEventListener('DOMContentLoaded', 
    function jkl() {
    fetch('../../components/Navbar/Navbar.html')
        .then(response => response.text())
        .then(data => {
        
            document.querySelector('.nav-item').innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });
});

document.addEventListener('DOMContentLoaded', 
    function jkl() {
    fetch('../../components/hero/Hero.html')
        .then(response => response.text())
        .then(data => {
        
            document.querySelector('.hero-item').innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });
});

document.addEventListener('DOMContentLoaded', 
    function () {
        fetch('../../components/services/Service.html')
            .then(response => response.text())
            .then(data => {
                document.querySelector('.services-item').innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading services:", error);
            });
    }
);


document.addEventListener("DOMContentLoaded", function () {
    fetch('../../components/Slider/Slider.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('slider-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading slider:', error));
  });