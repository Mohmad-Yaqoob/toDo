let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let dlbtn = document.createElement("button");
    dlbtn.innerText = "delete";
    dlbtn.classList.add("delete");


    if(input.value.length>0) {
        item.appendChild(dlbtn);
        ul.appendChild(item);
    }
    input.value = "";
});


ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
});