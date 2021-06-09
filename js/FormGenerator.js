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

function FormGenerator(p) {

  const WIDTH = 2550/2.15;
  const HEIGHT = 3300/2.152 ; //3300/2.155;
  const TOTAL_FORMS = 2;
  const MARGIN = 25;
  const SPACING = 20;
  const DEFAULT_PADDING = 10;

  const TITLE_HEIGHT = 36;
  const TEXT_HEIGHT = 20;
  const LINE_WEIGHT = 2;

  const CHECK = `⃞`;

  let x = MARGIN;
  let y = MARGIN;

  let sectionNum = 1;

  p.preload = function() {

  }

  p.setup = function() {
    p.createCanvas(WIDTH,HEIGHT);

    // Base styling
    p.background(250);
    p.textFont(`sans-serif`);
    p.textAlign(p.LEFT, p.TOP);
    p.textSize(TEXT_HEIGHT);
    p.fill(0);
    p.stroke(0);
  }

  p.draw = function() {
    x = 0;
    y = 0;
    sectionNum = 1;

    p.background(255);
    margins();
    outerBox();
    drawTitle();
    drawIntro();

    p.stroke(0);

    // saveCanvas(`form-${formNum}`, `png`);
    formNum++;
    if (formNum < MAX_FORMS) {
      let newP = new p5(FormGenerator);
    }
    else {
      console.log("FINISHED");
    }
    p.noLoop();
  }

  function margins() {
    // x = MARGIN;
    // y = MARGIN;
  }

  function drawTitle() {
    let title = text(p.random(technologies).toUpperCase(), WIDTH, DEFAULT_PADDING, TITLE_HEIGHT, p.BOLD);
    p.image(title, x, y);

    y += title.height;

    drawLine(x, y, x + p.width, y);
  }

  function outerBox() {
    p.push();
    p.noFill();
    p.stroke(0);
    p.strokeWeight(2);
    p.rect(x+1,y+1,p.width-2,p.height-2);
    p.pop();
  }

  function drawLine(x, y, x2, y2) {
    p.push();
    p.stroke(0);
    p.strokeWeight(LINE_WEIGHT);
    p.line(x, y, x2, y2);
    p.pop();
  }

  function drawIntro() {
    let e;

    // Introduction paragraphs
    p.push();
    p.textSize(TEXT_HEIGHT);
    e = texts([generateParagraph(3), generateParagraph(2)], WIDTH);
    bounding(e);
    p.image(e, x, y);
    y += e.height;
    e.remove();
    p.pop();

    const formTop = y;

    generateFormColumn(x, y);
    generateFormColumn(x + WIDTH/2, y);


    x = WIDTH/2;
    y = formTop;
  }

  function generateFormColumn(x, y) {
    let generators = [checkboxes, signature, date, numbers, stamp, initials, paragraphs];

    let spins = 0;
    while (y < HEIGHT) {
      let generator = p.random(generators);
      let element = generator(WIDTH/2);
      if (y + element.height > HEIGHT) {
        if (spins < 20) {
          spins++;
          continue;
        }
        else {
          break;
        }
      }
      else {
        spins = 0;
        // Can fit it, so add it on and continue
        p.image(element, x, y);
        y += element.height;
        element.remove();
      }
    }
  }

  function texts(array, w, padding = DEFAULT_PADDING, size = TEXT_HEIGHT, style = p.NORMAL) {
    let g = p.createGraphics(w,HEIGHT);
    let x = 0;
    let y = 0;
    let h = 0;

    for (let i = 0; i < array.length; i++) {
      let paragraph = text(array[i], w, padding, size, style);
      g.image(paragraph, x, y);
      y += paragraph.height;
      h += paragraph.height;
      paragraph.remove();
    }
    g.height = h;

    return g;
  }

  function text(string, w, padding = DEFAULT_PADDING, size = TEXT_HEIGHT, style = p.NORMAL) {
    let g = p.createGraphics(w, HEIGHT);
    let x = 0;
    let y = 0;

    g.push();
    g.textStyle(style);
    g.textSize(size);
    g.textAlign(p.LEFT, p.TOP);
    g.noStroke();

    let words = string.split(/ /);
    let result = ``;
    let line = ``;
    let h = textHeight(g) + 2*padding;

    x += padding;
    y += padding;

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let test = line + word + ` `;
      if (g.textWidth(test) > w - 2*padding) {
        result += `\n${word} `;
        line = `${word} `;
        h += textHeight(g);
      }
      else {
        line += `${word} `;
        result += `${word} `;
      }
    }
    g.text(result, x, y)
    g.pop();

    g.height = h;

    return g;
  }

  function highlighter(w, padding = DEFAULT_PADDING) {
    let g = p.createGraphics(w, HEIGHT);
    let x = 0;
    let y = 0;

    let paras = [generateParagraph(), generateParagraph(), generateParagraph()];

    let headerImage = text(`${getSectionNum()} HIGHLIGHT the words inside parentheses`, w, padding, TEXT_HEIGHT, p.BOLD);
    g.image(headerImage, x, y);
    y += headerImage.height;

    for (let i = 0; i < paragraphs.length; i++) {
      let words = paras[i].split(` `);
      for (let j = 0; j < words.length; j++) {
        let word = words[j];
        let last = word[word.length-1];
        if (Math.random() < 0.25 && !`.,:'"?!%`.includes(last) && word.length > 4) {
          words[j] = `<${word}>`
        }
      }
      paras[i] = words.join(` `);
    }

    let textsImage = texts(paras, w, padding);
    g.image(textsImage, x, y);

    g.height = headerImage.height + textsImage.height;

    headerImage.remove();
    textsImage.remove();

    bounding(g);

    return g;
  }

  function checkboxes(w, padding = DEFAULT_PADDING) {
    let g = p.createGraphics(w, HEIGHT);
    let x = 0;
    let y = 0;
    let h = 0;
    let n = Math.floor(p.random(3, 10));

    g.push();
    g.textSize(TEXT_HEIGHT);
    g.textStyle(p.NORMAL);
    g.noStroke();
    g.fill(0);

    let checkboxesString = ``;

    // First we pre-calculate the results of all the checkboxes
    h += textHeight(g) + padding;
    let line = ``;
    let techs = [];
    for (let i = 0; i < n; i++) {
      let tech = p.random(technologies);
      while (techs.indexOf(tech) !== -1) {
        tech = p.random(technologies);
      }
      techs.push(tech);

      let checkbox = `${CHECK} ${tech} `;
      if (p.textWidth(line + checkbox) > w - 2*padding) {
        checkboxesString += `\n${checkbox} `;
        line = `${checkbox} `;
        h += textHeight(g);
      }
      else {
        checkboxesString += `${checkbox} `;
        line += `${checkbox} `
      }
    }
    let chooseTechs = techs.filter((item) => Math.random() < 0.15);
    let toCheck = chooseTechs.join(`, `)
    if (toCheck === ``) {
      toCheck = `${p.random(techs)}`;
    }

    let header = text(`${getSectionNum()} SELECT ${toCheck}:`, w, padding, TEXT_HEIGHT, p.BOLD);
    g.image(header, x, y);

    y += header.height;
    h += header.height;
    header.remove();

    // Draw the checkboxes themselves
    x += padding;
    y += padding * 2;
    g.text(checkboxesString, x, y);
    g.pop();

    // Adjust the true height
    g.height = h + padding;

    bounding(g);

    return g;
  }

  function date(w, padding = DEFAULT_PADDING) {
    let dateText = `${getSectionNum()} ENTER DATE: __/__/____`;
    let g = text(dateText, w, padding, TEXT_HEIGHT, p.BOLD);
    bounding(g);
    return g;
  }

  function signature(w, padding = DEFAULT_PADDING) {
    let signatureText = `${getSectionNum()} SIGN HERE: ____________________`;
    let g = text(signatureText, w, padding, TEXT_HEIGHT, p.BOLD);
    bounding(g);
    return g;
  }

  function numbers(w, padding = DEFAULT_PADDING) {
    let g = p.createGraphics(w, HEIGHT);
    let x = 0;
    let y = 0;
    let h = 0;
    let n = Math.floor(p.random(3,5));

    p.push();
    let toCount = Math.random() < 0.5 ? `words` : `letters`;
    let header = text(`${getSectionNum()} ENTER the number of ${toCount} in the first column into the second column`, w, padding, TEXT_HEIGHT, p.BOLD)
    bounding(header);
    g.image(header, x, y);

    h += header.height;
    y += header.height;
    header.remove();

    for (let i = 0; i < n; i++) {
      let col1 = text(p.random(technologies), w/2, padding);
      bounding(col1);
      g.image(col1, x, y);
      g.push();
      let col2 = p.createGraphics(w/2, col1.height);
      bounding(col2);
      g.image(col2, x + col1.width, y);
      y += col1.height;
      h += col1.height;

      col1.remove();
      col2.remove();
    }

    g.height = h;
    bounding(g);
    return g;
  }

  function stamp(w, padding = DEFAULT_PADDING) {
    let g = p.createGraphics(w, HEIGHT);
    let x = 0;
    let y = 0;
    let h = 0;

    const stampHeight = 100;
    let stampText = `${getSectionNum()} STAMP HERE to approve ${p.random(technologies)} working group:`;

    let header = text(stampText, w, padding, TEXT_HEIGHT, p.BOLD);
    g.image(header, x, y);

    y += header.height;
    h += header.height;
    header.remove();

    x += padding;

    g.push();
    g.noFill();
    g.stroke(0);
    g.strokeWeight(2);
    g.rect(x, y, w - 2*padding, stampHeight);
    g.pop();
    h += stampHeight;

    h += padding;

    g.height = h;
    bounding(g);

    return g;
  }

  function initials(w, padding = DEFAULT_PADDING) {
    let initialsText = `${getSectionNum()} INITIAL HERE: ________`;
    let g = text(initialsText, w, padding, TEXT_HEIGHT, p.BOLD);
    bounding(g);
    return g;
  }

  function paragraphs(w, padding = DEFAULT_PADDING) {
    let n = p.floor(p.random(1,3));
    let paras = [];
    for (let i = 0; i < n; i++) {
      let string = generateParagraph();
      paras.push(string);
    }
    let g = texts(paras, w, padding, TEXT_HEIGHT, p.NORMAL);
    bounding(g);
    return g;
  }

  function getSectionNum() {
    let result = `${sectionNum}.`;
    sectionNum++;
    return result;
  }

  function generateParagraph() {
    let number = p.floor(p.random(1,3));
    let result = ``;
    for (let i = 0; i < number; i++) {
      result += p.random(positivity) + ` `;
    }
    return result;
  }

  function bounding(g) {
    // Draw the bounding box
    g.push();
    g.noFill();
    g.stroke(0);
    g.strokeWeight(LINE_WEIGHT);
    g.rect(0, 0, g.width, g.height);

    g.pop();
  }

  function textHeight(g) {
    return g.textAscent() + g.textDescent();
  }

}
