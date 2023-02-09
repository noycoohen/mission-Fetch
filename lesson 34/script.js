// fetch("posts.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//mission 1
// class GatherInputs {
//   firstName;
//   lastName;
//   city;
//   book;
//   pet;
//   constructor() {
//     this.firstName = document.getElementById("firstName").value;
//     this.lastName = document.getElementById("lastName").value;
//     this.city = document.getElementById("city").value;
//     this.book = document.getElementById("book").value;
//     this.pet = document.getElementById("pet").value;
//   }
// }

// class LoadAndSave {
//   constructor() {}
//   load() {
//     let formObject = JSON.parse(localStorage.getItem("formObject"));
//     if (formObject != null) {
//       document.getElementById("firstName").value = formObject.firstName;
//       document.getElementById("lastName").value = formObject.lastName;
//       document.getElementById("city").value = formObject.city;
//       document.getElementById("book").value = formObject.book;
//       document.getElementById("pet").value = formObject.pet;
//     }
//   }
//   save(formObject) {
//     localStorage.setItem("formObject", JSON.stringify(formObject));
//   }
// }

// let newLoadAndSave = new LoadAndSave();
// newLoadAndSave.load();

// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   let gatherInformation = new GatherInputs();
//   newLoadAndSave.save(gatherInformation);
// });

//mission 3
let user = fetch("https://jsonplaceholder.typicode.com/users");
user.then((response) => response.json()).then((data) => renderHtml(data));

function renderHtml(users) {
  users.forEach((user) => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <b>username</b>: ${user.username}<br/>
        <b>email</b>: ${user.email}<br/>
    `;
    document.body.appendChild(newDiv);
  });
}

//משימת המשך למשימה 3
let users = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);
let posts = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (response) => response.json()
);

Promise.all([users, posts]).then((data) => renderHTML(data));

function renderHTML(usersandposts) {
  usersandposts[1].forEach((post) => {
    let username;
    usersandposts[0].forEach((user) => {
      if (user.id == post.userId) {
        username = user.username;
      }
    });
    let newPost = document.createElement("div");
    let postTitlte = document.createTextNode(username + " " + post.title);
    newPost.appendChild(postTitlte);
    document.body.appendChild(newPost);
  });
}
