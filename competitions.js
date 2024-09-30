

let currentIndex = 1;
showSlide(currentIndex);

function currentSlide(n) {
    showSlide(currentIndex = n);
}

function showSlide(n) {
    let i;
    const slides = [
        {
            description: "A yearly competition, generally between August and September, in which around 90 countries take part, each with a team of 4 students who compete individually aiming for medals.",
            logo: "img/IOI.png" 
        },
        {
            description: "A programming competition organized by European countries similar to IOI, where countries may send up to 4 girls to compete.",
            logo: "img/EGOI.png"
        }
    ];
    
    if (n > slides.length) { currentIndex = 1 }
    if (n < 1) { currentIndex = slides.length }
    
    const description = document.querySelector(".description");
    const logo = document.querySelector(".logo img");
    const card = document.querySelector(".card");

    card.classList.remove('show');
    setTimeout(() => {
      description.innerText = slides[currentIndex - 1].description;
      logo.src = slides[currentIndex - 1].logo;
      card.classList.add('show');
  }, 200);

  const dots = document.querySelectorAll(".dot");
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[currentIndex - 1].className += " active";
}