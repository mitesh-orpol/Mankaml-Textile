/** ===============

 .. Preloader
 .. AOS


 =============== */

 jQuery(function($) {

    "use strict";
  
  // makes sure the whole site is loaded
   $(document).ready(function(e) {
    $(".loader-blob").fadeOut(),$("#preloader").delay(300).fadeOut("slow",function(){$(this).remove()})

  });

} )

// header fix js

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.mankamal-header');
  const scrollTrigger = window.innerHeight * 0.2;

  window.addEventListener('scroll', function() {
      if (window.scrollY > scrollTrigger) {
          header.classList.add('fixed-header');
      } else {
          header.classList.remove('fixed-header');
      }
  });
});


// {{-- data scroll + , % --}}

$(document).ready(function () {
  $(".numinate").each(function () {
    var $this = $(this);
    var to = $this.data("to");
    $this.text($this.data("from") + " +"); // Initialize with starting value and plus sign
    $({ Counter: $this.data("from") }).animate(
      { Counter: to },
      {
        duration: $this.data("interval") * 100,
        easing: "swing",
        step: function () {
          $this.text(Math.ceil(this.Counter) + " +");
        },
        complete: function () {
          $this.text(to + " +"); // Ensure final value is accurate
        },
      }
    );
  });
});

$(document).ready(function () {
  $(".nate").each(function () {
    var $this = $(this);
    var to = $this.data("to");
    $this.text($this.data("from") + " %"); // Initialize with starting value and percentage sign
    $({ Counter: $this.data("from") }).animate(
      { Counter: to },
      {
        duration: $this.data("interval") * 500,
        easing: "swing",
        step: function () {
          $this.text(Math.ceil(this.Counter) + " %");
        },
        complete: function () {
          $this.text(to + " %"); // Ensure final value is accurate
        },
      }
    );
  });
});

// faq  start //

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// faq  end  //






// AOS.init({
//   offset: 200, 
//   duration: 600,  
//   easing: 'ease-in-out',  
//   delay: 100,  
//   once: true,  
//   mirror: false,  
// });


