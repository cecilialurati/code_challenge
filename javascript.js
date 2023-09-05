document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita el envío por defecto del formulario
  
      const formData = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        fechaNacimiento: document.getElementById("fechaNacimiento").value,
      };
  
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Respuesta del servidor:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
  