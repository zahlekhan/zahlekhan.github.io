function anyThing() {
  setTimeout(function(){ $('.stepper').nextStep(); }, 1500);
}

$(function(){
   $('.stepper').activateStepper();
});


    $("#personal").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 8
        },
        password_confirm: {
            required: true,
            minlength: 8,
            equalTo: "#password"
      }
    },
    messages: {
        email: "Please enter a valid email address",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long",
        },
        password_confirm: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long",
          equalTo: "Please enter the same password as above"
        }
    }
  });
	

         