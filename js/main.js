"use strict";
// Header Possition
(function () { 
  window.addEventListener('scroll', function() {
    var scrollTop = (window.scrollTop !== undefined) ? window.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var header = document.querySelector('.header');
    var sectionTop = document.querySelector('.section__container'); 
    var  sectionTopH = sectionTop.clientHeight;
    (scrollTop >= sectionTopH) ? header.classList.add('header--fixed'): header.classList.remove('header--fixed');
  });

  // Menu toggle
  var menuBtn = document.querySelector('.menu__button');
  var btnBox = document.querySelector('.menu__button-box');
  menuBtn.addEventListener('click', function () {
    !btnBox.classList.contains('menu__button-box--toggle') ? btnBox.classList.add('menu__button-box--toggle') : setTimeout(function () {
      btnBox.classList.remove('menu__button-box--toggle');
    }, 500);
    var btnItem2 = document.querySelector('.menu__button-item2');
    !btnItem2.classList.contains('menu__button-item2--toggle') ? btnItem2.classList.add('menu__button-item2--toggle') : setTimeout(function () {
      btnItem2.classList.remove('menu__button-item2--toggle');
    }, 500);
    var btnItem1 = document.querySelector('.menu__button-item1');
    btnItem1.classList.toggle('menu__button-item1--toggle');
    var btnItem3 = document.querySelector('.menu__button-item3');
    btnItem3.classList.toggle('menu__button-item3--toggle');
    var menuBar = document.querySelector('.menu');
    menuBar.classList.toggle('menu--toggle');
  });

  
  // Form call/close
  let backCall = document.querySelector('.section__btn-first');
  let btnSecond = document.querySelector('.section__btn-second ');
  let formBlock = document.querySelector('.form');
  let formInner = document.querySelector('.form__inner');

  btnSecond.addEventListener('click', function (evt) {
    evt.preventDefault();
    formBlock.classList.add('form--active');
    setTimeout(function () {
      formInner.classList.add('form__inner--active');
    }, 200);
  }, false);

  backCall.addEventListener('click', function (evt) {
    evt.preventDefault();
    formBlock.classList.add('form--active');
    setTimeout(function () {
      formInner.classList.add('form__inner--active');
    }, 200);
  }, false);

  // Form Close
  var closeForm = document.querySelector('.close');
  var closeFormSecond = document.querySelector('.close--second');
  var checkMarkBtn = document.querySelector('.checkMark__btn');
  closeForm.addEventListener('click', function () {
    formInner.classList.remove('form__inner--active');
    setTimeout(function () {
      formBlock.classList.remove('form--active');
    }, 500);
  });
  closeFormSecond.addEventListener('click', function () {
    setTimeout(function () {
      formModal.classList.remove('form__modal--active');
    }, 200);
  });
  checkMarkBtn.addEventListener('click', function () {
    setTimeout(function () {
      formModal.classList.remove('form__modal--active');
    }, 200);
  });
  
  
  // Validation
  const nameReg =  /^[a-zA-Zа-яА-Я]{4,20}$/;
  const telReg = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/; 
  let form = formInner;
  let formName = form.querySelector('#name');
  let formTel = form.querySelector('#phone');
  let formCheckbox = form.querySelector('#checked');
  let formModal = document.querySelector('.form__modal');
  let checkboxText = document.querySelector('.checkbox__text');
  formName.addEventListener('keyup', function(){
    if(!nameReg.test(formName.value)){
      formName.style.color = 'red';
    } else {
      formName.style.color = 'black';
      formName.style.borderColor = 'rgba(0, 0, 0, 0.2)';
    }
  },false);
  formTel.addEventListener('keyup', function(){
    if(!telReg.test(formTel.value)){
      formTel.style.color = 'red';
    } else {
      formTel.style.color = 'black';
      formTel.style.borderColor = 'rgba(0, 0, 0, 0.2)';
    }
  },false);
  form.addEventListener('submit', function(evt){
    evt.preventDefault();
    if(!formName.value || !formTel.value || !formCheckbox.checked)  {
      (!formName.value) ? formName.style.borderColor = 'red' :
      formName.style.borderColor = 'rgba(0, 0, 0, 0.2)';
      (!formTel.value) ? formTel.style.borderColor = 'red' :
      formTel.style.borderColor = 'rgba(0, 0, 0, 0.2)';
      (!formCheckbox.checked) ? checkboxText.style.color = 'red' : 
        checkboxText.style.color = '#2B2D3A';
        
    } else {
      formModal.classList.add('form__modal--active'),
      form.reset()
      formName.style.borderColor = 'rgba(0, 0, 0, 0.2)';
      formTel.style.borderColor = 'rgba(0, 0, 0, 0.2)';
      checkboxText.style.color = '#2B2D3A';
    }
  });
 


  // Pup-Up hide/show
  var pupUpBtn = document.querySelector('.popUp__target');
  var popUp = document.querySelector('.popUp__box');
  pupUpBtn.addEventListener('click', function () {
    popUp.classList.toggle('popUp__box--active');
  });
  var popUpClose = document.querySelector('.popUp__close');
  popUpClose.addEventListener('click', function () {
    popUp.classList.remove('popUp__box--active');
  });
  var menuBtn = document.querySelector('.menu___btn');
  menuBtn.addEventListener('click', function () {
    $form.classList.add('form--active');
    setTimeout(function () {
      $formInner.classList.add('form__inner--active');
    }, 200);
  });

  // Slider Swiper
  let syncSlider = new Swiper ('.slider__content',{
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,  
      allowTouchMove: false,
  })
  let mySwiper = new Swiper ('.section__container',{
      spaceBetween: 30,
      effect: 'fade',
      loop:true,
      loopedSlides: 4,
      allowTouchMove: false,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  })
  mySwiper.controller.control = syncSlider;
  syncSlider.controller.control =mySwiper; 

  


})();