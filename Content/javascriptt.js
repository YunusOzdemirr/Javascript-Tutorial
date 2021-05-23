// const filterInput = document.getElementById("filter");
// const todoForm = document.getElementById("todo-form");

// filterInput.addEventListener("focus", function(e) {
//     console.log(e)
//     console.log("Nabersin Babuş");
// })
// todoForm.addEventListener("submit", submitForm);
// todoForm.addEventListener("keypress", run);
//!
//
// function run(e) {
//     // console.log(e.which);
//     console.log(e.key)
//         // console.log("tuşa bastın")
// }
//
// function submitForm(e) {
//     console.log("Submit Eventi");
//     e.preventDefault(); // sayfanın yenilenmesini engelliyor.
// }

const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click", run);

function run(e) {
    console.log(e.target);
}