let title = document.getElementById("title-value");
let descriptionEl = document.getElementById("description-value");
let noteBoxEl = document.getElementById("note-box");
let popup = document.querySelector(".popup-box");
let popupText = document.getElementById("popup-text");
let popupButtonText = document.getElementById("popup-button-text");
let msg = document.getElementById("msg");

let noteData = [];
function getNoteData() {
  if (descriptionEl.value === "") {
    msg.textContent = "description not valid";
    title.value = "";
    descriptionEl.value = "";
  } else {
    msg.textContent = "";
    noteData.push({
      title: title.value,
      description: descriptionEl.value,
    });
    console.log(noteData);
    localStorage.setItem("data", JSON.stringify(noteData));

    displayData();
  }
}

function displayData() {
  noteBoxEl.innerHTML = "";
  noteData.map((x, y) => {
    return (noteBoxEl.innerHTML += `
        <li class="note" id=${y}>
            <div class="details">
              <p id="title-el">${x.title}</p>
              <span id="description-el"
                >${x.description}</span
              >
            </div>
            <div class="bottom-content">
              <span id="note-date-el">April 3, 2022</span>
              <div class="setting" id="setting-el">
                <i
                  class="fa-solid fa-ellipsis ellipsis"
                  onclick="showMenu(this)"
                ></i>
                <ul class="menu">
                    <li onclick="deleteNote(this);"><i class="fa-solid fa-trash-can"></i>Trash</li>
                    <li onclick="editNote(this)" ><i class="fa-regular fa-pen-to-square"></i>Edit</li>
                </ul>
              </div>
            </div>
            </li>
  `);
  });
  title.value = "";
  descriptionEl.value = "";
  popup.classList.add("popup-display-none");
}

function addNote() {
  getNoteData();
}

function addNewNote() {
  popupText.textContent = "Add new note";
  popupButtonText.textContent = "Add note";
  popup.classList.remove("popup-display-none");
}

function closePopup() {
  popup.classList.add("popup-display-none");
  msg.textContent = "";
  title.value = "";
  descriptionEl.value = "";
}
function showMenu(e) {
  let thisIcon = e.parentElement;
  thisIcon.classList.toggle("show");
}

function deleteNote(e) {
  e.parentElement.parentElement.parentElement.parentElement.remove();
  console.log(e.parentElement.parentElement.parentElement.parentElement.id);
  noteData.splice(
    e.parentElement.parentElement.parentElement.parentElement.id.id,
    1
  );
  localStorage.setItem("data", JSON.stringify(noteData));
  console.log(noteData);
}

function editNote(e) {
  let thisTitle =
    e.parentElement.parentElement.parentElement.previousElementSibling.querySelector(
      "#title-el"
    );

  let thisDescription =
    e.parentElement.parentElement.parentElement.previousElementSibling.querySelector(
      "#description-el"
    );
  popup.classList.remove("popup-display-none");
  popupText.textContent = "Update a Note";
  popupButtonText.textContent = "Update a Note";
  title.value = thisTitle.textContent;
  descriptionEl.value = thisDescription.textContent;
  e.parentElement.parentElement.parentElement.parentElement.remove();
  noteData.splice(
    e.parentElement.parentElement.parentElement.parentElement.id.id,
    1
  );
}
(() => {
  noteData = JSON.parse(localStorage.getItem("data")) || [];
  console.log(noteData);
  displayData();
})();
