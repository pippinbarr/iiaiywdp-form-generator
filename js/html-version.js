/*
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
*/

let section = 1;

for (let i = 0; i < 20; i++) {
  form();
}

function form() {
  section = 1;

  let $page = $(`<div class="page"></div>`);
  let $form = $(`<div class="form"></div>`);
  let $tasks = $(`<div id="tasks"></div>`)

  $(`body`).append($page);
  $page.append($form);
  $form.append(title());
  $form.append($tasks);

  column($tasks,$page,$form);
  column($tasks,$page,$form);
}

function title() {
  let title = $(`<h1>${random(technologies)}</h1>`);
  return title;
}


function column($tasks,$page,$form) {

  const generators = [date, checkboxes, highlighter, signature, numbers, stamp, initial];

  let $col = $(`<div class="column"></div>`);
  $tasks.append($col);
  while ($form.outerHeight(true) < $page.outerHeight(true)) {
    let generator = random(generators);
    let $element = generator();
    $col.append($element);
    if ($form.outerHeight(true) > $page.outerHeight(true)) {
      $element.remove();
      break;
    }
  }
}

function checkboxes() {
  let $checkboxes = $(`<div class="task checkboxes"></div>`);
  let n = 3 + Math.floor(Math.random() * 7);
  let techs = [];
  for (let i = 0; i < n; i++) {
    let tech = random(technologies);
    techs.push(tech);
    let $checkbox = $(`<span class="checkbox"></span>`)
    $checkbox.append(`<input type="checkbox" id="checkbox-${i}" name="checkbox-${i}" value="${tech}">`);
    $checkbox.append(`<label for="checkbox-${i}">${tech}</label><br />`);
    $checkboxes.append($checkbox);
  }
  let selections = techs.filter(tech => Math.random() < 0.2);
  if (selections.length === 0) {
    selections = [random(techs)];
  }
  let $instruction = $(`<div><strong>${getSection()} Select ${selections.join(`, `)}</strong></div>`)
  $checkboxes.prepend($instruction);

  return $checkboxes;
}

function highlighter() {
  let $highlighter = $(`<div class="task highlighter"></div>`);
  let $instruction = $(`<div><strong>${getSection()} Highlight the underlined words</strong></div>`)
  $highlighter.append($instruction);

  let para = generateParagraph();
  let words = para.split(` `);

  let highlights = false;;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (Math.random() < 0.5 && word.length >= 5) {
      words[i] = `<span class="highlight">${word}</span>`;
      highlights = true;
    }
  }
  if (!highlights) {
    let index = Math.floor(Math.random() * words.length);
    words[index] = `<span class="highlight">${words[index]}</span>`
  }
  para = words.join(` `);
  $highlighter.append(`<div>${para}</div>`);

  return $highlighter;
}

function date() {
  let $date = $(`<div class="task date"></div>`);
  let $instruction = $(`<div><strong>${getSection()} Date: __/__/____</strong></div>`)
  $date.append($instruction);

  return $date;
}

function signature() {
  let $date = $(`<div class="task signature"></div>`);
  let $instruction = $(`<div><strong>${getSection()} Sign here: _____________________</strong></div>`)
  $date.append($instruction);

  return $date;
}

function numbers() {
  let $numbers = $(`<div class="task numbers"></div>`);
  let $instruction = $(`<div><strong>${getSection()} Write the number of words in the left column into the right column</strong></div>`)
  $numbers.append($instruction);

  let $table = $(`<div class="numbers-table"></div>`);
  for (let i = 0; i < 3; i++) {
    let $row = $(`<div class="numbers-entry">${random(technologies)}</div><div class="numbers-entry"></div>`);
    $table.append($row);
  }
  $numbers.append($table);

  return $numbers;
}

function stamp() {
  let $stamp = $(`<div class="task stamp"></div>`);
  let action = Math.random() < 0.5 ? `approve` : `reject`;
  let $instruction = $(`<div><strong>${getSection()} Stamp below to ${action} the ${random(technologies)} Working Group</strong></div>`)
  $stamp.append($instruction);

  let $stampArea = $(`<div class="stamp-area"></div>`);
  $stamp.append($stampArea);

  return $stamp;
}

function initial() {
  let $initial = $(`<div class="task initial"></div>`);
  let $instruction = $(`<div><strong>${getSection()} Initial here: ________</strong></div>`)
  $initial.append($instruction);

  return $initial;
}

function generateParagraph() {
  let number = Math.floor(Math.random() * 3) + 1;
  let result = ``;
  for (let i = 0; i < number; i++) {
    result += random(positivity) + ` `;
  }
  return result;
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getSection() {
  return `${section++}.`;
}
