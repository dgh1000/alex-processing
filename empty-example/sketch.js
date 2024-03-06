function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    // background(0);
    // hsv(177, 47%, 63%)
    colorMode(HSB, 360, 100, 100);
    if (mouseIsPressed) {
      fill(0,100,100,255);
    } else {
      noFill();
      noStroke();
      // fill(177,47,63);
    }
    // noStroke();
    ellipse(mouseX, mouseY, 80, 80);
  }