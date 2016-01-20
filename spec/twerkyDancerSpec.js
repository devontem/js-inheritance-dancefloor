describe("twerkyDancer", function() {

  var twerkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    twerkyDancer = new TwerkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(twerkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(twerkyDancer, "step");
      expect(twerkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(twerkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(twerkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
