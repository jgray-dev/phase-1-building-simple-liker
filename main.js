// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".like-glyph").forEach((button) => {
    button.addEventListener("click", () => {
      mimicServerCall()
        .then((r) => {
          if (button.classList.contains("activated-heart")) {
            button.classList.remove("activated-heart");
            button.textContent = EMPTY_HEART;
          } else {
            button.classList.add("activated-heart");
            button.textContent = FULL_HEART;
          }
        })
        .catch((error) => {
          console.log("Catch error");
          const errorDiv = document.getElementById("modal");
          errorDiv.classList.remove("hidden");
          errorDiv.textContent = error;
          setTimeout(() => {
            errorDiv.classList.add("hidden");
          }, 3000);
        });
    });
  });
});
