const inputBox = document.getElementById("text-box");
const listContainer = document.getElementById("list-container");
const allStar = document.querySelectorAll('.rating .star');
const submit = document.getElementById("Submit");

let ratingValue = 0; // Initialize rating value outside the event listeners

allStar.forEach((item, idx) => {
  item.addEventListener('click', function () {
    ratingValue = idx + 1;

    allStar.forEach((i, click) => { // Use 'click' instead of 'item' for the index variable
      i.classList.replace('bxs-star', 'bx-star');
      i.classList.remove('active');
      if (click < ratingValue) {
        i.classList.replace('bx-star', 'bxs-star');
        i.classList.add('active');
      }
    });

    saveInfo();
  });
});

submit.addEventListener('click', function () {
  if (ratingValue > 0) {
    alert("Thank you for rating us!");
    allStar.forEach(i => {
      i.classList.replace('bxs-star', 'bx-star');
      i.classList.remove('active');
    });
    ratingValue = 0; // Reset the ratingValue to zero after submitting
  } else {
    alert("Please rate us before submitting!");
  }
});

// Rest of the code remains the same...



function addTask(){
    if(inputBox.value === ''){
        alert("Write your task!"); //if you dont write in the text box and still press Add, it will inform you to write something
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveInfo()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveInfo()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveInfo()
    }
}, false);

function saveInfo(){
    localStorage.setItem("information", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("information");
}
showList();




// codes inspired by https://www.youtube.com/watch?v=G0jO8kUrg-I&t=546s
// small parts of the code was helped by Chatgpt
