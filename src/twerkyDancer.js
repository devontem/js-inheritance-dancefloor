var makeTwerkyDancer = function(top, left, timeBetweenSteps) { 
  makeDancer.call(this, top, left, timeBetweenSteps);
}

makeTwerkyDancer.prototype = Object.create(makeDancer.prototype);
makeTwerkyDancer.prototype.constructor = makeTwerkyDancer;

makeTwerkyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  
};