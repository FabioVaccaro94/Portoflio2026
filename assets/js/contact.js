const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  sendEmail();
});

function sendEmail() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("All fields are required!");
    return;
  }

  const params = { name, email, subject, message };

  emailjs.send("service_y48zmy2", "template_omj3rkq", params).then(
    function (response) {
      console.log("Email sent successfully!", response);
      alert("Email sent successfully!");
      contactForm.reset();
    },
    function (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    },
  );
}
