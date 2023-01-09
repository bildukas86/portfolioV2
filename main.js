// show-hide navigation
function hamFunction(x){
  //add class
  x.classList.toggle("change");

  // open/close navigation
  var n = document.getElementById('nav');

  n.classList.toggle("vis-on");

};

//////////////////////////////////////
//// text animation
////////////////////////////////////
const carouselText = [
  {text: "I'm trainee web developer", color: "black"},
  {text: "Welcome to my web page.", color: "black"}
]

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

////////////////////////////////////////////////////////////
//form validation
//////////////////////////////////////////////////////////
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
};



function validateForm() {


//name and lastName validation
  let inputName = document.getElementById('firstname');
  if(inputName.value.trim().length === 0) {
          printError("nameErr", "* Please enter your name");
          inputName.classList = "error";
      } else {
          var regex = /^[a-zA-Z\s]+$/;
          if(regex.test(inputName.value) === false || inputName.value.length < 2) {
              printError("nameErr", "* Please enter a valid name");
              inputName.classList = "error";
          } else {
              printError("nameErr", "");
              inputName.classList = "valid";
              nameErr = false;
          }
      };

      let inputLastName = document.getElementById('lastname');
      if(inputLastName.value.trim().length === 0) {
              printError("lastnameErr", "* Please enter your last name");
              inputLastName.classList = "error";
          } else {
              var regex = /^[a-zA-Z\s]+$/;
              if(regex.test(inputLastName.value) === false || inputLastName.value.length < 2) {
                  printError("lastnameErr", "* Please enter a valid Last name");
                  inputLastName.classList = "error";
              } else {
                  printError("lastnameErr", "");
                  inputLastName.classList = "valid";
                  nameErr = false;
              }
          };

  //////////////////////////////////
  ///Phone validation
  ////////////////////////////////

  let inputPhone = document.getElementById('phonenumber');
  if (inputPhone.value === ""){
      printError("phoneErr", "* Please enter Phone number.");
      inputPhone.classList = "error";
  }else {
      // var mobileRegEx = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
      var mobileRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

      // var landlineRegEx = /\s*\(?(0[1-6]{1}[0-9]{3}\)?[0-9]{6})\s*/;
      if (mobileRegEx.test(inputPhone.value) === false) {
        printError("phoneErr", "* Please enter a valid Phone Number.");
        inputPhone.classList = "error";
      }else {
        printError("phoneErr", "");
        inputPhone.classList = "valid";
        phoneErr = false;
      }
  };
  //////////////////////////////////
  ///email validation
  ////////////////////////////////


let inputEmail = document.getElementById('email');
if (inputEmail.value === "") {
    printError("emailErr", "* Email can't be empty.");
    inputEmail.classList = "error";
}else {
  var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegEx.test(inputEmail.value) === false ) {
    printError("emailErr", "* Please enter a valid email address.");
    inputEmail.classList = "error";
  }else {
    printError("emailErr", "");
    inputEmail.classList = "valid";
    phoneErr = false;
  }
}

//////////////////////////////////
///check subject not empty
////////////////////////////////

let inputSubject = document.getElementById('subject');

if (inputSubject.value.trim().length === 0) {
  printError("subjectErr", "* Subject can't be empty.");
  inputSubject.classList = "error";
}else {
  printError("subjectErr", "");
  inputSubject.classList = "valid";
  phoneErr = false;
}

//////////////////////////////////
///check msg not empty
////////////////////////////////
let inputMsg = document.getElementById('msg');

if (inputMsg.value.trim().length === 0) {
  printError("msgErr", "* Message can't be empty.");
  inputMsg.classList = "error";
}else {
  printError("msgErr", "");
  inputMsg.classList = "valid";
  phoneErr = false;
}


};
