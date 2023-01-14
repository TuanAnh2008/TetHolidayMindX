

// Dark mode
var textContent = document.querySelectorAll('.content__main-detials-text-p');
var btnSwitchMode = document.querySelector(".mode");
// var darkMode = document.querySelector('.black-mode');   
var content = document.querySelector(".content");
btnSwitchMode.onclick = function (e) {
  content.classList.toggle("black-mode");
  var checkMode = content.classList.contains("black-mode");
  console.log(checkMode);
  if (checkMode === true) {
    for (i of textContent) {
       i.style.color = 'white';
    }
    btnSwitchMode.innerHTML = '<i class="mode-dark fa-solid fa-moon"></i>';
  } else {
    for (i of textContent) {
        i.style.color = 'black';
    }
    btnSwitchMode.innerHTML = '<i class="mode-night fa-solid fa-sun"></i>';
  }
};


// ScrollToTop()
function scrollToTop() {
    document.getElementById("toTop");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }