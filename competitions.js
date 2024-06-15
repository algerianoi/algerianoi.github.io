

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
            description: "A competition with a higher difficulty than IOI in which countries of central Europe, and some guest countries like Algeria, reale part with a team of 4 students who compete individually.",
            logo: "img/CEOI.png"
        },
        {
            description: "This competition is held in April of every year in Amman, Jordan in which around 10 Arab countries take part with up to 3 teams of 3 students who work together during the contest, in addition to many Jordanian teams.",
            logo: "img/AFPC.png"
        },
        {
            description: "A competition with a higher difficulty than IOI in which countries of central Europe, and some guest countries like Algeria, reale part with a team of 4 students who compete individually.",
            logo: "img/EGOI.png"
        },
        {
          description: "A 1-day online competition with up to 60 contestants per country who compete individually.",
          logo: "img/APIO.png"
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