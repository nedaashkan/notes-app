let title = document.getElementById("title-value");
let descriptionEl = document.getElementById("description-value");
let noteBoxEl = document.getElementById("note-box");
let popup = document.querySelector(".popup-box");
let noteData = {};
let popupText = document.getElementById("popup-text");
let popupButtonText = document.getElementById("popup-button-text");

function addNewNote() {
  popupText.textContent = "Add new note";
  popupButtonText.textContent = "Add note";
  popup.classList.remove("popup-display-none");
}
function closePopup() {
  popup.classList.add("popup-display-none");
  title.value = "";
  descriptionEl.value = "";
}
function addNote() {
  popup.classList.add("popup-display-none");
  displayNote();
}
function displayNote() {
  if (title.value === "" || descriptionEl.value === "") {
    alert("title value and description value empty ");
    title.value = "";
    descriptionEl.value = "";
  } else {
    noteData["title"] = title.value;
    noteData["description"] = descriptionEl.value;
    noteBoxEl.innerHTML += `
        <li class="note">
            <div class="details">
              <p id="title-el">${noteData.title}</p>
              <span id="description-el"
                >${noteData.description}</span
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
                  <a href="#" onclick="deleteNote(this)">
                    <li><i class="fa-solid fa-trash-can"></i>Trash</li>
                  </a>
                  <a href="#" onclick="editNote(this)">
                    <li><i class="fa-regular fa-pen-to-square"></i>Edit</li>
                  </a>
                </ul>
              </div>
            </div>
            </li>
  `;
    title.value = "";
    descriptionEl.value = "";
  }
}

function showMenu(e) {
  let thisIcon = e.parentElement;
  thisIcon.classList.add("show");
}

function deleteNote(e) {
  e.parentElement.parentElement.parentElement.parentElement.remove();
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
}
