// this function going to closing the popup  when close icon clicked : closePopup()
// this function going to show popup and get data  get input data for title  and get textarea data for description : addNewNote();
// get title value from title-value element its a input
// get description value from description-value element its textarea
// you will display title value  in title-el element
// you will display title description  in description-el element
// you going to make a for loop for  class note every time we addNote() its going to generate a note box
// this function going to add note you write get data and going to display it in screen button addNote()
// you will get todays date
// after geeing todays date turn to a string and display in in this element note-date-el so when we click add note it will show in note box
// when you click this its going to delete note u made before deleteNote()
// when you click this it going to show menu for edit showSetting()
// when you click this its going to show popup but with different  button name and   popup text name Update a Note editNote()
// popup-button-text and popup-text element the text will change
// you will change popup-text text on addNewNote() it will be Add a new Note and button will be Add Note
//  you will change popup-text text on editNote()it will be Update a Note and button will be Update a Note
// when we click setting icon it will add show class to  setting-el element
// when we click to screan it will remove show class from setting-el element
function showMenu(elem) {
  elem.parentElement.classList.add("show");
  document.addEventListener("click", (e) => {
    if (e.target.tagName != "I" || e.target != elem) {
      elem.parentElement.classList.remove("show");
    }
  });
}
