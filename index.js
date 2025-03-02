function handleMediaQuery(x) {
    if (x.matches) { // If screen width <= 700px
        document.body.style.backgroundColor = "rgb(56, 55, 55)";
    } else { // If screen width > 700px
        document.body.style.backgroundColor = "#023020";
    }
}

const mediaQuery = window.matchMedia("(max-width: 700px)");
handleMediaQuery(mediaQuery); // Initial call
mediaQuery.addEventListener("change", function() {
    handleMediaQuery(mediaQuery);
});

const sayHelloButton = document.querySelector('.great'); 

sayHelloButton.addEventListener('click', function() {
   
    alert('Hello! Thank you for visiting my profile. 😊');

});