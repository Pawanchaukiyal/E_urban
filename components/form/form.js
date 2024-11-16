
  document.getElementById("serviceForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("serviceForm").style.display = "none";
    document.getElementById("message").style.display = "block";
  });
