// sba.v3  ---------

// selectElementbyID

document.getElementById("start-btn").addEventListener("click", (e) => {
  e.preventDefault("");
  let userName = prompt("what is you name?").toUpperCase();

  // create element <h1>
  let greeting = (document.createElement(
    "h1"
  ).innerHTML = `<div>WELCOME ${userName}!</div>`);
  console.log(greeting);

  // select using querySelector
  //  display new text inside of h3
  let subText = document.querySelector("h3");
  subText.innerHTML = greeting;

  let readBtn = document.querySelector("button");
  readBtn.textContent = "Let's read a book!";
  readBtn.disabled = true;
});

// Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.

// // Use appendChild and/or prepend to add new elements to the DOM.

// selector or selector All

// Create at least one element using createElement.

// Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.

// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
