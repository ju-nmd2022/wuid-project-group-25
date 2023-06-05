const inputBox = document.getElementById("text-box");
const listContainer = document.getElementById("list-container");

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

