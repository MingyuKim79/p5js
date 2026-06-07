function setup() {
  createCanvas(600, 400);
  background(240);

  noStroke();

  fill(180, 220, 255);
  rect(0, 0, 600, 200);

  fill(20, 20, 60);
  rect(0, 200, 600, 200);
  
  stroke(0);
  strokeWeight(2);
  line(0, 200, 600, 200);
  
  fill(255, 200, 0);
  ellipse(500, 80, 80, 80);
  
  fill(255);
  ellipse(100, 300, 5, 5);
  ellipse(200, 350, 5, 5);
  ellipse(300, 320, 5, 5);
  ellipse(400, 280, 5, 5);
  ellipse(500, 380, 5, 5);
  
  stroke(255, 200, 0);
  strokeWeight(5);
  line(500, 80, 560, 80);
  line(500, 80, 440, 80);
  line(500, 80, 500, 20);
  line(500, 80, 500, 140);

  noStroke();
  fill(255);
  ellipse(150, 80, 60, 40);
  ellipse(180, 80, 60, 40);
  ellipse(165, 60, 60, 40);
  
  ellipse(300, 80, 60, 40);
  ellipse(330, 80, 60, 40);
  ellipse(315, 60, 60, 40);

}
