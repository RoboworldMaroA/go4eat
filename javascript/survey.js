
//*************************************/
//********   Survey form   ************/
//*************************************/
//POST data to the backend 
// then backend service send email to the user
//and to the owner go4eat 
const formSurvey = document.querySelector(".form");

formSurvey.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formSurvey);
  console.log(formData.get("bodyYourExpectation"));// 1.
  console.log(formData.get("toName"));// 2.
  console.log(formData.get("toSurveyEmail")); // 3.
  console.log(formData.get("toPhoneNumber"));// 4.

  // 5. Get a sex type if customer is male or female
  let selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        console.log('Selected option:', selectedOption.value);
    } else {
        console.log('No option selected');
    }


  console.log(formData.get("toDateOfBirth"));// 6
  console.log(formData.get("toWeight"));// 7
  console.log(formData.get("toHight"));// 8

  // Time of your first meal
  console.log(formData.get("toInputTimeForFirstMeal"));//9
  console.log(formData.get("toHowManyDishesPerDay"));//10

  // 11. Get a value from the ratio check if customer can hat a meal at work  
  let selectedOptionHeatAtHome = document.querySelector('input[name="optionHeatMeal"]:checked');
    if (selectedOptionHeatAtHome) {
        console.log('Selected option:', selectedOptionHeatAtHome.value);
    } else {
        console.log('No option selected');
    }
  

    // 12. Bed time
    console.log(formData.get("toBedTime"));// 12




  // 13. What kind of Food product's do You like best?

  function getCheckedItems() {
    let checkedItems = [];
    document.querySelectorAll('input[name="optionBestProduct"]:checked').forEach((checkbox) => {
        checkedItems.push(checkbox.value);
    });
    console.log('Checked items:', checkedItems);
  }

  // Id display array of the items that was checked
  getCheckedItems();

  // 14. Have you some favorite product's that you would like to find in your diet?
  console.log(formData.get("bodyFavoriteProducts")); // 15

  // 15. Do You drink coffee or Tea with milk and sugar? If yes describe how many time per day.
  console.log(formData.get("bodyTeaOrCoffee")); // 16

  // 16. What type of meat or fish do You eat often?
  function getCheckedMeatItems() {
    let checkedItems = [];
    document.querySelectorAll('input[name="optionMeat"]:checked').forEach((checkbox) => {
        checkedItems.push(checkbox.value);
    });
    console.log('Checked items:', checkedItems);
  }

  getCheckedMeatItems();

  // 17. Does the client suffer from any chronic disease? ... if Yes please describe.
  console.log(formData.get("bodyChronicDisease"));

  // 18. Food intolerance or allergies?
  console.log(formData.get("bodyAllergies"));

  // 19. What do You want to achieve with this program?
  function getCheckedAchieveWithThisProgram() {
    let checkedItems = [];
    document.querySelectorAll('input[name="optionAchieveWithThisProgram"]:checked').forEach((checkbox) => {
        checkedItems.push(checkbox.value);
    });
    console.log('Checked items:', checkedItems);
  }

  getCheckedAchieveWithThisProgram();


  //20.  Time to achieve your goal?(bulking, reduction)
  console.log(formData.get("timeToAchieveYourGoal"));

  
  //21. Your physical activity
  function getCheckedActivities() {
    let checkedItems = [];
    document.querySelectorAll('input[name="optionTypeActivities"]:checked').forEach((checkbox) => {
        checkedItems.push(checkbox.value);
    });
    console.log('Checked items:', checkedItems);
  }

  getCheckedActivities();

  // 22. How many times a week is "Physical Activity" practiced?

  let selectedOptionActivities = document.querySelector('input[name="optionActivities"]:checked');
  if (selectedOptionActivities) {
      console.log('How many activities:', selectedOptionActivities.value);
  } else {
      console.log('No option selected');
  }



  //***************************************************** */
  //***************************************************** */
  // Save to the variable fetched data from the form 
  //0. Get a value from check bo honest survey
  // 5. Get a value if customer is male or female
  let honest = "";
  let selectedOptionHonestOrNot = document.querySelector('input[name="honestlyAnswer"]:checked');
    if (selectedOptionHonestOrNot) {
        honest = "Yes";
        // console.log('Honestly check box is:', honest);
    } else {
        
        console.log('Honesty check box is nos selected');
        // alert("Please check the honesty box");
        // return false;
    }

  // 1.
  const yourExpectation = formData.get("bodyYourExpectation");
  // 2.
  const name = formData.get("toName");
  // 3.
  const surveyEmail = formData.get("toSurveyEmail");
  // 4.
  const phoneNumber = formData.get("toPhoneNumber");

  // 5. Get a value if customer is male or female
  let sex = "";
  let selectedOptionMaleOrFemale = document.querySelector('input[name="option"]:checked');
    if (selectedOptionMaleOrFemale) {
        console.log('Selected option:', selectedOption.value);
        sex = selectedOption.value;
    } else {
        console.log('No option selected');
    }
  // 6.
  const dateOfBirth = formData.get("toDateOfBirth");
  // 7.
  const weight = formData.get("toWeight");
  // 8.
  const height = formData.get("toHight");
  // 9.
  const timeForFirstMeal = formData.get("toInputTimeForFirstMeal");
  // 10.
  const howManyDishesPerDay= formData.get("toHowManyDishesPerDay");

  // 11. Heat At Work 
  let heatAtWork = "";
  let selectedOptionHeatAtHome2 = document.querySelector('input[name="optionHeatMeal"]:checked');
  if (selectedOptionHeatAtHome2) {
    console.log('Selected option:', selectedOptionHeatAtHome2.value);
    heatAtWork = selectedOptionHeatAtHome2.value;
  } else {
    console.log('No option selected');
  }
  // 12.
  const bedTime= formData.get("toBedTime");

  
 // 13. What kind of Food product's do You like best?

 let checkedFavoriteFoodProducts = [];
 function getCheckedItemsBestKindOfFoodProductFromTheList() {
  // let checkedFavoriteFoodProducts = [];
  document.querySelectorAll('input[name="optionBestProduct"]:checked').forEach((checkbox) => {
      checkedFavoriteFoodProducts.push(checkbox.value);
  });
  console.log('Checked items:', checkedFavoriteFoodProducts);

}
getCheckedItemsBestKindOfFoodProductFromTheList()

