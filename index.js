//Y_---------------------{  Doctype.js  }---------------------//

//W_------------{  Author      :   Bisakto-Rahi }-------------//
//W_------------{  Create      :   06/02/2025   }-------------//
//W_------------{  Update      :   06/02/2025   }-------------//

//G_------------{  Start Hare  }------------

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