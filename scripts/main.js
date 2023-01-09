// Sự kiện onclick tại menu mở các gói mua địa điểm
var modal = document.querySelector(".modal");
var menuIcon = document.getElementById("menu-icon");

menuIcon.onclick = function (e) {
  e.preventDefault();
  modal.style.display = "block";
};

var xIcon = document.querySelector(".modal__out-btn");
xIcon.onclick = function (e) {
  modal.style.display = "none";
};

//  Sự kiện onclick kéo lên đầu trang
function scrollToTop() {
  document.getElementById("toTop");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// đếm ngược thời gian đến tết

var innerCountdown = document.getElementById("countdownTimer");

// lấy  thời gian tết âm lịch (miliseconds)
var newYear = new Date("Jan 22 2023 00:00:00").getTime();

function timeToNewYear() {
  // Lấy thời gian hiện tại (mili giây)
  var now = new Date().getTime();

  // Tính thời gian còn lại (mili giây)
  var timeRemaning = newYear - now;

  // chuyển đơn vị tương ứng sang mili giây
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  /*Tìm ra thời gian theo ngày, giờ, phút giây còn lại thông qua cách chia lấy dư(%) và làm tròn số(Math.floor) trong Javascript*/
  var d = Math.floor(timeRemaning / day);
  var h = Math.floor((timeRemaning % day) / hour);
  var m = Math.floor(((timeRemaning % day) % hour) / minute);
  var s = Math.floor((((timeRemaning % day) % hour) % minute) / second);

  return (innerCountdown.innerHTML = `
        <ul class="countdown-timer-list">
        <li class="counter-timer-list__item">
        <h3>${d}</h3>
       <span>Days</span>
       </li>
      <li class="counter-timer-list__item">
       <h3>${h}</h3>
       <span>Hours</span>
      </li>
      <li class="counter-timer-list__item">
      <h3>${m}</h3>
      <span>Minutes</span>
      </li>
      <li class="counter-timer-list__item">
      <h3>${s}</h3>
      <span>Seconds</span>
      </li>
      </ul>`);
}

setInterval(function () {
  timeToNewYear();
}, 1000);

// Tạo filter() ô search

// Hàm filter
var inputItem = Array.from(document.querySelectorAll(".input-item"));
var inputSearch = document.querySelector("#inputSearch");
function searchUser() {
  // Biến input

  // Một mảng li

  // Tránh sai ghi chữ hoa và thường
  inputSearch.value = inputSearch.value.toLowerCase();

  //  ẩn đi và hiện khi search
  inputItem.forEach(function (course) {
    var text = course.textContent.toLowerCase();
    //   Lấy giá trị từng cái element và so sánh giá trị search
    if (text.indexOf(inputSearch.value) !== -1) {
      course.style.display = "block";
    } else {
      course.style.display = "none";
    }
  });
}

searchUser();

// lấy phần textcontent của phần inputItem và in ra, sau khi in inputItem biến mất
for (var i = 0; i < inputItem.length; i++) {
  inputItem[i].onmousedown = function (e) {
    e.preventDefault();
  };
  inputItem[i].onmousedown = function (e) {
    inputSearch.value = e.target.textContent;
  };
  inputItem[i].onmouseup = function (e) {
    inputItem[i].style.display = "none";
  };
}

// Slick slider
$(document).ready(function () {
  $(".content__place-info-wrap-list").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});

$(".content__place-info-img-wrap").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3500,
});

// dark mode
var btnSwitchMode = document.querySelector(".mode");
// var darkMode = document.querySelector('.black-mode');
var content = document.querySelector(".content");
btnSwitchMode.onclick = function (e) {
  content.classList.toggle("black-mode");
  var checkMode = content.classList.contains("black-mode");
  console.log(checkMode);
  if (checkMode === true) {
    btnSwitchMode.innerHTML = '<i class="mode-dark fa-solid fa-moon"></i>';
  } else {
    btnSwitchMode.innerHTML = '<i class="mode-night fa-solid fa-sun"></i>';
  }
};
// innerHTML ghi đè nên khi ấn vào lần đầu icon-sun sẽ bị ghi đè thành icon-moon, tại vì thêm class black-mode và
// check black mode thành true lọt vào if,

