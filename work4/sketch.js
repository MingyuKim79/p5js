let brightDaySky, deepNightSky;
let sunColor, starColor, moonColor;
let gifRecorded = false; 

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(0, 0, 95); 
  noStroke();

  let progress = (sin(frameCount * (TWO_PI / 600)) + 1) / 2; 

  let topState = 1 - progress;      
  let bottomState = progress;       

  // 상단 화면 연출
  
  let topHue = map(topState, 0, 1, 260, 200);
  if (topState < 0.4) {
    topHue = map(topState, 0, 0.4, 260, 30); 
  }
  let topSaturation = map(topState, 0, 1, 80, 40); 
  let topBrightness = map(topState, 0, 1, 15, 95); 
  
  fill(topHue, topSaturation, topBrightness);
  rect(0, 0, 600, 200);

  // 상단 태양 연출 
  let sunAlpha = topState * 100;
  if (sunAlpha > 2) {
    sunColor = color(35, 90, 100, sunAlpha); 
    fill(sunColor);
    let baseSunSize = 80 + sin(frameCount * 0.02) * 4 + cos(frameCount * 0.01) * 2;
    let tSunSize = baseSunSize * topState; 
    ellipse(500, 80, tSunSize, tSunSize);
    
    stroke(sunColor);
    strokeWeight(5 * topState); 
    let rayOffset = cos(millis() * 0.002) * 5 * topState;
    line(500, 80, 500 + (60 * topState) + rayOffset, 80); 
    line(500, 80, 500 - (60 * topState) - rayOffset, 80);
    line(500, 80, 500, 80 - (60 * topState) - rayOffset); 
    line(500, 80, 500, 80 + (60 * topState) + rayOffset);
  }

  // 상단 구름 연출
  noStroke();
  let topCloudAlpha = topState * 90;
  fill(0, 0, 100, topCloudAlpha); 
  
  let cloudX1 = (150 + frameCount * 0.25) % (width + 60) - 60;
  ellipse(cloudX1, 80, 60 * topState, 40 * topState); ellipse(cloudX1 + 30 * topState, 80, 60 * topState, 40 * topState); ellipse(cloudX1 + 15 * topState, 80 - 20 * topState, 60 * topState, 40 * topState);
  
  let cloudX2 = (350 + frameCount * 0.15) % (width + 60) - 60;
  ellipse(cloudX2, 70, 50 * topState, 35 * topState); ellipse(cloudX2 + 25 * topState, 70, 50 * topState, 35 * topState); ellipse(cloudX2 + 12 * topState, 70 - 17 * topState, 45 * topState, 35 * topState);
  
  let cloudX3 = (40 + frameCount * 0.4) % (width + 60) - 60;
  ellipse(cloudX3, 110, 40 * topState, 25 * topState); ellipse(cloudX3 + 20 * topState, 110, 40 * topState, 25 * topState); ellipse(cloudX3 + 10 * topState, 110 - 15 * topState, 35 * topState, 25 * topState);

  let cloudX4 = (500 + frameCount * 0.1) % (width + 80) - 80;
  ellipse(cloudX4, 50, 80 * topState, 50 * topState); ellipse(cloudX4 + 40 * topState, 50, 80 * topState, 50 * topState); ellipse(cloudX4 + 20 * topState, 50 - 25 * topState, 70 * topState, 50 * topState);

  // 상단 밤하늘 연출 (별과 달)
  let topNightAlpha = (1 - topState) * 100; 
  let topNightScale = 1 - topState; 
  if (topNightAlpha > 2) {
    starColor = color(random(45, 65), random(10, 30), 100, topNightAlpha);
    fill(starColor);
    
    ellipse(50, 40, 3 * topNightScale, 3 * topNightScale);     ellipse(80, 50, 5 * topNightScale, 5 * topNightScale);
    ellipse(130, 120, 4 * topNightScale, 4 * topNightScale);   ellipse(180, 30, 3 * topNightScale, 3 * topNightScale);
    ellipse(220, 120, 5 * topNightScale, 5 * topNightScale);   ellipse(260, 60, 4 * topNightScale, 4 * topNightScale);
    ellipse(310, 150, 3 * topNightScale, 3 * topNightScale);   ellipse(350, 40, 4 * topNightScale, 4 * topNightScale);
    ellipse(390, 100, 5 * topNightScale, 5 * topNightScale);   ellipse(430, 140, 5 * topNightScale, 5 * topNightScale);
    ellipse(460, 30, 3 * topNightScale, 3 * topNightScale);     ellipse(540, 150, 4 * topNightScale, 4 * topNightScale);
    ellipse(570, 60, 3 * topNightScale, 3 * topNightScale);
    
    let tMoonSize = 50 * topNightScale;
    moonColor = color(55, 30, 100, topNightAlpha); 
    fill(moonColor);
    ellipse(100, 80, tMoonSize, tMoonSize);
    fill(topHue, topSaturation, topBrightness); 
    ellipse(100 + (12 * topNightScale), 80, tMoonSize * 0.9, tMoonSize);
  }

  // 중앙 구분선
  stroke(0, 0, 0, 100);
  strokeWeight(2);
  line(0, 200, 600, 200);

  // 하단 화면 연출
  let bottomHue = map(bottomState, 0, 1, 260, 200);
  if (bottomState < 0.4) {
    bottomHue = map(bottomState, 0, 0.4, 260, 30);
  }
  let bottomSaturation = map(bottomState, 0, 1, 80, 40);
  let bottomBrightness = map(bottomState, 0, 1, 15, 95);
  
  noStroke();
  fill(bottomHue, bottomSaturation, bottomBrightness);
  rect(0, 200, 600, 200);

  // 하단 밤하늘 연출
  let bottomNightAlpha = (1 - bottomState) * 100;
  let bottomNightScale = 1 - bottomState; 
  if (bottomNightAlpha > 2) {
    starColor = color(random(45, 65), random(10, 30), 100, bottomNightAlpha);
    fill(starColor);
    
    ellipse(40, 240, 4 * bottomNightScale, 4 * bottomNightScale);   ellipse(100, 300, 5 * bottomNightScale, 5 * bottomNightScale);
    ellipse(150, 250, 3 * bottomNightScale, 3 * bottomNightScale);   ellipse(200, 350, 5 * bottomNightScale, 5 * bottomNightScale);
    ellipse(240, 280, 4 * bottomNightScale, 4 * bottomNightScale);   ellipse(280, 360, 3 * bottomNightScale, 3 * bottomNightScale);
    ellipse(300, 320, 5 * bottomNightScale, 5 * bottomNightScale);   ellipse(360, 240, 4 * bottomNightScale, 4 * bottomNightScale);
    ellipse(400, 280, 5 * bottomNightScale, 5 * bottomNightScale);   ellipse(440, 340, 3 * bottomNightScale, 3 * bottomNightScale);
    ellipse(470, 230, 4 * bottomNightScale, 4 * bottomNightScale);   ellipse(500, 380, 5 * bottomNightScale, 5 * bottomNightScale);
    ellipse(550, 310, 3 * bottomNightScale, 3 * bottomNightScale);   ellipse(580, 260, 4 * bottomNightScale, 4 * bottomNightScale);
    
    let bMoonSize = 50 * bottomNightScale;
    moonColor = color(55, 30, 100, bottomNightAlpha);
    fill(moonColor);
    ellipse(100, 280, bMoonSize, bMoonSize);
    fill(bottomHue, bottomSaturation, bottomBrightness); 
    ellipse(100 + (12 * bottomNightScale), 280, bMoonSize * 0.9, bMoonSize);
  }

  // 하단 태양 연출
  let bottomSunAlpha = bottomState * 100;
  if (bottomSunAlpha > 2) {
    sunColor = color(35, 90, 100, bottomSunAlpha);
    fill(sunColor);
    let baseSunSize = 80 + sin(frameCount * 0.02) * 4 + cos(frameCount * 0.01) * 2;
    let bSunSize = baseSunSize * bottomState; 
    ellipse(500, 300, bSunSize, bSunSize);
    
    stroke(sunColor);
    strokeWeight(5 * bottomState);
    let rayOffset = cos(millis() * 0.002) * 5 * bottomState;
    line(500, 300, 500 + (60 * bottomState) + rayOffset, 300); 
    line(500, 300, 500 - (60 * bottomState) - rayOffset, 300); 
    line(500, 300, 500, 300 - (240 - 180) * bottomState - rayOffset); 
    line(500, 300, 500, 300 + (360 - 300) * bottomState + rayOffset);
  }

  // 하단 구름 연출
  noStroke();
  let bottomCloudAlpha = bottomState * 90;
  if (bottomCloudAlpha > 2) {
    fill(0, 0, 100, bottomCloudAlpha);
    
    let bCloudX1 = (100 + frameCount * 0.2) % (width + 60) - 60;
    ellipse(bCloudX1, 280, 60 * bottomState, 40 * bottomState); ellipse(bCloudX1 + 30 * bottomState, 280, 60 * bottomState, 40 * bottomState); ellipse(bCloudX1 + 15 * bottomState, 280 - 20 * bottomState, 60 * bottomState, 40 * bottomState);

    let bCloudX2 = (320 + frameCount * 0.12) % (width + 80) - 80;
    ellipse(bCloudX2, 270, 75 * bottomState, 45 * bottomState); ellipse(bCloudX2 + 35 * bottomState, 270, 75 * bottomState, 45 * bottomState); ellipse(bCloudX2 + 17 * bottomState, 270 - 25 * bottomState, 65 * bottomState, 45 * bottomState);

    let bCloudX3 = (50 + frameCount * 0.3) % (width + 60) - 60;
    ellipse(bCloudX3, 350, 45 * bottomState, 30 * bottomState); ellipse(bCloudX3 + 22 * bottomState, 350, 45 * bottomState, 30 * bottomState); ellipse(bCloudX3 + 11 * bottomState, 350 - 15 * bottomState, 35 * bottomState, 30 * bottomState);
    
    let bCloudX4 = (500 + frameCount * 0.17) % (width + 60) - 60;
    ellipse(bCloudX4, 310, 50 * bottomState, 35 * bottomState); ellipse(bCloudX4 + 25 * bottomState, 310, 50 * bottomState, 35 * bottomState); ellipse(bCloudX4 + 12 * bottomState, 310 - 15 * bottomState, 40 * bottomState, 35 * bottomState);
  }
}

function keyPressed() {
  if ((key === 's' || key === 'S') && !gifRecorded) {
    gifRecorded = true;
    saveGif('Work4', 10);
  }
}