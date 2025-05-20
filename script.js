

let container = document.querySelector(".container");
let size = 16;
let dimension = 600/size;

for(let i = 0; i < size; i++){
    let bigDabba = document.createElement("div");
    bigDabba.setAttribute("class","bigDabba");
    for(let j = 0; j < size; j++){
        let r = Math.ceil(Math.random()*500);
        let g = Math.ceil(Math.random()*500);
        let b = Math.ceil(Math.random()*500);
        let color = `rgb(${r},${g},${b})`;
        let smallDabba = document.createElement("div");
        smallDabba.setAttribute("class","smallDabba");
        smallDabba.style.height = dimension+"px";
        smallDabba.style.width = dimension+"px";
        bigDabba.appendChild(smallDabba);
        smallDabba.addEventListener("mouseover", () => {
            smallDabba.style.backgroundColor = color;
        });
    }
    container.appendChild(bigDabba);
}
