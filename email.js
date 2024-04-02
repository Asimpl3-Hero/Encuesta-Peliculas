const btn = document.getElementById("button");

document
  .getElementById("form-group")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Enviando...";

    const serviceID = "default_service";
    const templateID = "template_zzanvzp";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Message";
        alert("Enviado!");
      },
      (err) => {
        btn.value = "Send Message";
        alert(JSON.stringify(err));
      }
    );
  });
