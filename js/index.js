


$(function(){
   $('.stepper').activateStepper();
});

$('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');

 $("#formValidate").validate({
        rules: {
            first_name: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email:true
            },
            password: {
				required: true,
				minlength: 5
			},
			repassword: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
					 cname:"required",
				
				mobile_no:
					{
						required:true,
						minlength:10,
						maxlength:10,
						digits:true
				
					},
					wmobile_no:
					{
						required:true,
						minlength:10,
						maxlength:10,
						digits:true
					},
					address:
					{
						required:true,
						minlength:15
					},
				year:{
					required:true
				},
				pincode:{
					required:true,
					minlength:6,
					maxlength:6,
					digits:true
				},
					test1:
					{
						required:true,
						minlength:20
					},
					test2:
					{
						required:true,
						minlength:20
						
					}
					
					
				
				}
	
			});
 function fun(f){
	if(f.phone.checked==true)
		{ $("#wmobile_no").parent().find("label").addClass("active");
			f.wmobile_no.value=f.mobile_no.value;
		}
	else{
		f.wmobile_no.value="";
	}
	
}
/*function fun(f){
	if(f.phone.checked==true)
		{ $("#wmobile_no").parent().find("label").addClass("active");
			f.wmobile_no.value=f.mobile_no.value;
		}
	
}*/
/*function checkemail()
{
 var email=document.getElementById( "email" ).value;
	
 if(email)
 {
  $.ajax({
  type: 'post',
  url: '***',
  data: {
   user_email:email,
  },
  success: function (response) {
   $( '#email_status' ).html(response);
   if(response=="OK")	
   {
    return true;	
   }
   else
   {
    return false;	
   }
  }
  });
 }
 else
 {
  $( '#email_status' ).html();
  return false;
 }
}
*/
/*$('#mobile_no').formatter({
  'pattern': '{{9999999999}}',
  'persistent': true
});
$('#wmobile_no').formatter({
  'pattern': '{{9999999999}}',
  'persistent': true
});

$('#pincode').formatter({
  'pattern': '{{999999}}',
  'persistent': true
});*/
$('.js-example-basic-single').select2();
$('.year').select2();