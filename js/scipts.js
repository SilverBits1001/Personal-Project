



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



window.onscroll = function() {scrollFunction()};



function scrollFunction() {
    let jumboHeight = document.getElementById("top-jumbotron").offsetHeight;
  if (document.body.scrollTop > jumboHeight || document.documentElement.scrollTop > jumboHeight) {
    document.getElementById("nav-title").style.fontSize = "25px";
    document.getElementById("nav-title").style.visibility = "visible";
    document.getElementById("nav-title").style.opacity = "1";
  } else {
    document.getElementById("nav-title").style.fontSize = "1px";
    document.getElementById("nav-title").style.visibility = "hidden";
    document.getElementById("nav-title").style.opacity = "0";
  }
}

console.log(document.getElementById("top-jumbotron").offsetHeight);