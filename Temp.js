$(document).ready(function(){
  
  $(".scroll").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
  
        window.location.hash = hash;
      });
    }
  });

  $('.navbar-nav>li>a').on('click', function(){
    var toggle =$(".navbar-toggler").is('visible');
    if(toggle){
      $('.navbar-collapse').collapse('hide');
    }
  });

  var controllerHome = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: '.navbar' 
  }).setClassToggle('.welcome','welcome2').addTo(controllerHome);

  var controllerAbout = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: '.section-title1' 
  }).setClassToggle('.section-title1','title1').addTo(controllerAbout);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.section-description1' 
  }).setClassToggle('.section-title2','title2').addTo(controllerAbout);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.section-description2' 
  }).setClassToggle('.section-title3','title3').addTo(controllerAbout);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.section-title1' 
  }).setClassToggle('.fa-leaf','fa-leaf2').addTo(controllerAbout);

  var controllerProduct= new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: '#Products .section-title' 
  }).setClassToggle('#Products .section-title','protitle').addTo(controllerProduct);

  var scene = new ScrollMagic.Scene({
    triggerElement: '#Products .section-title' 
  }).setClassToggle('#Products .sayloHairOil','prodAdd1').addTo(controllerProduct); 

  var scene = new ScrollMagic.Scene({
    triggerElement: '#Products .section-title' 
  }).setClassToggle('#Products .section-description1','descAdd1').addTo(controllerProduct);

  var scene = new ScrollMagic.Scene({
    triggerElement: '#Products .section-description1' 
  }).setClassToggle('#Products .shikakai','prodAdd2').addTo(controllerProduct); 

  var scene = new ScrollMagic.Scene({
    triggerElement: '#Products .section-description1' 
  }).setClassToggle('#Products .section-description2','descAdd2').addTo(controllerProduct);

  var scene = new ScrollMagic.Scene({
    triggerElement: '#Products .section-description2' 
  }).setClassToggle('#Products .facewash','prodAdd3').addTo(controllerProduct);

  var scene = new ScrollMagic.Scene({
    triggerElement: '#Products .section-description2' 
  }).setClassToggle('#Products .section-description3','descAdd3').addTo(controllerProduct);

  var scene = new ScrollMagic.Scene({
    triggerElement: '#Products .section-description3' 
  }).setClassToggle('#Products .syrup','prodAdd4').addTo(controllerProduct);

  var scene = new ScrollMagic.Scene({
    triggerElement: '#Products .section-description3' 
  }).setClassToggle('#Products .section-description4','descAdd4').addTo(controllerProduct);

  var controllerCareer= new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: '#Products .section-description4' 
  }).setClassToggle('#Careers .section-title','Careertitle').addTo(controllerCareer);

  var controllerContactUs= new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: '#Careers ..section-title' 
  }).setClassToggle('#ContactUs .section-title','ContactUstitle').addTo(controllerContactUs);

  var scene = new ScrollMagic.Scene({
    triggerElement: '#Careers .section-title' 
  }).setClassToggle('#ContactUs .para','cinfo').addTo(controllerContactUs);
  
});

