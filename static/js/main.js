$(document).ready(function () {

  var siteScroll = function() {
    $(window).on('scroll',function(){
      if($(window).scrollTop()>110){
          $('header').addClass('nav-sticky');
      }
      else{
          $('header').removeClass('nav-sticky');
      }
    });
  };
  siteScroll();

  // $("#see-less-button").click(function () {
  //   $(".collapse-items").slideToggle();

  // });

  $('#collapseWorks').html('<i class="fa-solid fa-arrow-up"></i> See Less')
  $("#collapseWorks").click(function () {
    if($(this).html()=='<i class="fa-solid fa-arrow-up"></i> See Less'){
      $(this).html('<i class="fa-solid fa-arrow-down"></i> See More');
    }
    else{
      $(this).html('<i class="fa-solid fa-arrow-up"></i> See Less');
    }
    $(".collapseSteps").slideToggle();
  });

  $('#rolesToggleBtn').click(function () {
    $("#hiddenRoles").slideToggle();
    toggleText(this);
  })

  $('#techToggleBtn').click(function () {
    $("#hiddenTechs").slideToggle();
    toggleText(this);
  })


  function toggleText(text) {
    $(text).text($(text).text() == 'View all' ? 'See Less' : 'View all');
  }

  var button = document.getElementById("seeMoreBtn");
  var text = document.getElementById("collapseText");

  if(button && text){
    var maxChars = 701;
    var excerpt = text.innerHTML.substring(0, maxChars) + "...";

    let fullText = text.innerHTML;

    text.innerHTML = excerpt;

    button.addEventListener("click", function () {
      if (text.innerHTML === excerpt) {
        text.innerHTML = fullText;
        button.innerHTML = "see less";
      } else {
        text.innerHTML = excerpt;
        button.innerHTML = "see more";
      }
    });
  }

  const learnMoreBtns = document.querySelectorAll('.learn-more');

  learnMoreBtns.forEach((btn) => {
    const content = btn.parentElement;
    const fullText = content.querySelector('.full-text');
    fullText.style.display = "none";
    btn.addEventListener('click', () => {
      if (fullText.style.display == 'none') {
        fullText.style.display = 'inline';
        btn.innerHTML = 'Show Less';
      } else {
        fullText.style.display = 'none';
        btn.innerHTML = 'Learn More';
      }
    });
  });

  $(".delete").hide();
  //when the Add Field button is clicked
  $("#addnew").click(function(e) {
    $(".delete").fadeIn("1500");
    //Append a new row of code to the "#items" div
    $("#addResume .row").append(
      '<div class="next-resume col-md-6"><label for="formFile" class="form-label main-label" style="visibility:hidden;">new resume</label><input class="form-control" type="file" id="formFile"></div>'
    );
  });
  $("body").on("click", ".delete", function(e) {
    if ($(".next-resume").length>1) {
      $(".next-resume").last().remove();
    }
    if($(".next-resume").length<2){
       $(".delete").hide();
     }
  });
  
});

if ($('#testimonialSlider').length) {
  $('#testimonialSlider').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplayHoverPause: true,
    smartSpeed: 550,
    autoplay: 6000,
    dots: false,
    navText: ['<i class="icon icon-angle-left"></i>', '<i class="icon icon-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      800: {
        items: 1
      },
      1024: {
        items: 2
      },
      1200: {
        items: 2
      },
      1500: {
        items: 2
      }
    }
  });
}

if ($('.blog-carousel').length) {
  $('.blog-carousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    autoplayHoverPause: true,
    smartSpeed: 550,
    autoplay: false,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      800: {
        items: 1
      },
      1024: {
        items: 1
      },
      1200: {
        items: 1
      },
      1500: {
        items: 1
      }
    }
  });
}

$(document).ready(function () {
  $(".res-btn").click(function () {
    $(".responsive-menu").slideUp();
  });
  $(".responsive-icon").click(function () {
    $(".responsive-menu").slideDown();
  });
  $(".responsive-menu a").click(function () {
    $(".responsive-menu").hide();
  });

  $(".search-icon img").click(function () {
    $(".search-container").fadeToggle();
  });

  $(document).mouseup(function(e) {
    var container = $(".search-container");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.fadeOut();
    }
  });
  $('#closeSearchbar').click(function () {
    $(".search-container").fadeOut();
  })

});