const btn = document.getElementById("button");

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_kak52bx";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar formulario";
      alert("Mensaje enviado correctamente!");
      form.reset();
    },
    (err) => {
      btn.value = "Enviar formulario";
      alert(JSON.stringify(err));
    }
  );
});
