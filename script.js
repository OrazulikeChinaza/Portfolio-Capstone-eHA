document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    this.reset();
    alert("Thank you for reaching out ! I'll get back to you soon.");
  });
   