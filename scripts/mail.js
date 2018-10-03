
// SEND EMAIL
// Contact Form

var $contactForm  = $('#myemailform');

$contactForm.validate({
    errorElement: 'span',
    errorContainer: $contactForm.find('.form-error'),
    errorLabelContainer: $contactForm.find('.form-error ul'),
    wrapper: "li",
    rules: {
        name: {
            required    : true,
            minlength   : 2
        },
        surname: {
            required    : true,
            minlength   : 2
        },
        email: {
            required    : true,
            email       : true
        },
        message: {
            required    : true,
            minlength   : 10
        }
    },
    messages: {
        name: {
            required    : "Please enter your name.",
            minlength   : "Your name needs to be at least 2 characters"
        },
        surname: {
            required    : "Please enter your surname.",
            minlength   : "Your name needs to be at least 2 characters"
        },
        email: {
            required    : "Please enter your email address.",
            minlength   : "You entered an invalid email address."
        },
        message: {
            required    : "Please enter a message.",
            minlength   : "Your message needs to be at least 10 characters"
        }
    }
});

$contactForm.submit(function() {
    $formAlert = $(this).find('.form-alert');
    $formError = $(this).find('.form-error');
    var response;
    $formAlert.hide().html();
    if ($contactForm.valid()){
        $.ajax({
            type: "POST",
            url: "send",
            data: $(this).serialize(),
            success: function(msg) {
                if (msg === 'SEND') {
                    response = '<div class="alert alert-success">Done! Thank you for your message - You will get an answer as soon as possible.';

                }
                else {
                    response = '<div class="alert alert-danger">Ooops... It seems that we have a problem.';
                }
                $formAlert.html(response);
                $formAlert.show();
            }
         });
         console.log($(this).serialize());
        return false;
    }
    return false;
});
