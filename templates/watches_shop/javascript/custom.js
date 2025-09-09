jQuerOs(document).ready(function () {

  //if (jQuerOs("[rel=tooltip]").length) {jQuerOs("[rel=tooltip]").tooltip();}
 // jQuerOs('button').addClass('btn');
// ____________________________________________________________________________________________ resize display

        // var myWidth = 0;
        // myWidth = window.innerWidth;
        // jQuerOs('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
        // jQuerOs(window).resize(function(){
        //     var myWidth = 0;
        //     myWidth = window.innerWidth;
        //     jQuerOs('#size').remove();
        //     jQuerOs('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
        // });

jQuery(".moduletable_newsletter .itp-subscribe_newsletter  form .inputbox").attr("placeholder", "Enter your email...");

// ____________________________________________________________________________________________ responsive menu

  var mainMenu = jQuerOs('.main_menu ul.nav');
  mainMenu.find('li.parent > a').append('<span class="arrow"></span>');
  mainMenu.find(' > li').last().addClass('lastChild');
// ____________________________________________________________________________________________
 
    jQuerOs('.icon-calendar').removeClass('icon-calendar').addClass('fa fa-calendar');
    jQuerOs('.icon-arrow-left').removeClass('icon-arrow-left icon-white').addClass('fa fa-arrow-left');
 // ____________________________________________________________________________________________footer

  var wrapheight = jQuerOs(window).outerHeight() - jQuerOs(".header").outerHeight(true) - jQuerOs("#footer").outerHeight(true);
  jQuerOs("#wrapper").css("min-height" , wrapheight);


  jQuerOs(".userdata div h2, #com-form-login+h2,.vm-orders-list>h1").replaceWith(function(index, oldHTML){
  return jQuerOs("<h3>").html(oldHTML);
  });

  jQuerOs("#com-form-login").prev("h1").replaceWith(function(index, oldHTML){
  return jQuerOs("<h3>").html(oldHTML);
  });

  jQuerOs(".order-view>h2, .userdata div h3").replaceWith(function(index, oldHTML){
  return jQuerOs("<h4>").html(oldHTML);
  });

  // create variables

  var PageMainContent = jQuerOs("body"),
  BaseHeader = jQuerOs(".header"),
  MeniActiveButton = BaseHeader.find(".navbar-toggle"),
  CollapseMeni = BaseHeader.find(".navbar-collapse"),
  ResponsivePageMainContent = "js_response_hide",
  ResponsiveMeniClass = "js_response_meni",
  ResponsiveHeaderClass = "js_response_header",
  MeniArrowFromOpen = "fa-chevron-down",
  MeniArrowFromClose = "fa-chevron-left";


  mainMenu.find('li.parent>a').append('<i class="fa '+MeniArrowFromOpen+'"></i>');


//Fixed Menu____________________________________________________________________


     if (window.innerWidth >= '992'){
        jQuerOs(function(){
            jQuerOs(window).scroll(function() {
                if(jQuerOs(this).scrollTop() >= 290) {
                jQuerOs('.header').addClass('top_fixed_menu');
                }
                else{
                jQuerOs('.header').removeClass('top_fixed_menu');
                }
            });
        });
     }
 

  mainMenu.find('li.parent').hover(function () {

    // full-width

      if (MeniActiveButton.is(':hidden')){

          clearTimeout(jQuerOs.data(this,'timer'));
          jQuerOs(this).children("ul").stop(true,true).show(100);

          jQuerOs(this).siblings().children("ul").delay(50).hide();

      }


  }, function () {

    // responsive

      if (MeniActiveButton.is(':hidden')){

          jQuerOs.data(this,'timer', setTimeout(jQuerOs.proxy(function() {
          jQuerOs(this).children("ul").stop(true,true).delay(400).hide(50);
          }, this), 500));

      }

  });

  /* hide cart if hover meni item */
  

  mainMenu.find('li').hover(function() {

      jQuerOs(".vm_cart_modal").stop().fadeOut();
    
    
      }, function() {
    
  });

       /* hide cart if active mod_virtuemart search */
  jQuerOs("#mod_virtuemart_search").click(function(event) {
  /* Act on the event */
      jQuerOs(".vm_cart_modal").stop().fadeOut();

  });

  jQuerOs(".vm_cart_button").click(function(event) {
      /* Act on the event */

      if (jQuerOs(this).next().is(':visible')){

          jQuerOs(this).next().stop().fadeOut();

      }

      else{

          jQuerOs(this).next().stop().fadeIn();

      }

  });



  MeniActiveButton.click(function(event) {

      /* Act on the event */

          if (jQuerOs(this).hasClass('collapsed')) {

              
              CollapseMeni.addClass(ResponsiveMeniClass).closest(BaseHeader).addClass(ResponsiveHeaderClass).closest(PageMainContent).addClass(ResponsivePageMainContent);


          } 

        
          else {

              
              CollapseMeni.removeClass(ResponsiveMeniClass).closest(BaseHeader).removeClass(ResponsiveHeaderClass).closest(PageMainContent).removeClass(ResponsivePageMainContent);

              mainMenu.find('li.parent>ul').hide(0).siblings('a').children('.fa').removeClass(MeniArrowFromClose).addClass(MeniArrowFromOpen);

          }

    });


  /* response meni item as click */


  mainMenu.find('li.parent > a').click(function(e){

      e.preventDefault();

      if (MeniActiveButton.is(':visible')){

          jQuerOs(this).parent().siblings('.parent').children('.nav-child').slideUp(400).siblings('a').children('.fa').removeClass(MeniArrowFromClose).addClass(MeniArrowFromOpen);

          jQuerOs(this).siblings('.nav-child').slideToggle(400).siblings('a').children('.fa').toggleClass(MeniArrowFromClose).toggleClass(MeniArrowFromOpen);
      } 

  });

 });



