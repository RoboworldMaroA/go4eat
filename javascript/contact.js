//Validation form contact
// function validateName(){  
// 	var name=document.myform.name.value;  
// 	var surname=document.myform.surname.value;
//     var message=document.myform.message.value; 	
  
// 	if (name == null || name == "")
// 	{  
// 		swal( "Input your name, please!" );  
// 		return false ;  
// 	  }
// 	else if(surname == null||surname == ""){  
// 		swal("Input Surname, please!");  
// 		return false;  
// 	} 
//     else if(message==null || message==""){  
// 		swal("Input your query, Please.");  
// 	return false;  
// 	}  	
// 	else{
// 		swal("Your message was sent, we back to you ASAP, Thank You.");  	
// 	return true
// 	}	
// }
 

//*************************************/
//********   LOGIN   ******************/
//*************************************/
//POST data- send data to the Back-End and validate response token JWT
const formLogin = document.querySelector(".form");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formLogin);
  console.log(formData.get("toEmail"));
  console.log(formData.get("subject"));
  console.log(formData.get("body"));

  const toEmail = formData.get("toEmail");
  const subject = formData.get("subject");
  const body = formData.get("body");

  //Post request used for Login a user
  fetch("http://localhost:8080/api/v1/email", {
//    fetch("https://smartluggagebackendjwt-c266cf5456e9.herokuapp.com/api/v1/auth/authenticate", {
  // fetch("http://159.65.88.48:8080/api/v1/auth/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ toEmail, subject, body }),
  })
    // .then((res) => res.json())
    .then((res) => {
      console.log("This is response before if statement"+res);
    
      if (!res.ok) { // We should get a 200 (OK) status code if everything is fine/working
        console.log("Probably wrong data");
        alert("Wrong data fix an errors");
        // window.open("/login.html");
        throw Error(`Response status ${res.status} (${res.statusText}): ${json.message}`);    
      }
      else{

        res.json().
        then(json => {
			console.log(json)
        //   let userToken = json.token;
        //   console.log("Print token "+userToken);

        //   localStorage.setItem('userTokenLoginForm', JSON.stringify(json.token));   
        });

        console.log("I have got status 200 data was send successfully  "+res.status);   
        alert("Thank You, we will contact with you shortly.");   
        // window.open("/");
      } 
    
    })
    .catch(exception => {
      console.log(new Map([
          [TypeError, "There was a problem fetching the response."],
          [SyntaxError, "There was a problem parsing the response."],
          [Error, exception.message]
      ]).get(exception.constructor()));
    });
}); //end event listener








