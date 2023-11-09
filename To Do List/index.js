window.onload = function() {
    
    let $ = a => {return document.querySelector(a)};
    let $a = a => {return document.querySelectorAll(a)};
    
    let input = $(".input");
    let addBtn = $(".add");
    
    // Creating Function for adding list
    function addList() {
        // Var to store input value
        let value = input.value;
    
        // Creating all elements
        let newDiv = document.createElement("div");
        let usrInput = document.createTextNode(value);
        let closeBtn = document.createElement("i");
    
        // Appending each of the element to its required places
        newDiv.appendChild(usrInput);
        newDiv.appendChild(closeBtn);
    
        // Adding classes to required elements
        newDiv.setAttribute("class", "add-todo");
        closeBtn.setAttribute("class", "fas fa-times close");
    
        //Appending newDiv to its parents
        $(".todo").appendChild(newDiv);
    }
    
    function delList() {
        let closeBtn = $a(".close");
        
        for(let i=0; i<closeBtn.length; i++){
            closeBtn[i].onclick = () => {
                closeBtn[i].parentElement.remove()
            }
        }
    }
    
    addBtn.onclick = () => {
        addList();
        setTimeout(function(){
            delList();
        }, 1000);
    }
    
}