const favoriteFoodProducts = checkedFavoriteFoodProducts.toString();



// 14 Have you some favorite product's that you would like to find in your diet?
const favoriteProducts = formData.get("bodyFavoriteProducts"); // 15


// 15 Do You drink coffee or Tea with milk and sugar? If yes describe how many time per day.
const teaOrCoffee = formData.get("bodyTeaOrCoffee"); // 16

// 16. What type of meat or fish do You eat often?
let checkedItemsMeatOrFish = [];
function getCheckedMeatItems2() {
  document.querySelectorAll('input[name="optionMeat"]:checked').forEach((checkbox) => {
      checkedItemsMeatOrFish.push(checkbox.value);
  });
  console.log('Checked items:', checkedItemsMeatOrFish);
}

getCheckedMeatItems2();
const meatItems = checkedItemsMeatOrFish.toString();

// 17. Does the client suffer from any chronic disease? ... if Yes please describe.
const chronicDisease = formData.get("bodyChronicDisease");

// 18. Food intolerance or allergies?
const allergies = formData.get("bodyAllergies");

// 19. What do You want to achieve with this program?
let checkedItemsAchieveWithThisProgramList = [];
function getCheckedAchieveWithThisProgram2() {
  // let checkedItemsAchieveWithThisProgramList = [];
  document.querySelectorAll('input[name="optionAchieveWithThisProgram"]:checked').forEach((checkbox) => {
      checkedItemsAchieveWithThisProgramList.push(checkbox.value);
  });
  console.log('Checked items:', checkedItemsAchieveWithThisProgramList);
}
getCheckedAchieveWithThisProgram2();
const whatUserWantToAchieve = checkedItemsAchieveWithThisProgramList.toString();


//20.  Time to achieve your goal?(bulking, reduction)
const timeToAchieveGoal = formData.get("timeToAchieveYourGoal");



 // 21. What type "Physical Activity" practiced?

let checkedItemsPhysicalActivity = [];
function getCheckedActivities2() {
  // let checkedItemsPhysicalActivity = [];
  document.querySelectorAll('input[name="optionTypeActivities"]:checked').forEach((checkbox) => {
      checkedItemsPhysicalActivity.push(checkbox.value);
  });
  console.log('Checked items:', checkedItemsPhysicalActivity);
}
getCheckedActivities2();

const typePhysicalActivity = checkedItemsPhysicalActivity.toString();

