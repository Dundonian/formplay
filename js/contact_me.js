function onSubmitForm(event) {
  grecaptcha.execute();
  event.preventDefault();
}

function recaptchaOnSubmit(token) {
      var contactForm = $('#contactForm');
      // Submit the form via ajax
      $.ajax({
        url: contactForm.attr('action'), 
        method: 'POST',
        data: contactForm.serialize(),
        // This causes Accepts header to be application/json
        dataType: "json",
        success: function() {
          // Replace the form with a thank you message
          contactForm.hide();
          $('#thankYou').show();
        },
        error: function() {
          // Replace the form with a thank you message
          contactForm.hide();
          $('#thankYou').show();
        }
      });
    }
    
    $('#contactForm').on('submit', onSubmitForm);