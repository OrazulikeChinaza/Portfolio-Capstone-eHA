document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    this.reset();
  });
   
  function downloadResume() {
    const link = document.createElement('a');
    link.href = "img/chinaza's resume.pdf";
    link.download = "Chinaza-Resume.pdf";
    link.click();
  }

  function sendMail(){
    let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      message : document.getElementById("message").value,
    }
    emailjs.send("service_dhfvl6p","template_7mj7aea",parms).then(alert("Email sent"))
  }