 const changeColorButton1 = document.getElementById("color1");
    changeColorButton1.addEventListener("click", function() {
      changeClassRedBackground();
    });

    const changeColorButton2 = document.getElementById("color2");
    changeColorButton2.addEventListener("click", function () {
        changeClassOrangeBackground();
    });

    const changeColorButton3 = document.getElementById("color3");
    changeColorButton3.addEventListener("click", function () {
        changeClassPurpleBackground();
    });

    const changeColorButton4 = document.getElementById("color4");
    changeColorButton4.addEventListener("click", function () {
        changeClassGreenBackground();
    });

    const changeClassRedBackground= function() {
      const bodyElement = document.body;
      bodyElement.classList.add("red-background");
    }
    
      const changeClassOrangeBackground = function () {
        const bodyElement = document.body;
        bodyElement.classList.add("orange-background");
      };
    
      const changeClassPurpleBackground = function () {
        const bodyElement = document.body;
        bodyElement.classList.add("purple-background");
      };
    
      const changeClassGreenBackground = function () {
        const bodyElement = document.body;
        bodyElement.classList.add("green-background");
      };

