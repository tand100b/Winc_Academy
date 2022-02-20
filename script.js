
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


  const attachEventToChangeColorButton1 = function() {
    const changeColorButton1 = document.getElementById("color1");
    changeColorButton1.addEventListener("click", function() {
      changeClassRedBackground();
    });
  };

 

  const attachEventToChangeColorButton2 = function () {
    const changeColorButton2 = document.getElementById("color2");
    changeColorButton2.addEventListener("click", function () {
        changeClassOrangeBackground();
    });
  };

  const attachEventToChangeColorButton3 = function () {
    const changeColorButton3 = document.getElementById("color3");
    changeColorButton3.addEventListener("click", function () {
        changeClassPurpleBackground();
    });
  };

  const attachEventToChangeColorButton4 = function () {
    const changeColorButton4 = document.getElementById("color4");
    changeColorButton4.addEventListener("click", function () {
        changeClassGreenBackground();
    });
  };

  attachEventToChangeColorButton1();
  attachEventToChangeColorButton2();
  attachEventToChangeColorButton3();
  attachEventToChangeColorButton4();  
  
