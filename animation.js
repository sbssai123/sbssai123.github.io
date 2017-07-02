// Scroll to component on page
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Fade down button when mouse hovers over
$(document).ready(function() {
  $("#learn-more img, #learn-more, #learn-more h4").hover(
    function() {
      $(this).stop().animate({"opacity": .6});
    },
    function() {
      $(this).stop().animate({"opacity": 1});
    }
  )
});


// chart animations
Chart.defaults.global.animation.duration = 2500;
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [60]
    }],
    labels: [
      'Java'
    ]
  },
  options: {
    rotation: .7 * Math.PI,
    circumference: 1.5 * Math.PI,
    tooltips: {enabled: false},
    hover: {mode: null},
 legend: {
   display: false,
     labels: {
       display: false
     }
   }
 }
});
