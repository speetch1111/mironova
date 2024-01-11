function func() {
  // var windowWidth = $(window).width();
  // containerWidth = $('.container').width();
  // marginfree = (windowWidth - containerWidth) / 2 - 15;

  // if ($(window).width() > 1025) {
  //   $('.free .container').css({
  //     'margin-left': marginfree
  //   });
  // }

  // if ($(window).width() < 981) {
  //   $('.product-card__slider-wrap').insertAfter($('.product-card__name'));
  // } else {
  //   $('.product-card__slider-wrap').insertAfter($('.product-card__info'));
  // }

}

$(window).resize(func);

$(window).init(func)


$(function () {


  $('.clients__slider').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-prev"><svg><use href="#slider-arrow-simple-prev"></use></svg></button>',
    nextArrow: '<button class="slick-arrow slick-next"><svg><use href="#slider-arrow-simple-next"></use></svg></button>',
    responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,

        }
      },
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });


})

$(function () {
  func();

  $(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height > 0) {
      $('header').addClass('scroll');
    } else {
      $('header').removeClass('scroll');
    }

  });

  $('.header__menu').click(function () {
    $('.header__nav').toggleClass('open');
    $('body').toggleClass('oh');
    $(this).toggleClass('open');
  });

})


// popup
;
(function () {
  window.myLib = {};

  window.myLib.body = document.querySelector('body');

  window.myLib.closestAttr = function (item, attr) {
    var node = item;

    while (node) {
      var attrValue = node.getAttribute(attr);
      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.closestItemByClass = function (item, className) {
    var node = item;

    while (node) {
      if (node.classList.contains(className)) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.toggleScroll = function () {
    myLib.body.classList.toggle('oh');
  };
})();

;
(function () {
  var showPopup = function (target) {
    target.classList.add('is-active');
  };

  var closePopup = function (target) {
    target.classList.remove('is-active');
  };

  myLib.body.addEventListener('click', function (e) {
    var target = e.target;
    var popupClass = myLib.closestAttr(target, 'data-popup');

    if (popupClass === null) {
      return;
    }

    e.preventDefault();
    var popup = document.querySelector('.' + popupClass);

    if (popup) {
      showPopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('popup__close') ||
      target.classList.contains('popup__inner')) {
      var popup = myLib.closestItemByClass(target, 'popup');

      closePopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('keydown', function (e) {
    if (e.keyCode !== 27) {
      return;
    }

    var popup = document.querySelector('.popup.is-active');

    if (popup) {
      closePopup(popup);
      myLib.toggleScroll();
    }
  });
})();

// popup