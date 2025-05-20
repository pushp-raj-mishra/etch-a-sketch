

let container = document.querySelector(".container");
let button = document.querySelector(".size");
let x = 0;
button.addEventListener("click",()=>{
    let z = prompt("Enter the required size <= 100");
    x = parseInt(z);
    if (x>100) {
        alert("Size should be less than equal to 100");
        location.reload();
    }
    let size = (x>0)?x:16;
    let dimension = 600/size;
    draw(size,dimension);
})


function draw(size,dimension){
container.innerHTML = "";
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
}
draw();
