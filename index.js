const noteInputt = document.querySelector("#noteInput")
const addBtn = document.querySelector("#addBtn")
const notesContainer = document.querySelector("#notesContainer")
let notes = JSON.parse(localStorage.getItem("notes")) || []

addBtn.addEventListener("click" , ()=>{
    const note = noteInputt.value.trim()
    if(!note) return;
    notes.push(note)
    saveNotes()
    renderNotes()
})
// function renderNotes(){
//     notesContainer.innerHTML="";
//     notes.forEach((note,index)=>{
//         const div = document.createElement("div")
//         div.classList.add("note");
//         div.innerHTML=`
//          <span>${note}</span>
//          <button data-id="${index}">
//          delete
//          </button>
//         `;
//         notesContainer.appendChild(div)
//     })
// }
  function renderNotes(){
    notesContainer.innerHTML = ""; 
    notes.map((note, index) =>{
        const div = document.createElement("div");
        div.classList.add("note"); 
        div.innerHTML = ` <span>${note}</span> <button data-id="${index}"> delete </button> `; return div; }).forEach((div) => notesContainer.appendChild(div)); }

    notesContainer.addEventListener("click" , (e)=>{
    if(e.target.tagName === "BUTTON"){
        console.log(e.target.dataset)
        const index = e.target.datast.id;
        notes = notes.filter((_ , i)=>i!=index);
        saveNotes()
        renderNotes()
        
    }
})

function  saveNotes(){
    localStorage.setItem(
        "notes" , JSON.stringify(notes)
    )
}




