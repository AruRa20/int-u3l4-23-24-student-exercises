// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
myName.innerHTML = "Arifa";
myHobby.innerHTML = "I like to read, crochet/knit, and paint";
myLocation.innerHTML = "I live in Brooklyn, NY";
});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener('click', function(){
image.src = "https://i.pinimg.com/originals/c0/27/c1/c027c12f5123d9ed4d11f505fa6baf99.jpg";
});


// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener('click', function(){
image.src = "https://static.wikia.nocookie.net/1139292c-3c01-44d3-bfc7-32b929fc760c/scale-to-width/755"
});

// BONUS
// 7. Try using different event types for your buttons.
