// fetch("https://smartluggagebackend.herokuapp.com/api/v1/trip").then((response) => response.json()).then((TripData) => {
//     // fetch("api/v1/trip/").then((response) => response.json()).then((TripData) => {
//     // console.log("List of items in the trip", TripData);
//     //setTripData(TripData);
//     // calculateLastTripId();
// });


// fetch("https://smartluggagebackend.herokuapp.com/displayUsers").then((response) => response.json()).then((TripData) => {
//     // fetch("api/v1/trip/").then((response) => response.json()).then((TripData) => {
//     // console.log("List of items in the trip", TripData);
//     //setTripData(TripData);
//     // calculateLastTripId();
// });





const text = document.getElementById('paragraphGo4Eat').innerText;
const paragraph = document.getElementById('paragraphGo4Eat');
paragraph.innerHTML = '';

for(let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.innerText = text[i];
    paragraph.appendChild(span);
}

function changeColor(index) {
    if(index < paragraph.children.length) {
        paragraph.children[index].classList.add('highlight');
        setTimeout(() => changeColor(index + 1), 1000);
    }
}







changeColor(0);