// 22. How many times a week is "Physical Activity" practiced?
let howManyActivities = "";
let selectedOptionActivities2 = document.querySelector('input[name="optionActivities"]:checked');
if (selectedOptionActivities2) {
   console.log('Selected option:', selectedOptionActivities2.value);
   howManyActivities = selectedOptionActivities2.value;
} else {
   console.log('No option selected');
}





console.log("1  " + yourExpectation);
console.log("2  " + name);
console.log("3  "+surveyEmail);
console.log("4  "+phoneNumber);
console.log("5  "+sex);
console.log("6  "+dateOfBirth);
console.log("7  "+weight);
console.log("8  "+height);
console.log("9  "+timeForFirstMeal);
console.log("10 "+howManyDishesPerDay);
console.log("11 "+heatAtWork);
console.log("12 "+bedTime);
console.log("13 "+favoriteFoodProducts);
console.log("14 "+favoriteProducts);
console.log("15 "+teaOrCoffee);
console.log("16 "+meatItems);
console.log("17 "+chronicDisease);
console.log("18 "+allergies);
console.log("19 "+whatUserWantToAchieve);
console.log("20 "+timeToAchieveGoal);
console.log("21 "+typePhysicalActivity);
console.log("22 "+howManyActivities);



// function validationSurveyForm(){
  //validation survey form  

  if (honest != "Yes"){
    alert("Please check the honesty box");
      return false;
    }
   
  if(yourExpectation == ""){    
    alert("Please enter your expectation");
    return false;}
  if(name == ""){
    alert("Please enter your name");
    return false;
  }
  if(surveyEmail == ""){
    alert("Please enter your email"); 
    return false;
  }
  if(phoneNumber == ""){
    alert("Please enter your phone number");
    return false;
  }   
  if(sex == ""){
    alert("Please select Male or female");
    return false; 
  }
  if(dateOfBirth == ""){
    alert("Please enter your date of birth");
    return false;
  }   
  if(weight == ""){
    alert("Please enter your weight");  
    return false;   
  }
  if(height == ""){ 
    alert("Please enter your height");
    return false; 
  }
  if(timeForFirstMeal == ""){ 
    alert("Please enter time for first meal");
    return false; 
  }
  if(howManyDishesPerDay == ""){    
    alert("Please enter how many dishes per day");
    return false; 
  }
  if(heatAtWork == ""){
    alert("Please select if you can heat a meal at work");

    return false;
  }
  if(bedTime == ""){    
    alert("Please enter your bed time");
    return false;
  }   
  if(favoriteFoodProducts == ""){
    alert("Please select your favorite food products");
    return false;
  }
  if(favoriteProducts == ""){
    alert("Please enter your favorite products");
    return false;
  }   
  if(teaOrCoffee == ""){
    alert("Please enter if you drink coffee or tea with milk and sugar"); 
    return false;
  }
  if(meatItems == ""){  
    alert("Please select what type of meat or fish do You eat often");
    return false;   
  }
  if(chronicDisease == ""){ 
    alert("Please enter if you suffer from any chronic disease");
    return false; 
  }
  if(allergies == ""){
    alert("Please enter if you have any food intolerance or allergies");
    return false;   
  }
  if(whatUserWantToAchieve == ""){
    alert("Please select what do you want to achieve with this program");
    return false;   
  }
  if(timeToAchieveGoal == ""){      
    alert("Please enter time to achieve your goal");
    return false;   
  }
  if(typePhysicalActivity == ""){   

    alert("Please select what type of physical activity you practice");
    return false; 
  }
  if(howManyActivities == ""){    
    alert("Please select how many times a week is physical activity practiced");
    return false;   
  }       
// }

// validationSurveyForm();
 




    //********************************************************* */
    //Function to fetch data

//   fetch("http://localhost:8080/api/v1/email", {
    fetch("https://go4eat.alwaysdata.net/api/v1/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      yourExpectation,
      name,
      surveyEmail,
      phoneNumber,
      sex,
      dateOfBirth,
      weight,
      height,
      timeForFirstMeal,
      howManyDishesPerDay,
      heatAtWork,
      bedTime,
      favoriteFoodProducts,
      favoriteProducts,
      teaOrCoffee,
      meatItems,
      chronicDisease,
      allergies,
      whatUserWantToAchieve,
      timeToAchieveGoal,
      typePhysicalActivity,
      howManyActivities
     }),
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








