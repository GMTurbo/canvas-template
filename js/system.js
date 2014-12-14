var System = function(options) {

  options = _.defaults(options, {
    width: 100,
    height: 100,
    isMobile: false
  });

  if (!options.canvas) {
    console.error("canvas element required for cops and robbas :/");
    return;
  }

  if (!options.reqAnimationFrame) {
    console.error("window.requestAnimationFrame required :/");
    return;
  }

  var canvas = options.canvas,
    width = options.width,
    height = options.height,
    density = options.density,
    reqFrame = options.reqAnimationFrame,
    context = canvas.getContext('2d'),
    initialSetup = true,
    isMobile = options.isMobile;

  var setup = function() {
    updateSystem();
  };

  function drawSystem() {
    //draw the system here
    context.clearRect(0, 0, width, height);
    context.font="30px Verdana";
    context.fillText("Ready to go",width/2 - 50,height/2);
  };

  function updateSystem() {
    //update the system here
    drawSystem();
    reqFrame(updateSystem);
  };

  function onMouseMove(mouse) {

  }

  function onKeyPress(e) {

  }

  function resize(size) {
    width = size.width;
    height = size.height;
    setup();
  }

  return {
    begin: setup,
    resize: resize,
    onMouseMove: onMouseMove,
    onKeyPress: onKeyPress
  }
};
