(function() {
    emailjs.init('tu_user_id'); // Reemplaza 'tu_user_id' con tu User ID de EmailJS
  
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Obtén los datos del formulario
      var formData = new FormData(this);
  
      // Envía el correo electrónico utilizando EmailJS
      emailjs.send('tu_service_id', 'tu_template_id', formData)
        .then(function(response) {
          console.log('Compra realizada correctamente', response);
          alert('¡Gracias por tu compra! Que lo disfrutes :)');
          // Aquí puedes redirigir a otra página o realizar otras acciones después del envío exitoso
        }, function(error) {
          console.log('Error al realizar la compra', error);
          alert('Hubo un error al realizar la compra. Por favor, inténtalo nuevamente.');
        });
    });
  })();

  

(function() {
    emailjs.init('tu_user_id'); // Reemplaza 'tu_user_id' con tu User ID de EmailJS
  
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Obtén los datos del formulario
      var formData = new FormData(this);
  
      // Envía el correo electrónico utilizando EmailJS
      emailjs.send('tu_service_id', 'tu_template_id', formData)
        .then(function(response) {
          console.log('Consulta enviada correctamente', response);
          alert('¡Gracias por tu consulta! En breve nos pondremos en contacto.');
          // Aquí puedes redirigir a otra página o realizar otras acciones después del envío exitoso
        }, function(error) {
          console.log('Error al enviar consulta', error);
          alert('Hubo un error al enviar la consulta. Por favor, inténtalo nuevamente.');
        });
    });
})();