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

let height = 0;

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="checkbox" id={this.props.id} name={this.props.id} />
        <label for={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}

class CheckBoxes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let labels = [];
    for (let i = 0; i < this.props.quantity; i++) {
      labels.push(random(technologies));
    }
    const boxes = labels.map((label,index) => <CheckBox label={label} id={label + index} key={index} />);

    return (
      <fieldset>
        {boxes}
      </fieldset>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let fieldsets = [];
    for (let i = 0; i < 10; i++) {
      fieldsets = [...fieldsets, <CheckBoxes quantity={2} />];
    }
    return (
      <div>
        {fieldsets}
      </div>
    )
  }
}

ReactDOM.render(<Form />, document.getElementById(`form`));

// generateForms(1);
//
// function generateForms(number) {
//   while ($(`body`).height() < 792) {
//     $(`body`).append(checkBoxes(1));
//   }
// }
//
// function checkBoxes(number) {
//   const fieldset = $(`<fieldset></fieldset>`);
//
//   for (var i = 0; i < number; i++) {
//     let option = random(technologies);
//     let name = `${option}-${i}`;
//     let label = $(`<label for="${option}-${i}">${option}</label>`);
//     let checkbox = $(`<input type="checkbox" id="${name}" name="${name}">`);
//     let br = $(`<br>`)
//
//     fieldset.append(checkbox);
//     fieldset.append(label);
//     fieldset.append(br);
//   }
//   return fieldset;
// }
//
// function getSentences(number) {
//   let sentences = ``;
//   for (let i = 0; i < number; i++) {
//     sentences += random(positivity);
//   }
//   return sentences;
// }
//
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}
