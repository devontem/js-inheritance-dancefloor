var NaenaeDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

NaenaeDancer.prototype = Object.create(Dancer.prototype);
NaenaeDancer.prototype.constructor = NaenaeDancer;

NaenaeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};