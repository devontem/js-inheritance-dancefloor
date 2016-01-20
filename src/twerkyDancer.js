var TwerkyDancer = function(top, left, timeBetweenSteps) { 
  Dancer.call(this, top, left, timeBetweenSteps);
}

TwerkyDancer.prototype = Object.create(Dancer.prototype);
TwerkyDancer.prototype.constructor = TwerkyDancer;

TwerkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};