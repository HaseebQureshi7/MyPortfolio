$(window).on('load', function (){
  $('.loadinganimation').fadeOut('slow');
})


$('.google').on('click', function () {
  window.open('mailto:qureshihaxeeb2@gmail.com');
});
$('.linkedin').on('click', function () {
  window.open('https://www.linkedin.com/in/haseebqureshiishere');
});
$('.instagram').on('click', function () {
  window.open('https://www.instagram.com/Haseebxqureshi');
});
$('.moreprojs').on('click', function () {
  window.open('https://github.com/HaseebQureshi7');
});



// DATE TIME METHODS HERE
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();


var dt = new Date();
var day = dt.getDate()
var month = monthNames[dt.getMonth()];
document.querySelector('.sub h6').innerHTML=month;
var year = dt.getFullYear();
document.querySelector('.sub h3').innerHTML=day;
document.querySelector('.sub h2').innerHTML=year;


// ANIMATION HERE

const timeline = gsap.timeline();

$(".workspage").hide();
$(".contactpage").hide();


function startup(){
    timeline
  .from('.container .intro h1', {duration:.5,
    opacity:0,
    ease:'none', 
  })
  .from('.intro h5', {duration:1.25,
    text: '',
    ease:'none', 
  })
  .from('.date',{duration:.5,
    opacity:0,
    ease:'none', 
  })
  .from('.main',{duration:.5,
    opacity:0,
    ease:'none', 
  })
  .from('.detail',{duration:.5,
    opacity:0,
    ease:'none', 
  })
  .from('.nav',{duration:.5,
    opacity:0,
    ease:'none', 
  })
  .from('.container2',{duration:1,
    opacity:0,
    ease:'none', 
  })
  $(".workspage").hide();
}

startup();

var v = document.querySelector('.nav .work');
function test () {
  $(".container, .container2").hide()

}


$(v).on('click', function (){

  $(".workspage").show()
  timeline
  .from('.intro h1', {duration:.5,
    opacity:0,
    ease:'none', 
    test
  })
  .from('.proj1',{duration:.5,
    opacity:0,
    ease:'none', 
  })
  .from('.proj2',{duration:.5,
    opacity:0,
    ease:'none', 
  })
  .from('.proj3',{duration:.5,
    opacity:0,
    ease:'none', 
  })
  .from('.backhome',{duration:.5,
    opacity:0,
    ease:'none', 
  })
  .from('.moreprojs',{duration:1,
    opacity:0,
    ease:'none', 
  })
});



$('.backhome').on('click', function (){
  $(".container, .container2").show();
  $(".contactpage, workspage").hide();

  startup()
});

$('.about').on('click',()=> {

    window.scroll({
      
      top :1000,
      behavior: 'smooth'
  });  
  console.log('workss')
});
  
$('.contact').on('click', function (){

    $(".contactpage").show()
    $(".container, .container2").hide();


      timeline
      .from('.intro h1', {duration:.5,
        opacity:0,
        ease:'none', 
        test
      })
      .from('.backhome',{duration:.5,
        opacity:0,
        ease:'none', 
      })
      .from('.contactlinks',{duration:1,
        opacity:0,
        ease:'none', 
      })
      .from('.call h3',{duration:1,
        opacity:0,
        ease:'none', 
      })
      .from('.call h6',{duration:1,
        opacity:0,
        text:0,
        ease:'none', 
      })
  });