var alertBook = document.querySelector(".content__place-info-btn");

alertBook.onclick = function (e) {
  e.preventDefault();
  modalRegister.style.display = 'block';
};

// Lunar Present
// onclick sẽ hiện pháo hoa, code thư viện
var lunarPresent = document.querySelector(".lunar-present");

lunarPresent.onclick = function (e) {
  // Thư viện canvas-confetii
  // https://www.kirilv.com/canvas-confetti/
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);

  modalNewYear.style.display = "block";
};

// modal tết
var modalNewYear = document.querySelector(".modal-new-year");
var closeModalNewYear = document.querySelector(".close-modal-icon");

closeModalNewYear.onclick = function (e) {
  modalNewYear.style.display = "none";
};

// modal Search
var closeSearchModal = document.querySelector(
  ".modal-search-place-body__box-close"
);
var searchModal = document.querySelector(".modal-search-place");
var searchBtn = document.querySelector(".btn-grad");
// Lấy li - success (array)
var searchItem = Array.from(
  document.querySelectorAll(".modal-search-place .content__place-info-wrap-item")
);

// // Lấy h4 của li - success (array)
// var searchName = Array.from(
//   document.querySelectorAll(".content__place-info-wrap-item-title-h4")
// );

searchBtn.onclick = (e) => {
  e.stopPropagation();
  var inputValue  = inputSearch.value.toLowerCase().trim();
  if(inputValue == '') {
    alert('Input Trống!');
    return searchModal.style.display == 'none';
  }
  searchModal.style.display = "block";
  searchItem.forEach((course) => {
    var h4content = course.querySelector('.content__place-info-wrap-item-title-h4').innerHTML.trim().toLowerCase();
    console.log(h4content);
    // !== -1 là tìm thấy, -1 là không tìm tháy index
   if(h4content.indexOf(inputValue) !== -1) {
    course.style.display = 'block'
   }
   else {
    course.style.display = 'none';
   }
  });

};

closeSearchModal.onclick = e => {
  searchModal.style.display = "none";
};




// logic Register book/buy
var btnConfirm = document.querySelector('.modal-register-box-confirm');
var confirmName = document.getElementById('input-name');
var confirmAge  = document.getElementById('input-age');
var confirmTel = document.getElementById('input-tel');
var confirmMail = document.getElementById('input-email');

var registerModal = btnConfirm.onclick = e => {
 if(registerCheck()) {
  alert('Chúng tôi sẽ liên hệ bạn sau ít phút nữa');
 }
}

function registerCheck()  {
 // Name
if(confirmName.value.length < 8) {
  confirmName.style.borderBottomColor = 'red'
  return false
}
else {
 confirmName.style.borderBottomColor = 'var(--text-green-color)'
}


//  Age
if(confirmAge.value < 13) {
  confirmAge.style.borderBottomColor = 'red'
  return false;
}
else {
 confirmAge.style.borderBottomColor = 'var(--text-green-color)'
}


//  Telephone
if(isNaN(confirmTel.value) || confirmTel.value.length !== 10) {
  confirmTel.style.borderBottomColor = 'red'
  return false
} 
else {
confirmTel.style.borderBottomColor = 'var(--text-green-color)'

}


// Email
if(confirmMail.value.indexOf('@gmail.com') !== -1 && confirmMail.value.length > 10) {
confirmMail.style.borderBottomColor = 'var(--text-green-color)'
return true;

} else {
confirmMail.style.borderBottomColor = 'red'
return false;
}
}

//close register
var registerClose = document.querySelector('.modal-register-box-close');
var modalRegister = document.querySelector('.modal-register')

registerClose.onclick = e => {

modalRegister.style.display = 'none';
}

var bookBtn = document.querySelectorAll('.content__place-info-wrap-item-content-btn');

for(var i of bookBtn) {
 console.log(i);
 i.onclick = e => {
  e.preventDefault();
 modalRegister.style.display = 'block';
 }
}

