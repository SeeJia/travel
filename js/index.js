window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {  // 滚动超过 50px 才添加背景
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

