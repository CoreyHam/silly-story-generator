
// Var and Funct Definitions

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// Text Strings

let storyText = "It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — this was :insertX:'s fate";
let insertX = [
    "Jacob the Goblin",
    "Big Daddy",
    "Ronald McDonald",
    "Danny Devito"
]
let insertY = [
    "McDonalds",
    "Disneyland",
    "the White House",
    "their house"
    
]
let insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
    "acended into the heavens"
]

// Event Listener

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertX:',xItem);
    newStory = newStory.replace(':insertX:',xItem);
    newStory = newStory.replace(':insertY:',yItem);
    newStory = newStory.replace(':insertZ:',zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);

    }

    if (document.getElementById("uk").checked) {
        const weight = `${Math.round(300*0.0714286)} stone`;
        const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}