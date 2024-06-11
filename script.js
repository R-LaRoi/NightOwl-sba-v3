// sba.v3  ---------

let navData = [
  { id: 1, title: "MBC" },
  { id: 3, title: "Explore" },
  { id: 3, title: "Book List" },
];

console.log(navData);

let userData = [];

// selectElementbyID
document.getElementById("section-two").style.display = "none";
document.getElementById("sb-thanks").style.display = "none";

document.getElementById("start-btn").addEventListener("click", (e) => {
  e.preventDefault("");
  let userName = prompt("What is your name?").toUpperCase();
  userData.push({ userName });

  // create element <h1>
  let greeting = (document.createElement(
    "div"
  ).innerHTML = `<h1>Welcome ${userName}!</h1><p>
Let's check out some new books!
  </p>
`);
  console.log(greeting);
  console.log(userData);
  // select using querySelector
  //  display new text inside of h3
  let subText = document.querySelector("h3");
  subText.innerHTML = greeting;

  let readBtn = document.querySelector("button");
  readBtn.style.display = "none";

  // append to parent element

  let nextArrow = document.createElement("img");
  nextArrow.classList.add("arrow-gif");
  nextArrow.src =
    "https://github.com/R-LaRoi/sba-v3/assets/114012059/71db82a0-9cf7-46b8-9055-896e714e3307";

  document.getElementById("arrow").appendChild(nextArrow);
});

let showNextScreen = document.getElementById("arrow");
showNextScreen.addEventListener("click", (e) => {
  e.preventDefault();

  let screenOne = document.getElementById("section-one");
  screenOne.remove();

  // -----screen two---------
  document.getElementById("section-two").style.display = "block";

  // nav styles
  let navBar = document.getElementById("nav");
  navBar.style.background = "#121716";
  navBar.style.height = "75px";
  navBar.style.boxShadow =
    "box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;";
  navBar.style.display = "flex";
  navBar.style.gap = "20px";

  navData.map((link) => {
    // 2. create and interate over nav links
    let ulink = document.createElement("li");
    ulink.innerHTML = `${link.title}`;
    console.log(ulink);

    // 5. append element
    navBar.append(ulink);
  });
});

// ---- review btn

//  if button is clicked show a form

document.getElementById("review-btn").addEventListener("click", (e) => {
  e.preventDefault();
  userData.map((element) => {
    element.userName;

    document.getElementById("review-form").innerHTML = `
    
       <h2> Hi ${element.userName}!</h2> <p>Share your thoughts about the book with us!</p>
       <form>  <!-- Email input -->
                    <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="Email:">Email:</label>
                        <input type="email" id="email4" class="form-control"
                        placholder="email" />
                        
                    </div>

                    <!-- textarea input -->
                    <div data-mdb-input-init class="form-outline mb-4"><label class="form-label" for="textarea4">Your review:</label>
                        <textarea id="textarea4" rows="4" class="form-control"></textarea>
                        
                    </div>
                    <!-- Submit button -->
                </form>
  `;
  });

  document.getElementById("sb-thanks").style.display = "block";

  document.getElementById("sb-thanks").addEventListener("click", (e) => {
    e.preventDefault();
    userData.map((item) => {
      item.userName;
      document.getElementById("sb-thanks").style.display = "none";
      document.getElementById("review-form").innerHTML = `
       <h2> Thank you ${item.userName} for your review!</h2> 
  `;
    });
  });
});

// document.getElementById("add-bk-btn").addEventListener("click", (e) => {
//   e.preventDefault("");

//   console.log("show book list");
// });
