// الذهاب الى اعلى الصفحه عند الضغط على زر up
let upTop = document.querySelector(".up");

window.onscroll = function () {
    if (this.scrollY >= 900) {
        upTop.classList.add("show");
    } else {
        upTop.classList.remove("show");
    }
}

upTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
};


// الذهاب للقسم عند الضغط على اللينك الخاص بى
let section = document.querySelectorAll(".navbar ul li .nav-link");

function scrollToSomeWhere(elements) {
  elements.forEach(ele => {
      ele.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(e.target.dataset.section).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
}

scrollToSomeWhere(section);


