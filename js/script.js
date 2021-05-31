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
    "We can't change the direction of the wind, but Iwecan adjust my sails to always reach my destination.",
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

let x = 50;
let y = 50;
let em = 18;

let formNum = 1;

function preload() {

}

function setup() {
  createCanvas(WIDTH,HEIGHT);

  // Base styling
  background(250);
  textFont(`monospace`);
  textAlign(LEFT, TOP);
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
  introduction();

  // saveCanvas(`form-${formNum}`, `png`);
  formNum++;

  if (formNum > TOTAL_FORMS) {
    noLoop();
  }
}

function margins() {
  push();
  noFill();
  rect(x,y,width-2*x,height-2*y);
  pop();

  x += em;
  y += em;
}

function title() {
  push();
  textSize(24);
  textStyle(BOLD);
  text(random(technologies), x, y);
  pop();

  y += 2*em;
}

function introduction() {
  let intro = ``;
  for (let i = 0; i < 3; i++) {
    intro += `${random(positivity)} `;
  }

  push();
  textSize(18);
  text(intro, x, y, width - 2*x, 100);
  pop();
}
