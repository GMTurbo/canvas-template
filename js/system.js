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

  var target = {x:0, y:0, r: 10};

  var setup = function() {
    updateSystem();
  };

  function drawSystem() {
    //draw the system here
    context.clearRect(0, 0, width, height);

    drawTarget();
  };

  function updateSystem() {
    //update the system here
    drawSystem();
    reqFrame(updateSystem);
  };

  function drawTarget(){
    context.beginPath();
    context.arc(target.x, target.y, target.r, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
  }

  function onMouseMove(mouse) {
      target.x = mouse.x;
      target.y = mouse.y;
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
