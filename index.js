//Y_---------------------{  Doctype.js  }---------------------//

//W_------------{  Author      :   Bisakto-Rahi }-------------//
//W_------------{  Create      :   06/02/2025   }-------------//
//W_------------{  Update      :   06/02/2025   }-------------//

//G_------------{  Start Hare  }------------

//O_------------{  Auto Slider Script   }-------------//
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 1; //---{ First slide }--
    const totalSlides = 4; //---{ Number of slides }--
    const slideInterval = 3000; //---{ 3 seconds per slide }--

    function nextSlide() {
      currentIndex++;
      if (currentIndex > totalSlides) {
        currentIndex = 1; //Y --{ Reset to first slide }--
      }
      document.getElementById(`slide${currentIndex}`).scrollIntoView({
        behavior: "smooth"
      });
    }

    setInterval(nextSlide, slideInterval);
  });

////_------------{  Auto Slider Script   }-------------//

//O_------------{  Scroll-up Button Script   }-------------//
const scrollUpButton = document.getElementById("scrollUp");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollUpButton.classList.add("show");
        } else {
            scrollUpButton.classList.remove("show");
        }
    });

    scrollUpButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
////_------------{  Scroll-up Button Script   }-------------////










////_----------{  End Hare  }------------////