$(document).ready(function () {
  $(window).scroll(function () {
    // Contact section fade-in on scroll
    var contactContent = $(".contact-content");
    var contactTop = contactContent.offset().top + 100;
    if (windowBottom > contactTop) {
      contactContent.addClass("fade-in-active");
    }

    // Skills section fade-in on scroll
    var skillsContent = $(".skills-content");
    var skillsTop = skillsContent.offset().top + 100;
    if (windowBottom > skillsTop) {
      skillsContent.addClass("fade-in-active");
    }

    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }

    // About section fade-in on scroll
    var aboutContent = $(".about-content");
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    var aboutTop = aboutContent.offset().top + 100;
    if (windowBottom > aboutTop) {
      aboutContent.addClass("fade-in-active");
    }

    // Education section fade-in on scroll
    var eduContent = $(".Edu-content");
    var eduTop = eduContent.offset().top + 100;
    if (windowBottom > eduTop) {
      eduContent.addClass("fade-in-active");
    }
  });

  // slide-up button click
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  // smooth scroll on menu item click
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Creative Problem Solver",
      "Modern Web Developer",
      "Database Administrator",
      "Tech Enthusiast",
      "UI/UX Explorer",
    ],
    typeSpeed: 100,
    backSpeed: 20,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false },
    },
  });

  // About Resume button subtle hover effect
  $(".about-content .right a").hover(
    function () {
      $(this).addClass("btn-hover-effect");
    },
    function () {
      $(this).removeClass("btn-hover-effect");
    }
  );
});
