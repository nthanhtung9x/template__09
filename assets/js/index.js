$(document).ready(function(){
    // menu
    $('.menu').click(function(){
        $('.bg__collapse').css({
            'opacity': 1,
            'visibility' : 'visible'    
        },('slow'));

        $('.menu').css({
            'z-index': 3
        },('slow'));

        if($(window).outerWidth(true) >= 1024){
            $('.menu__wrapper').animate({
                'opacity' : 1,
                'width' : '30%'
            },(500));
        }
        else if($(window).outerWidth(true) >= 740 && $(window).outerWidth(true) < 1023){
            $('.menu__wrapper').animate({
                'opacity' : 1,
                'width' : '40%'
            },(500));
        }

        else if($(window).outerWidth(true) <= 740 && $(window).outerWidth(true) >= 481){
            $('.menu__wrapper').animate({
                'opacity' : 1,
                'width' : '50%'
            },(500));
        }
        else{
            $('.menu__wrapper').animate({
                'opacity' : 1,
                'width' : '100%'
            },(500));
        }
    });

    $('.menu__btn').click(function(){
        $('.bg__collapse').css({
            'opacity': 0,
            'visibility' : 'hidden'    
        },('slow'));
        $('.menu__wrapper').animate({
            'opacity' : 0,
            'width' : '0%'
        },(500));

        $('.menu').css({
            'z-index': 4
        },('slow'));
    });

    $('.bg__collapse').click(function(){
        $('.bg__collapse').css({
            'opacity': 0,
            'visibility' : 'hidden'    
        },('slow'));
        $('.menu__wrapper').animate({
            'opacity' : 0,
            'width' : '0%'
        },(500));
    });

    $('#menuHome').click(function(){
        $('.wrapper__item__list:first').slideToggle(500);
    });

    $('#menuPage').click(function(){
            $('.wrapper__item__list:last').slideToggle(500);
        
    });
    
    $('#menuAccount').click(function(e){
        e.stopPropagation();
        $('.wrapper__item__child__list').slideToggle(500);
    });

    
    
    // scroll
    function otherFunc(){
        console.log($(this).scrollTop());
        // feature
        if($(this).scrollTop() >= 300 && $(this).scrollTop() < 800){
            $('.feature__wrap').animate({
                'opacity' : 1,
                'left' : 0
            },('slow'));
            $('.feature__img').animate({
                'opacity' : 1,
                'right' : 0
            },('slow'));
        }

        // process
        if($(this).scrollTop() >= 800 && $(this).scrollTop() < 1330){
            $('.process__heading').animate({
                'bottom' : 0,
                'opacity' : 1
            },(1000));

            $("li.process__item:first-child").fadeIn(400);
            $("li.process__item:nth-child(2)").fadeIn(800);
            $("li.process__item:nth-child(3)").fadeIn(1200);
            $("li.process__item:nth-child(4)").fadeIn(1600);
            $("li.process__item:last-child").fadeIn(2000);
        }

        // app
        if($(this).scrollTop() >= 1330 && $(this).scrollTop() < 2230){
            $('.app__content__bold').animate({
                'opacity': 1,
                'bottom' : 0
            },(500));

            $('.app__content__heading').animate({
                'opacity': 1,
                'bottom' : 0
            },(500));

            $('div.app__left:first-child').animate({
                'opacity' : 1,
                'left' : 0
            },(1000));

            $('div.app__left:last-child').animate({
                'opacity' : 1,
                'left' : 0
            },(1500));

            $('div.app__right:first-child').animate({
                'opacity' : 1,
                'right' : 0
            },(1000));

            $('div.app__right:last-child').animate({
                'opacity' : 1,
                'right' : 0
            },(1500));
        }

        // team

        if($(this).scrollTop() >= 2400 && $(this).scrollTop() < 3050){
          $('#team__content__bold').animate({
            'opacity' : 1,
            'bottom' : 0
          },(1000));

          $('#team__content__heading').animate({
            'opacity' : 1,
            'bottom' : 0
          },(1000));
        }

        if($(this).scrollTop() >= 3050 && $(this).scrollTop() < 3300) {
            $('.offer__heading').animate({
                'opacity' : 1,
                'bottom' : 0
            },(1000));
        }
        if($(this).scrollTop() >= 3300 && $(this).scrollTop() < 4100) {
            $('.offer__wrapper').animate({
                'opacity' : 1,
                'bottom' : 0
            },(1000));
        }

        if($(this).scrollTop() >= 4100) {
            $('.feedback__text').animate({
                'opacity' : 1,
                'bottom' : 0
            },(1000));

            $('.feedback__heading').animate({
                'opacity' : 1,
                'bottom' : 0
            },(1000));
        }

        if($(this).scrollTop() >= 350){
            $('.scroll').addClass("scroll__active");
        } else{
            $('.scroll').removeClass("scroll__active");
        }

        if($(this).scrollTop() >= 66) {
            $('.header__top').addClass("header__scroll-active");
            $('.header').css('margin-top', '76px');
        } else {
            $('.header__top').removeClass("header__scroll-active");
            $('.header').css('margin-top', '0px');
        }
    }
    
    var is_scroll = 0;
    // count
    function countFunc(){
        if(is_scroll!=0) 
            return false;
        is_scroll++;
        $('h4.counter__heading').fadeIn(1000);
        $('p.counter__content').fadeIn(1000);
        var counterItem = $('h4.counter__heading').last().css('display');
        if(counterItem == 'block'){
            let text1 = $('h4.counter__heading').first().text();
            let text2 = $('h4.counter__heading').last().text();
            var total1 = 0;
            var total2 = 0;
            counter1();
            counter2();
            function counter1(){
                $('h4.counter__heading').first().text(total1);
                total1++;
                if(total1 <= parseInt(text1)){
                    setTimeout(function(){
                        counter1();
                    },1);
                }
            }
        
            function counter2(){
                $('h4.counter__heading').last().text(total2);
                total2++;
                if(total2 <= parseInt(text2)){
                    setTimeout(function(){
                        counter2();
                    },1);
                }
            }
        }
    }
    $(window).on('scroll',function(){
        if($(this).scrollTop() >= 2230 && $(this).scrollTop() < 2400){
            $(window).on('scroll',countFunc());
        }
        else{
            $(window).on('scroll',otherFunc());
        }
    });
       



    // slide
    var item = document.getElementsByClassName('app__container__slide');
    var index = 0;
    
    $('.app__container__btn').click(function(){
        index++;
        changeImg();

    })

    function changeImg() {
        for(var i = 0; i < item.length; i++){
            $(item[i]).hide();
        }
        if(index >= item.length){
            index = 0;
        }

        $(item[index]).show();   
    }
    changeImg();


    // offer
    var price1 = $('#price1').text();
    var price2 = $('#price2').text();
    var price3 = $('#price3').text();

    $('.offer__left').click(function(){
        $('.offer__chose').removeClass("next");
        $('.offer__chose').toggleClass("prev");
        $(this).css('color', '#fff');
        $('.offer__right').css('color', '#000');
        // price
        $('#price1').text(price1);
        $('#price2').text(price2);
        $('#price3').text(price3);
        $('span.package__time').text('/Month');
    });

    $('.offer__right').click(function(){
        $('.offer__chose').removeClass("prev");
        $('.offer__chose').toggleClass("next");
        $(this).css('color', '#fff');
        $('.offer__left').css('color', '#000');
        // price
        $('#price1').text('$179.55');
        $('#price2').text('$269.55');
        $('span.package__time').text('/Year');
    });

    // package
    var val1 = $('#sale1 > .package__sale').text();
    $('#sale1').hover(function(){
        $('#sale1 > .package__sale').text('Sale');
    });
    $('#sale1').mouseleave(function(){
        $('#sale1 > .package__sale').text(val1);
    });

    var val2 = $('#sale2 > .package__sale').text();
    $('#sale2').hover(function(){
        $('#sale2 > .package__sale').text('Sale');
    });
    $('#sale2').mouseleave(function(){
        $('#sale2 > .package__sale').text(val2);
    });

    var val3 = $('#sale3 > .package__sale').text();
    $('#sale3').hover(function(){
        $('#sale3 > .package__sale').text('Sale');
    });
    $('#sale3').mouseleave(function(){
        $('#sale3 > .package__sale').text(val3);
    });

    // scroll event
    $('.scroll').click(function(){
        $('html, body').animate({
            scrollTop : 0
        },(500));
    });

    $('.content__scroll').click(function(){
        $('html, body').animate({
            scrollTop : 732
        },(500));
    });
});


  // customer

  var slideIndex = 0;

  function changeSlide(val){
      slideIndex += val;
      Slide();
  }

  function Slide(){
      var item = document.getElementsByClassName('customer__item');
      var content = document.getElementsByClassName('customer__container');
      for(var i = 0; i < item.length; i++){
            item[i].style.display = 'none';
            if(content[i].className.indexOf(' active') != -1){
                content[i].className = content[i].className.replace(' active', '');
            }
            content[i].style.display = 'none';

      }

      if(slideIndex >= item.length){
          slideIndex = 0
      }

      if(slideIndex < 0){
          slideIndex = item.length - 1;
      }
      item[slideIndex].style.display = 'block';
      content[slideIndex].style.display = 'block';
      content[slideIndex].className += ' active';
  }

  Slide();