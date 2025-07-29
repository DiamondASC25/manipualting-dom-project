// Button variables
let paragraphButton = document.getElementById("p-button");
let imageButton = document.getElementById("img-button");
let nothingButton = document.getElementById("do-nothing");

let paragraphDiv = document.getElementById("p-div");
let imageDiv = document.getElementById("img-div");


let paragraphCount = 0;
let imagesCount = 0;
let nothingCount = 0;

let countsArray = [paragraphCount, imagesCount, nothingCount];

let counts = document.getElementsByClassName("count");
for(let i = 0; i < counts.length; i++){
    counts[i].style.fontFamily = "Times New Roman";
    counts[i].innerHTML += "0";
}

paragraphButton.onclick = function() {
    paragraphCount++;
    counts[0].innerHTML = "pCount: " + paragraphCount;
    paragraphDiv.style.display = "block";
    imageDiv.style.display = "none";
    
    let newP = document.createElement("p");
    newP.innerHTML += "Hot chocolate is bad today";
    paragraphDiv.appendChild(newP);
    newP.style.backgroundColor = "black";
    newP.style.color = "white";
    paragraphDiv.style.fontFamily = "Times New Roman";
}

imageButton.onclick = function() {
   imagesCount++;
   counts[1].innerHTML = "imgCount: " + imagesCount;
    imageDiv.style.display = "block";
   paragraphDiv.style.display = "none";
   
   let newImage = document.createElement("img");
   newImage.src = "pikachu.png";
   newImage.style.width = "150px";
   imageDiv.appendChild(newImage);
}

nothingButton.onclick = function() {
    nothingCount++;
    counts[2].innerHTML = "nothingCount: " + nothingCount;
    imageDiv.style.display = "none";
    paragraphDiv.style.display = "none";
}
















