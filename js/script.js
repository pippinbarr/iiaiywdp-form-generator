/**
It is as if you were doing paperwork form generator
Pippin Barr

In my dreams it will generate single-page forms for people to fill out.
*/

"use strict";

const positivity = [
  "The best preparation for tomorrow is doing your best today.",
    "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "We can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    "Put your heart, mind, and soul into even your smallest acts. This is the secret of success.",
    "Happiness is not something you postpone for the future; it is something you design for the present.",
    "Our mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
    "Keep your face always toward the sunshine - and shadows will fall behind you.",
    "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",
    "Nothing is impossible, the word itself says 'I'm possible'!",
    "What we think, we become.",
    "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
    "Let us sacrifice our today so that our children can have a better tomorrow.",
    "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
    "Believe you can and you're halfway there.",
    "Try to be a rainbow in someone's cloud.",
    "We know what we are, but know not what we may be.",
];
const technologies = [
  "3D Displays",
      "3D Optical Data Storage",
      "3D Printing",
      "3D-TV",
      "4G Cellular Networking",
      "5G Broadband",
      "Abortion",
      "Actuators",
      "Adaptive Optics",
      "Advanced Tactical Lasers",
      "Aerogels",
      "Aeroscraft",
      "Aesthetic Medicine",
      "Agricultural Robotics",
      "Agricultural Science",
      "Airborne Wind Turbines",
      "Aircraft Flight Control Systems",
      "Airless Tires",
      "Alternative Fuel Vehicles",
      "Aluminium",
      "Ambient Intelligence",
      "Amorphous Metals",
      "Analogue Electronics",
      "Android",
      "Animal Husbandry",
      "Answer Machines",
      "Anti-Gravity Technology",
      "Antimatter Weapons",
      "Arcologies",
      "Artificial Brains",
      "Artificial Gravity Systems",
      "Artificial Intelligence",
      "Artificial Passengers",
      "Artificial Photosynthesis",
      "Asteroid Mining",
      "Atmospheric Carbon Dioxide Removal",
      "Atomtronics",
      "Augmented Reality",
      "Automated Guided Vehicles",
      "Autonomous Buildings",
      "Autonomous Cars",
      "Autonomous Research Robots",
      "Autonomous Robotics",
      "Autonomous Underwater Vehicles",
      "Autostereoscopic Displays",
      "Backpack Helicopters",
      "Banotechnology",
      "Barcodes",
      "Batteries",
      "Bead Washing Machines",
];

const WIDTH = 2550/2.1;
const HEIGHT = 3300/2.1;
const TOTAL_FORMS = 2;
const MARGIN = 25;
const SPACING = 20;

const TITLE_HEIGHT = 36;
const TEXT_HEIGHT = 16;

const CHECK = `⃞`;

let x = MARGIN;
let y = MARGIN;

let formNum = 1;

function preload() {

}

function setup() {
  createCanvas(WIDTH,HEIGHT);

  // Base styling
  background(250);
  textFont(`sans-serif`);
  textAlign(LEFT, TOP);
  textSize(TEXT_HEIGHT);
  fill(0);
  stroke(0);

  // frameRate(1);
}

function draw() {
  x = 0;
  y = 0;

  background(255);
  margins();
  title();
  outerBox();
  introduction();

  // saveCanvas(`form-${formNum}`, `png`);
  formNum++;

  if (formNum > TOTAL_FORMS) {
    noLoop();
  }
}

function margins() {
  x = MARGIN;
  y = MARGIN;
}

function title() {
  push();
  textSize(TITLE_HEIGHT);
  textStyle(BOLD);
  let h = drawText(random(technologies).toUpperCase(), x, y, width - 2*x);
  pop();

  y += h;
  y += SPACING;
}

function outerBox() {
  push();
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(x,y,width-2*x,height-2*y);
  pop();

  x += MARGIN;
  y += MARGIN;
}

function introduction() {
  push();
  textSize(TEXT_HEIGHT);
  let h = drawTexts([generateParagraph(3), generateParagraph(2)], x, y, width - 2*x);
  pop();

  y += h;

  drawCheckboxes(x, y, width - 2*x, 10);
}

function drawText(string, x, y, w) {
  let h = 0;
  let words = string.split(/ /);
  let result = ``;
  let line = ``;
  let height = textAscent() + textDescent();
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let test = line + word + ` `;
    if (textWidth(test) > w) {
      result += `\n${word} `;
      line = `${word} `;
      height += textAscent() + textDescent();
    }
    else {
      line += `${word} `;
      result += `${word} `;
    }
  }
  text(result, x, y);
  return height;
}

function drawTexts(array, x, y, w) {
  let totalH = 0;

  for (let i = 0; i < array.length; i++) {
    let h = drawText(array[i], x, y, w);
    y += h + SPACING;
    totalH += h + SPACING;
  }
  return totalH;
}

function generateParagraph(number) {
  let result = ``;
  for (let i = 0; i < number; i++) {
    result += random(positivity) + ` `;
  }
  return result;
}

function drawCheckboxes(x, y, w, n) {
  let h = 0;

  let checkboxes = ``;
  h += textHeight();
  let line = ``;
  let techs = [];
  for (let i = 0; i < n; i++) {
    let tech = random(technologies);
    while (techs.indexOf(tech) !== -1) {
      tech = random(technologies);
    }
    techs.push(tech);
    let checkbox = `${CHECK} ${tech} `;
    if (textWidth(line + checkbox) > w) {
      checkboxes += `\n${checkbox} `;
      line = `${checkbox} `;
      h += textHeight();
    }
    else {
      checkboxes += `${checkbox} `;
      line += `${checkbox} `
    }
  }

  let toCheck = ``;
  for (let i = 0; i < techs.length; i++) {
    if (Math.random() < 0.15) {
      toCheck += `${techs[i]}, `;
    }
  }
  if (toCheck === ``) {
    toCheck = `${random(techs)}, `;
  }

  toCheck = toCheck.replace(/,\s$/, ``);

  let textH = drawText(`CHOOSE ${toCheck}:`, x, y, w);
  y += textH + SPACING;
  text(checkboxes, x, y);
}

function textHeight() {
  return textAscent() + textDescent();
}
