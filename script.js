const inputBox = document.getElementById("input-form")
const tasksContainer = document.getElementById("tasks")

function addTask(){
    if(inputBox.value===''){
        alert("The text field is empty.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        tasksContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
}
tasksContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);