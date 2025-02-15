
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
  

    // Bed time
    console.log(formData.get("toBedTime"));// 12


  // 13. How many times a week is "Physical Activity" practiced?
  let selectedOptionActivities = document.querySelector('input[name="optionActivities"]:checked');
  if (selectedOptionActivities) {
      console.log('Selected option:', selectedOptionActivities.value);
  } else {
      console.log('No option selected');
  }

  // 14. What kind of Food product's do You like best?

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
  console.log(formData.get("bodyFavoriteProducts")); // 15

  // Do You drink coffee or Tea with milk and sugar? If yes describe how many time per day.
  console.log(formData.get("bodyTeaOrCoffee")); // 16

  // 17. What type of meat or fish do You eat often?
  function getCheckedMeatItems() {
    let checkedItems = [];
    document.querySelectorAll('input[name="optionMeat"]:checked').forEach((checkbox) => {
        checkedItems.push(checkbox.value);
    });
    console.log('Checked items:', checkedItems);
  }

  getCheckedMeatItems();

  // 18. Does the client suffer from any chronic disease? ... if Yes please describe.
  console.log(formData.get("bodyChronicDisease"));

  // 19. Food intolerance or allergies?
  console.log(formData.get("bodyAllergies"));

  // 20. What do You want to achieve with this program?
  function getCheckedAchieveWithThisProgram() {
    let checkedItems = [];
    document.querySelectorAll('input[name="optionAchieveWithThisProgram"]:checked').forEach((checkbox) => {
        checkedItems.push(checkbox.value);
    });
    console.log('Checked items:', checkedItems);
  }

  getCheckedAchieveWithThisProgram();


  //21.  Time to achieve your goal?(bulking, reduction)
  console.log(formData.get("timeToAchieveYourGoal"));

   // 22. How many times a week is "Physical Activity" practiced?
  // Your physical activity
  function getCheckedActivities() {
    let checkedItems = [];
    document.querySelectorAll('input[name="optionTypeActivities"]:checked').forEach((checkbox) => {
        checkedItems.push(checkbox.value);
    });
    console.log('Checked items:', checkedItems);
  }

  getCheckedActivities();

 
  //***************************************************** */
  //***************************************************** */
  // Save to the variable fetched data from the form 
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

  // 13. How many times a week is "Physical Activity" practiced?
  let listOfActivities = "";
  let selectedOptionActivities2 = document.querySelector('input[name="optionActivities"]:checked');
  if (selectedOptionActivities2) {
     console.log('Selected option:', selectedOptionActivities2.value);
     listOfActivities = selectedOptionActivities2.value;
  } else {
     console.log('No option selected');
  }


 // 14. What kind of Food product's do You like best?

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



// Have you some favorite product's that you would like to find in your diet?
const favoriteProducts = formData.get("bodyFavoriteProducts"); // 15


// Do You drink coffee or Tea with milk and sugar? If yes describe how many time per day.
const teaOrCoffee = formData.get("bodyTeaOrCoffee"); // 16

// 17. What type of meat or fish do You eat often?
let checkedItemsMeatOrFish = [];
function getCheckedMeatItems2() {
  document.querySelectorAll('input[name="optionMeat"]:checked').forEach((checkbox) => {
      checkedItemsMeatOrFish.push(checkbox.value);
  });
  console.log('Checked items:', checkedItemsMeatOrFish);
}

getCheckedMeatItems2();
const meatItems = checkedItemsMeatOrFish.toString();

// 18. Does the client suffer from any chronic disease? ... if Yes please describe.
const chronicDisease = formData.get("bodyChronicDisease");

// 19. Food intolerance or allergies?
const allergies = formData.get("bodyAllergies");

// 20. What do You want to achieve with this program?
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


//21.  Time to achieve your goal?(bulking, reduction)
const timeToAchieveGoal = formData.get("timeToAchieveYourGoal");

 // 22. How many times a week is "Physical Activity" practiced?
// Your physical activity

let checkedItemsPhysicalActivity = [];
function getCheckedActivities2() {
  // let checkedItemsPhysicalActivity = [];
  document.querySelectorAll('input[name="optionTypeActivities"]:checked').forEach((checkbox) => {
      checkedItemsPhysicalActivity.push(checkbox.value);
  });
  console.log('Checked items:', checkedItemsPhysicalActivity);
}
getCheckedActivities2();
const amountPhysicalActivity = checkedItemsPhysicalActivity.toString();



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
console.log("13 "+listOfActivities);
console.log("14 "+favoriteFoodProducts);
console.log("15 "+favoriteProducts);
console.log("16 "+teaOrCoffee);
console.log("17 "+meatItems);
console.log("18 "+chronicDisease);
console.log("19 "+allergies);
console.log("20 "+whatUserWantToAchieve);
console.log("21 "+timeToAchieveGoal);
console.log("22 "+amountPhysicalActivity);




    //********************************************************* */
    //Function to fetch data

//   fetch("http://localhost:8080/api/v1/email", {
    fetch("https://go4eat.alwaysdata.net/api/v1/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ yourExpectation,
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
      listOfActivities,
      favoriteFoodProducts,
      favoriteProducts,
      teaOrCoffee,
      meatItems,
      chronicDisease,
      allergies,
      whatUserWantToAchieve,
      timeToAchieveGoal,
      amountPhysicalActivity
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








