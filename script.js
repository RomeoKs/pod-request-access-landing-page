//Version 1
/* var elements = document.getElementsByTagName("input");
for (var i = 0; i < elements.length; i++) {
    elements[i].oninvalid = function(e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Oops! Please check your email");
        }
    };
    elements[i].oninput = function(e) {
        e.target.setCustomValidity("");
    };
} */

//Version 2

let email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Oops! Please check your email");
    email.className = 'error';
  } else {
    email.setCustomValidity("");
  }
  
});


//Version 3

