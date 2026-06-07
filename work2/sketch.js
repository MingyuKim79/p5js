function setup() {
  createCanvas(600, 400); 
}

function draw() {
  background(220);

  //피부색 
  fill(255, 252, 235);
  noStroke();

  // 목
  rect(260, 220, 80, 80, 10);

  // 얼굴
  ellipse(300, 170, 160, 200); 

  // 귀
  ellipse(210, 170, 25, 30);
  ellipse(390, 170, 25, 30);

  // 머리카락
  fill(0); 
  arc(300, 100, 160, 110, PI, TWO_PI); 

  rect(220, 90, 20, 55); 
  rect(360, 90, 20, 55);
  rect(220, 90, 160, 55); 

  ellipse(230, 145, 40, 20);
  ellipse(260, 145, 80, 20); 
  ellipse(340, 145, 80, 20); 
  ellipse(370, 145, 40, 20); 

  // 눈 
  noFill();
  stroke(100);
  strokeWeight(2);
  ellipse(265, 175, 35, 25); 
  ellipse(335, 175, 35, 25); 

  noStroke();
  fill(80, 50, 30); 
  ellipse(265, 175, 20, 20);
  ellipse(335, 175, 20, 20);
  fill(0); 
  ellipse(265, 175, 8, 8);
  ellipse(335, 175, 8, 8);

  stroke(50); 
  strokeWeight(1);
  arc(265, 165, 35, 10, PI+0.1, TWO_PI-0.1); 
  arc(335, 165, 35, 10, PI+0.1, TWO_PI-0.1); 

  noStroke();
  fill(255);
  ellipse(269, 171, 4, 4); 
  ellipse(339, 171, 4, 4); 

  // 눈썹 
  stroke(0); 
  strokeWeight(4);
  line(245, 155, 285, 155);
  line(315, 155, 355, 155);

  // 코 
  stroke(80); 
  strokeWeight(2);
  line(303, 185, 296, 205); 
  line(296, 205, 306, 208); 

  // 입
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(300, 225, 40, 15, 0, PI);

  // 귀걸이
  noFill();
  stroke(180); 
  strokeWeight(2);
  ellipse(215, 190, 20, 20);
  ellipse(385, 190, 20, 20);

  // 옷
  noStroke();
  fill(120, 80, 50); 
  
  rect(150, 280, 300, 120, 10);
  
  fill(225, 235, 245);
  arc(300, 280, 80, 60, 0, PI); 
  
  fill(255, 252, 235);
  arc(300, 280, 76, 56, 0, PI);

  fill(0);
  ellipse(300, 325, 8, 8);
  ellipse(300, 350, 8, 8);
  ellipse(300, 375, 8, 8);
}