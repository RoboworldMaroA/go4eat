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




// Change color one time
// const text = document.getElementById('paragraphGo4Eat').innerText;
// const paragraph = document.getElementById('paragraphGo4Eat');
// paragraph.innerHTML = '';

// for(let i = 0; i < text.length; i++) {
//     const span = document.createElement('span');
//     span.innerText = text[i];
//     paragraph.appendChild(span);
// }

// function changeColor(index) {
//     if(index < paragraph.children.length) {
//         paragraph.children[index].classList.add('highlight');
//         setTimeout(() => changeColor(index + 1), 1000);
//     }
// }

// Repeat changing 5 times

// const text = document.getElementById('paragraphGo4Eat').innerText;
// const paragraph = document.getElementById('paragraphGo4Eat');
// paragraph.innerHTML = '';

// for (let i = 0; i < text.length; i++) {
//     const span = document.createElement('span');
//     span.innerText = text[i];
//     span.classList.add('default');
//     paragraph.appendChild(span);
// }

// let cycles = 0;

// function changeColor(index) {
//     if (index < paragraph.children.length) {
//         paragraph.children[index].classList.remove('default');
//         paragraph.children[index].classList.add('highlight');
//         setTimeout(() => changeColor(index + 1), 1000);
//     } else {
//         setTimeout(() => reverseColor(0), 1000);
//     }
// }

// function reverseColor(index) {
//     if (index < paragraph.children.length) {
//         paragraph.children[index].classList.remove('highlight');
//         paragraph.children[index].classList.add('default');
//         setTimeout(() => reverseColor(index + 1), 1000);
//     } else {
//         cycles++;
//         if (cycles < 4) {
//             setTimeout(() => changeColor(0), 1000);
//         }
//     }
// }





document.addEventListener('DOMContentLoaded', () => {
    const movingText = document.getElementById('movingText');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                movingText.classList.add('animate');
                observer.unobserve(movingText);
            }
        });
    });

    observer.observe(movingText);
});








//STay orange
const text = document.getElementById('paragraphGo4Eat').innerText;
const paragraph = document.getElementById('paragraphGo4Eat');
paragraph.innerHTML = '';

for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.innerText = text[i];
    span.classList.add('default');
    paragraph.appendChild(span);
}

let cycles = 0;

function changeColor(index) {
    if (index < paragraph.children.length) {
        paragraph.children[index].classList.remove('default');
        paragraph.children[index].classList.add('highlight');
        setTimeout(() => changeColor(index + 1), 1000);
    } else {
        setTimeout(() => reverseColor(0), 1000);
    }
}

function reverseColor(index) {
    if (index < paragraph.children.length) {
        paragraph.children[index].classList.remove('highlight');
        paragraph.children[index].classList.add('default');
        setTimeout(() => reverseColor(index + 1), 1000);
    } else {
        cycles++;
        if (cycles < 2) {
            setTimeout(() => changeColor(0), 1000);
        } else {
            // Final color change to orange
            for (let i = 0; i < paragraph.children.length; i++) {
                paragraph.children[i].classList.remove('default');
                paragraph.children[i].classList.add('highlight');
            }
        }
    }
}


changeColor(0);