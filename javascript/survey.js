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
//********   Survey form   ************/
//*************************************/
//POST data to the backend 
// then backend service send email to the user
//and to the owner go4eat 
const formLogin = document.querySelector(".form");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formLogin);
  console.log(formData.get("bodyYourGoal"));
  console.log(formData.get("toName"));
  console.log(formData.get("toSurveyEmail"));
  console.log(formData.get("toPhoneNumber"));

  // Get a value if customer is male or female
  let selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        console.log('Selected option:', selectedOption.value);
    } else {
        console.log('No option selected');
    }


  console.log(formData.get("toDateOfBirth"));
  console.log(formData.get("toWeight"));
  console.log(formData.get("toHight"));

  // Time of your first meal
  console.log(formData.get("toInputTimeForFirstMeal"));
  console.log(formData.get("toHowManyDishesPerDay"));

  // Get a value from the ratio check if customer can hat a meal at work  
  let selectedOptionHeatAtHome = document.querySelector('input[name="optionHeatMeal"]:checked');
    if (selectedOptionHeatAtHome) {
        console.log('Selected option:', selectedOptionHeatAtHome.value);
    } else {
        console.log('No option selected');
    }
  

    // Bed time
    console.log(formData.get("toBedTime"));



  // How many times a week is "Physical Activity" practiced?
  let selectedOptionActivities = document.querySelector('input[name="optionActivities"]:checked');
  if (selectedOptionActivities) {
      console.log('Selected option:', selectedOptionActivities.value);
  } else {
      console.log('No option selected');
  }

  // What kind of Food product's do You like best?

  function getCheckedItems() {
    let checkedItems = [];
    document.querySelectorAll('input[name="optionBestProduct"]:checked').forEach((checkbox) => {
        checkedItems.push(checkbox.value);
    });
    console.log('Checked items:', checkedItems);
  }

  // Id display array of the items that was checked
  getCheckedItems();

  // Have you some favorite product's that you would like to find in your diet?
  console.log(formData.get("bodyFavoriteProducts"));

  // Do You drink coffee or Tea with milk and sugar? If yes describe how many time per day.
  console.log(formData.get("bodyTeaOrCoffee"));

  // What type of meat or fish do You eat often?
  function getCheckedMeatItems() {
    let checkedItems = [];
    document.querySelectorAll('input[name="optionMeat"]:checked').forEach((checkbox) => {
        checkedItems.push(checkbox.value);
    });
    console.log('Checked items:', checkedItems);
  }

  getCheckedMeatItems();

  // Does the client suffer from any chronic disease? ... if Yes please describe.
  console.log(formData.get("bodyChronicDisease"));

  // Food intolerance or allergies?
  console.log(formData.get("bodyAllergies"));

  // What do You want to achieve with this program?
  function getCheckedAchieveWithThisProgram() {
    let checkedItems = [];
    document.querySelectorAll('input[name="optionAchieveWithThisProgram"]:checked').forEach((checkbox) => {
        checkedItems.push(checkbox.value);
    });
    console.log('Checked items:', checkedItems);
  }

  getCheckedAchieveWithThisProgram();


  // Time to achieve your goal?(bulking, reduction)
  console.log(formData.get("timeToAchieveYourGoal"));

  // Your physical activity
  function getCheckedActivities() {
    let checkedItems = [];
    document.querySelectorAll('input[name="optionTypeActivities"]:checked').forEach((checkbox) => {
        checkedItems.push(checkbox.value);
    });
    console.log('Checked items:', checkedItems);
  }

  getCheckedActivities();

  // How many times a week is "Physical Activity" practiced?



  // Save to the variable fetched data from the form 
  const name = formData.get("toName");
  const surveyEmail = formData.get("toSurveyEmail");
  const phoneNumber = formData.get("toPhoneNumber");


  

//   fetch("http://localhost:8080/api/v1/email", {
    fetch("https://go4eat.alwaysdata.net/api/v1/email", {
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








