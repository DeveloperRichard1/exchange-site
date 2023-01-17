
const form = document.querySelector(
  "#Exchange > div > div > div.col-8.text-center > form"
);
const feedbackOne = document.querySelector(".one");
const feedbackTwo = document.querySelector(".two");
const feedbackThree = document.querySelector(".three");
const emailPattern =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const namePattern = /^[a-zA-Z\s\.]*$/;
const numberPattern =
  /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;

/* redirect popup */
const popup = document.querySelector(".popup-wrapper");
const popupClose = document.querySelector(".popup-close");
const popupCloseAit = document.querySelector(".popup-ait");

const openPopup = () => {
  popup.style.display = "block";
};

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});

popupCloseAit.addEventListener("click", () => {
  popup.style.display = "none";
});

//popup  content
const popupContent = document.querySelector(".popup-content");
const showPopupContent = () => {
  popupContent.style.display = "block";
};

//sending spinner
const sendingSpinner = document.querySelector(".spinner-area");

const hideSpinner = () => {
  sendingSpinner.style.display = "none";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // validating the email
  const emailValue = form.email.value.trim();
  let emailVal = emailPattern.test(emailValue);

  if (emailVal) {
    feedbackOne.textContent = "";
  } else {
    feedbackOne.textContent = "Enter a valid email address";
  }

  // validating the fullName
  const fullNameValue = form.fullName.value.trim();
  let fullNameVal = namePattern.test(fullNameValue);

  if (fullNameVal) {
    feedbackTwo.textContent = "";
  } else {
    feedbackTwo.textContent = "Check or enter your full name";
  }

  // validating the phoneNumber
  const numberValue = form.phoneNumber.value.trim();
  let numberVal = numberPattern.test(numberValue);

  if (numberVal) {
    feedbackThree.textContent = "";
  } else {
    feedbackThree.textContent = "Enter a valid phone number";
  }

  if (emailVal && fullNameVal && numberVal) {
    openPopup();

    //run after 4S
    setTimeout(() => {
      sendToWhatsapp();
      form.reset();
    }, 2000);
  }
});

//send form data to whatsapp
const sendToWhatsapp = () => {
  let email = form.email.value;
  let name = form.fullName.value;
  let phone = form.phoneNumber.value;

  let url =
    "https://wa.me/2348155010078?text=" +
    "*Name:* " +
    name +
    "%0a" +
    "*Phone:* " +
    phone +
    "%0a" +
    "*Email:* " +
    email +
    "%0a";

  window.open(url).focus();
};
