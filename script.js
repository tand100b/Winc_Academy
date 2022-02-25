function myFunction() {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  const changeColor = (event) => {
    document.body.dataset.background = event.target.dataset.color;
  };
  
  document.querySelectorAll('.color-picker')
    .forEach(e => e.addEventListener('click', changeColor));
    
    document.querySelectorAll('.color-picker')
    .forEach(e => e.addEventListener('click', myFunction));