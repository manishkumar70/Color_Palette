"use strict"
const container= document.querySelector(".container");
const refreshBtn =document.querySelector(".refresh-btn");

const maxPaletteBoxes= 21;

function generatePalette() {
    container.innerHTML = ""; //clearing the container
    for(let i=0 ;i< maxPaletteBoxes; i++){
        // generating colorcode
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
 
        //creating a new 'li' element and inseritng it to the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background:${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
                           //adding click event to current li element to copu the color
                           color.addEventListener("click",()=>copyColor(color,randomHex));
                           container.appendChild(color); 
    }
}
generatePalette();

const copyColor=(elem,hexVal)=>{
   const colorElement = elem.querySelector(".hex-value");
   //coping the text to clipboard and setting timeout value;
   navigator.clipboard.writeText(hexVal).then(()=>{
   colorElement.innerText = "Copied";
   setTimeout(()=>colorElement.innerText=hexVal,1000);
   }).catch(()=> alert("Failed to copy the code"));
}
refreshBtn.addEventListener("click", generatePalette);
