document.addEventListener('DOMContentLoaded', function() {
    fetch('../../components/Navbar/Navbar.html')
        .then(response => response.text())
        .then(data => {
        
            document.querySelector('.nav-item').innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });
});
