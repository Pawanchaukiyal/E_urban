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
