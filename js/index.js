function anyThing() {
  setTimeout(function(){ $('.stepper').nextStep(); }, 1500);
}

$(function(){
   $('.stepper').activateStepper();
});



    $(document).ready(function () {

    $('#test').validate({ // initialize the plugin
        rules: {
            name: {
                required: true
            },
            college: {
                required: true
            },
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
			},
			mobile: {
				required:true,
				length: 10
			},
			address: {
				required:true
			},
			pincode: {
				required:true
			},
			why: {
				required: true
			},
			exp: {
				required: true
			},
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
        },
		mobile: {
			
		},
		
    },
        submitHandler: function (form) { // for demo
            alert('valid form submitted'); // for demo
            return false; // for demo
        }
    });

    $('#btn1').click(function() {
        if ($('#test').valid()) {
            alert('form is valid - not submitted');
        } else {
            alert('form is not valid');
        }
    });
    
});
	

         