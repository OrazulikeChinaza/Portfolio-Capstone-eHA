document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    this.reset();
    alert("Thank you for reaching out ! I'll get back to you soon.");
  });
   
  function downloadResume() {
    const link = document.createElement('a');
    link.href = "img/chinaza's resume.pdf";
    link.download = "Chinaza-Resume.pdf";
    link.click();
  }