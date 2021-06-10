let technologies;
let positivity;

$.getJSON(`assets/data/en.json`, (data) => {
  technologies = data.technologies;
  positivity = data.inspirationalQuotes;

  for (let i = 0; i < 20; i++) {
    form();
  }
});



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
  let title = $(`<div class="header">Form ${formID()}: ${formPurpose()} ${random(technologies)}</div>`);
  return title;
}

function formID() {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let length = Math.floor(Math.random() * 10) + 1;
  let id = ``;
  for (let i = 0; i < length; i++) {
    let char = Math.random() < 0.75 ? random(alphabet) : random(numbers);
    if (Math.random() < 0.2 && i > 0 && i < length-1) {
      char = `/`;
    }
    id += char;
  }
  return id.toUpperCase();
}

function formPurpose() {
  const purposes = [
    `Authorization of`,
    `Committee Report on`,
    `Implications of`,
    `Task Force Report on`,
    `Report on`,
    `Evaluation of`,
    `Rationale for`,
    `Hazards of`,
    `Special Assessment of`
  ];
  return random(purposes);
}

function column($tasks,$page,$form) {

  const generators = [date, checkboxes, highlighter, signature, numbers, stamp, initial, read];

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
  let $instruction = sectionHeading(`Select ${selections.join(`, `)}`);
  $checkboxes.prepend($instruction);

  return $checkboxes;
}

function highlighter() {
  let $highlighter = $(`<div class="task highlighter"></div>`);
  let $instruction = sectionHeading(`Highlight the underlined words`);
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
  let $instruction = sectionHeading(`Date: __/__/____`);
  $date.append($instruction);

  return $date;
}

function signature() {
  let $date = $(`<div class="task signature"></div>`);
  let $instruction = sectionHeading(`Sign here: _____________________`);
  $date.append($instruction);

  return $date;
}

function numbers() {
  let $numbers = $(`<div class="task numbers"></div>`);
  let $instruction = sectionHeading(`Write the number of words in the left column into the right column`);
  $numbers.append($instruction);

  let $table = $(`<div class="numbers-table"></div>`);
  let n = Math.floor(Math.random() * 3) + 3;
  for (let i = 0; i < n; i++) {
    let $row = $(`<div class="numbers-entry">${random(technologies)}</div><div class="numbers-entry"></div>`);
    $table.append($row);
  }
  $numbers.append($table);

  return $numbers;
}

function stamp() {
  let $stamp = $(`<div class="task stamp"></div>`);
  let action = Math.random() < 0.5 ? `approve` : `reject`;
  let $instruction = sectionHeading(`Stamp below to ${action} the ${random(technologies)} Working Group`);
  $stamp.append($instruction);

  let $stampArea = $(`<div class="stamp-area"></div>`);
  $stamp.append($stampArea);

  return $stamp;
}

function initial() {
  let $initial = $(`<div class="task initial"></div>`);
  let $instruction = sectionHeading(`Initial here: ________`);
  $initial.append($instruction);

  return $initial;
}

function read() {
  let $read = $(`<div class="task read"></div>`)
  let $instruction = sectionHeading(`Read this`);
  $read.append($instruction);

  let paragraph = generateParagraph();
  $read.append(`<div>${paragraph}</div>`);

  return $read;
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

function sectionHeading(string) {
   return $(`<div class="section-heading">${getSection()} ${string}</div>`);
}

function getSection() {
  return `${section++}.`;
}
