



function cardChecker(cardNumber, delay) {

    const card = document.querySelector('#card' + cardNumber);
    card.classList.remove('slide-in');

    console.log(card.classList);
    const observer = new IntersectionObserver(entries => {
 
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(function(){ 
                    card.classList.add('slide-in');
                    card.classList.remove('moved-down');
                    return;
                }, delay);
    
                }
                else if(!entry.isIntersecting){
                    card.classList.add('moved-down');
   
                }
                card.classList.remove('slide-in');
            });  
    });
    observer.observe(document.querySelector('.card-wrapper'));
    console.log("you are in card number " + cardNumber);
}

cardChecker(1, 0);
cardChecker(2, 250);
cardChecker(3, 500);



window.onscroll = function() {
    scrollFunction()}
    ;



function scrollFunction() {
    let jumboHeight = document.getElementById("top-jumbotron").offsetHeight;                            // the height of the jumbotron is stored in jumboHeight 
    if (document.body.scrollTop > jumboHeight || document.documentElement.scrollTop > jumboHeight) {    //checks to see if the user has scrolled past jumnbotron height    
    document.getElementById("nav-title").style.fontSize = "20px";
    document.getElementById("nav-title").style.visibility = "visible";
    document.getElementById("nav-title").style.opacity = "1";
  } else {
    document.getElementById("nav-title").style.fontSize = "1px";
    document.getElementById("nav-title").style.visibility = "hidden";
    document.getElementById("nav-title").style.opacity = "0";
  }
}

//document.getElementById

//document.getElementById("faqSection").scrollIntoView({
//     behavior: "smooth"
// });


