// _________________________________________________________________
// NOnoN0nOYes (Note taking app)

const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

function getNote(id) {
  for (const note of notes) {
    if (note.id === id) {
      return note;
    }
  }
}

function logOutNotesFormatted() {
  let notesStr = "";
  for (const note of notes) {
    notesStr += `The note with id: ${note.id}, has the following note text: ${note.content}\n`;
  }
  console.log(notesStr);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

logOutNotesFormatted(); // should log out the text below
// Unique feature
function deleteNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes.splice(i, 1);
      break;
    }
  }
}
notes.forEach((element) => {
  console.log(element);
});
deleteNote(1);
console.log(`\n`);
notes.forEach((element) => {
  console.log(element);
});
// _________________________________________________________________
// CactusIO-interactive (Smart phone usage app) optional

const activities = [];
const usageLimit = 55;
const today = new Date();

function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}

addActivity(today.toLocaleDateString("en-GB"), "Youtube", 30);

function showStatus(activities) {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }
  let totalDuration = 0;
  activities.forEach((element) => {
    totalDuration += element.duration;
  });
  console.log(
    `You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`,
  );
  if (totalDuration > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  }
}

showStatus(activities);
console.log(activities[0]);
