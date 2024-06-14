// sba.v3  ---------

let navData = [
  { id: 1, title: "MBC" },
  { id: 3, title: "Explore" },
  { id: 3, title: "Book List" },
];

let bookData = [
  { id: 1, title: "Night Animals", month: "June" },
  { id: 3, title: "Good Night Moon", month: "May" },
  { id: 3, title: "Knight Owl", month: "April" },
];

let userData = [];

// selectElementbyID
document.getElementById("section-two").style.display = "none";
document.getElementById("sb-thanks").style.display = "none";

// click event listener
document.getElementById("start-btn").addEventListener("click", (e) => {
  e.preventDefault("");
  let userName = prompt("What is your name?").toUpperCase();
  userData.push({ userName });
  bookData.push({ userName });

  // create element <h1>
  let greeting = (document.createElement(
    "div"
  ).innerHTML = `<h1 class="h1-message">Welcome ${userName}!</h1><p>
Let's check out some new books!
  </p>
`);

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

    ulink.innerHTML = `<a href="/">${link.title}</a>`;
    console.log(ulink);

    // 5. append element
    navBar.append(ulink);
  });
});

// ---- review btn

// review button will show a form
document.getElementById("review-btn").addEventListener("click", (e) => {
  e.preventDefault();
  userData.map((element) => {
    element.userName;

    document.getElementById("review-form").innerHTML = `
    
       <h2> Hi ${element.userName}!</h2> 
       <p>Share your thoughts about the book with us!</p>
       <form id = "form-sb">  
                    <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="Email:">Email:</label>
                        <input type="email" id="email4" class="form-control"
                        placholder="email" 
                        required/>
                        
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4"
                    required><label class="form-label" for="textarea4">Your review:</label>
                        <textarea id="textarea4" rows="4" class="form-control"></textarea>
                    </div>
                       <div class="move-btn">
      <button id="sb-thanks">Submit Review</button>
   </div>
                </form>
  `;
  });

  document.getElementById("sb-thanks").style.display = "block";

  // show thank you message when form submitted
  document.getElementById("form-sb").addEventListener("submit", (e) => {
    e.preventDefault();
    userData.map((item) => {
      item.userName;
      document.getElementById("sb-thanks").style.display = "none";
      document.getElementById("review-form").innerHTML = `
       <h2 class="h2-message"> Thank you ${item.userName} for your review!</h2> 
      <a href="/">
      <button id="home-btn">Home</button></a>
  `;
    });
  });
});

// book list ------
document.getElementById("add-bk-btn").addEventListener("click", (e) => {
  document.getElementById("review-form").remove();
  document.getElementById("--img").src = "three.png";

  e.preventDefault("");
  console.log(bookData);

  let ulList = document.getElementById("bk-ul");

  bookData.map((element, index) => {
    if (index < 3) {
      element.userName;
      let bktitle = document.createElement("li");
      bktitle.classList.add("li-list");
      bktitle.innerHTML = ` ${element.title}
       `;
      ulList.appendChild(bktitle);

      userData.map((element) => {
        element.userName;
        document.getElementById("book-list").innerHTML = `
  <h2> ${element.userName}'S BOOK LIST!</h2>

  <input type="text" id="add-book"  placeholder="add" >

  `;
      });

      document.getElementById("add-book").addEventListener("change", (e) => {
        e.preventDefault();
        let bkValue = e.target.value;
        let showBook = document.createElement("li");
        showBook.classList.add("li-list");
        showBook.textContent = bkValue;
        ulList.appendChild(showBook);
      });
    }
  });
});
