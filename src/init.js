$(document).ready(function(){
  window.dancers = [];
  window.background = ['http://www.claireramus.com/wp-content/uploads/2012/03/beaker-muppet3.jpg', 'http://wallpapercave.com/wp/04FoKF7.png', 'https://upload.wikimedia.org/wikipedia/commons/0/05/20100726_Kalamitsi_Beach_Ionian_Sea_Lefkada_island_Greece.jpg', 'https://blog.foundersuite.com/wp-content/uploads/2013/09/hack-reactor.jpg'];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    
    if (dancer != Dancer){
      $(dancer.$node[0]).addClass(dancerMakerFunctionName);
    }

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function(event){
    var top = 100;
    for(var i = 0; i < window.dancers.length; i++) {
      var node = window.dancers[i];
      node.setPosition(top, 100);
      top += 125;
    };
  });
  
  var index = 0;
  
  $('.background').on('click', function(event) {
    $('body').css('background-image', "url(" + window.background[index] +")");
    if(index === window.background.length - 1) {
      index = 0;
    } else {
      index++; 
    }
  });
  
});
