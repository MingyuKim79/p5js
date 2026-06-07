let kissX = 300, kissY = 225, kissVelX = 0, kissVelY = 0;
let isKissFlying = false, kissSize = 15;
let p1X = 100, p1Y = -50, p1S = 2;
let p2X = 300, p2Y = -150, p2S = 1.5;
let p3X = 500, p3Y = -250, p3S = 2.5;
let showSakura = false; 

function setup() {
  createCanvas(600, 400); 
}

function draw() {
  if (showSakura) {
    background(255, 240, 245);
    p1Y += p1S; if(p1Y > 400) { p1Y = -20; p1X = random(600); }
    fill(255, 183, 197); noStroke(); ellipse(p1X, p1Y, 10, 7);
    p2Y += p2S; if(p2Y > 400) { p2Y = -20; p2X = random(600); }
    ellipse(p2X, p2Y, 8, 5);
    p3Y += p3S; if(p3Y > 400) { p3Y = -20; p3X = random(600); }
    ellipse(p3X, p3Y, 12, 8);
  } else {
    background(220);
  }

  let eyeDist = 4;
  let angleL = atan2(mouseY - 175, mouseX - 265);
  let eyeLX = 265 + cos(angleL) * eyeDist;
  let eyeLY = 175 + sin(angleL) * eyeDist;
  let angleR = atan2(mouseY - 175, mouseX - 335);
  let eyeRX = 335 + cos(angleR) * eyeDist;
  let eyeRY = 175 + sin(angleR) * eyeDist;

  fill(255, 252, 235); noStroke();
  rect(260, 220, 80, 80, 10);
  ellipse(300, 170, 160, 200);
  ellipse(210, 170, 25, 30); ellipse(390, 170, 25, 30);

  fill(0); arc(300, 100, 160, 110, PI, TWO_PI); 
  rect(220, 90, 20, 55); rect(360, 90, 20, 55); rect(220, 90, 160, 55); 
  ellipse(230, 145, 40, 20); ellipse(260, 145, 80, 20); 
  ellipse(340, 145, 80, 20); ellipse(370, 145, 40, 20); 

  noFill(); stroke(100); strokeWeight(2);
  ellipse(265, 175, 35, 25); 
  if (!mouseIsPressed) { ellipse(335, 175, 35, 25); }

  if (mouseIsPressed) {
    noStroke(); fill(80, 50, 30); ellipse(eyeLX, eyeLY, 20, 20);
    fill(0); ellipse(eyeLX, eyeLY, 8, 8); 
    fill(255); ellipse(eyeLX + 4, eyeLY - 4, 4, 4);
    noFill(); stroke(50); strokeWeight(3); arc(335, 180, 35, 20, PI, TWO_PI);
    noStroke(); fill(255, 180, 180, 150); ellipse(250, 205, 20, 14); ellipse(350, 205, 20, 14);
    fill(30); ellipse(297, 227, 12, 16); ellipse(303, 227, 12, 16); ellipse(300, 230, 18, 12);
    fill(255, 252, 235); ellipse(300, 227, 6, 8);
  } else {
    noStroke(); fill(80, 50, 30); 
    ellipse(eyeLX, eyeLY, 20, 20); ellipse(eyeRX, eyeRY, 20, 20);
    fill(0); ellipse(eyeLX, eyeLY, 8, 8); ellipse(eyeRX, eyeRY, 8, 8);
    fill(255); ellipse(eyeLX + 4, eyeLY - 4, 4, 4); ellipse(eyeRX + 4, eyeRY - 4, 4, 4);
    noFill(); stroke(0); strokeWeight(2); arc(300, 225, 40, 15, 0, PI);
  }

  stroke(50); strokeWeight(1); noFill();
  arc(265, 165, 35, 10, PI+0.1, TWO_PI-0.1); 
  if (!mouseIsPressed) { arc(335, 165, 35, 10, PI+0.1, TWO_PI-0.1); }
  stroke(0); strokeWeight(4); line(245, 155, 285, 155); line(315, 155, 355, 155);
  stroke(80); strokeWeight(2); line(303, 185, 296, 205); line(296, 205, 306, 208); 

  noFill(); stroke(180); strokeWeight(2); ellipse(215, 190, 20, 20); ellipse(385, 190, 20, 20);
  noStroke(); fill(120, 80, 50); rect(150, 280, 300, 120, 10);
  fill(225, 235, 245); arc(300, 280, 80, 60, 0, PI); 
  fill(255, 252, 235); arc(300, 280, 76, 56, 0, PI);
  fill(0); ellipse(300, 325, 8, 8); ellipse(300, 350, 8, 8); ellipse(300, 375, 8, 8);

  if (isKissFlying) {
    fill(255, 80, 80, 220); noStroke();
    ellipse(kissX - kissSize/4, kissY, kissSize/2, kissSize/2);
    ellipse(kissX + kissSize/4, kissY, kissSize/2, kissSize/2);
    triangle(kissX - kissSize/2, kissY + kissSize/6, kissX + kissSize/2, kissY + kissSize/6, kissX, kissY + kissSize);
    kissX += kissVelX; kissY += kissVelY; kissVelY += 0.1; kissSize += 0.2;
    if (kissY > 400) isKissFlying = false;
  }
}

function mouseClicked() {
  isKissFlying = true;
  kissX = 300; kissY = 225; kissSize = 15;
  kissVelX = map(mouseX, 0, 600, -5, 5); kissVelY = -6;
}

function keyPressed() {
  if (key === 's' || key === 'S') showSakura = !showSakura;
  if (key === 'g' || key === 'G') saveGif('result.gif', 10);
}