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


  // Defining error variables with a default value
      var nameErr = emailErr = mobileErr = countryErr = genderErr = true;

//check name
  let inputName = document.getElementById('firstname');
  if(inputName.value === "") {
          printError("nameErr", "* Please enter your name");
      } else {
          var regex = /^[a-zA-Z\s]+$/;
          if(regex.test(inputName) === false) {
              printError("nameErr", "* Please enter a valid name");
          } else {
              printError("nameErr", "");
              nameErr = false;
          }
      };

      let inputLastName = document.getElementById('lastname');
      if(inputLastName.value === "") {
              printError("lastnameErr", "* Please enter your last name");
          } else {
              var regex = /^[a-zA-Z\s]+$/;
              if(regex.test(inputLastName) === false) {
                  printError("lastnameErr", "* Please enter a valid Last name");
              } else {
                  printError("lastnameErr", "");
                  nameErr = false;
              }
          };
      ///////////////////////////////////////////////////////  https://www.tutorialrepublic.com/codelab.php?topic=javascript&file=form-validation
    // //check name
    // let inputName = document.getElementById('in-name');
    //   if (inputName.value === "" || inputName.value.length < 3 ) {
    //     inputName.className = "error";
    //     printError("nameErr", "Please enter your name");
    //   }else{
    //     inputName.className = "valid";
    //     alert('Check all fields')
    //   };
    //
    //   //check last name
    //
    //   let inputLastName = document.getElementById('in-lastname');
    //     if (inputLastName.value === "" || inputLastName.value.length < 3 ) {
    //       inputLastName.className = "error";
    //     }else{
    //       inputLastName.className = "valid";
    //       alert('Check all fields')
    //     };
///////////////////////////////////////////////////
//email validation
///////////////////////////////////////////////////





};
