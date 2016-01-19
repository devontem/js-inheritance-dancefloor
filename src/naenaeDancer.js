var makeNaenaeDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeNaenaeDancer.prototype = Object.create(makeDancer.prototype);
makeNaenaeDancer.prototype.constructor = makeNaenaeDancer;

makeNaenaeDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  $(this.$node[0]).addClass('jello');
};