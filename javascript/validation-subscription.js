		// validation email subscription
		
		$(document).ready(function() // jquery 
							  {
				newsletterButton
				$("#newsletterButton").click(function () 
											 {
					var inputstring = $("#signUpEmail").val();
					if (inputstring == "" || inputstring ==  "Enter email here...")
					{
						console.log (inputstring);
						swal ("No emal has been entered","","error");
						return;
					}
					if (inputstring.includes("@") && (inputstring.includes(".com") || inputstring.includes(".ie") || inputstring.includes(".co.uk")))
					{
						swal ("Thank you, newsletters are sent every friday at 12:00am","","success");
					}else
					{
						swal ("This email is invalid","","error");
					}
				});
			});