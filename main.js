let newNote = document.getElementById("note-container");
let input = document.getElementById('input');
let popupSection = document.getElementById('popup-section');
let container = document.getElementById("container");


function addNote() {
    let inputValue = input.value

    //createing new note when click on add button
    if (inputValue) {

        let parent = document.createElement("div");
        let child = document.createElement("li");
        let children = document.createElement("div");
        let innerChild1 = document.createElement("button");
        let innerChild2 = document.createElement("button");
        let tempChild = document.createElement("span");

        
        child.innerHTML = inputValue;
        innerChild1.innerHTML = `<span class="material-symbols-outlined">
        edit
        </span>`;
        innerChild2.innerHTML = `<span class="material-symbols-outlined">
        delete
        </span>`;
        tempChild.innerHTML = `<span class="material-symbols-outlined">
        done
        </span>`;


        parent.classList.add("add-note");
        child.classList.add("note-item");
        innerChild1.classList.add("edit");
        innerChild2.classList.add("delete");
        
        
        parent.appendChild(tempChild);
        parent.appendChild(child);
        parent.appendChild(children);
        children.appendChild(innerChild1);
        children.appendChild(innerChild2);
        newNote.appendChild(parent);

        input.value = "";
        tempChild.style.display = "none";
        
        child.addEventListener("click", () => {
            child.classList.toggle("checked");
            if (tempChild.style.display == "none") tempChild.style.display = "block";
            else tempChild.style.display = "none";
        })


        //functionality of edit button
        innerChild1.addEventListener("click", () => {

            container.style.opacity = "0.5";

            let popup = document.createElement("div");
            let popupInput = document.createElement("input");
            let popupSave = document.createElement("button");
            let popupDiscard = document.createElement("button");

            popupInput.value = child.innerHTML;
            popupSave.innerHTML = "Save";
            popupDiscard.innerHTML = "Discard";

            popup.appendChild(popupInput);
            popup.appendChild(popupSave);
            popup.appendChild(popupDiscard);
            popupSection.appendChild(popup);

            popup.classList.add("popup");
            popupInput.classList.add("popup-input");
            popupSave.classList.add("popup-save");
            popupDiscard.classList.add("popup-discard");

            popupSection.style.display = "block";

            //functionality of save button
            popupSave.addEventListener("click", () => {
                child.innerHTML = popupInput.value;
                popupSection.style.display = "none";
                popupSection.removeChild(popup);
                container.style.opacity = "1";
                
            })

            //functionality of discard button
            popupDiscard.addEventListener("click", () => { 
                popupSection.style.display = "none";
                popupSection.removeChild(popup);
                container.style.opacity = "1";
            })
        })


        //functionality of delete button
        innerChild2.addEventListener("click", () => {
            newNote.removeChild(parent);
        })




    } else {
        alert("please write something in note");
    }
    
}
