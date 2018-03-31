var color = document.getElementById("color");
var preview = document.getElementById("preview");
var display = document.getElementById("display");
var rangebut = document.getElementById("range");
var numbut = document.getElementById("number");
var hair = document.getElementById("hair");
var eyes = document.getElementById("eyes");
var nose = document.getElementById("nose");
var mouth = document.getElementById("mouth");
var plus = document.getElementById("plus");
var random = document.getElementById("random");
var prevsave;


//change bg color

color.addEventListener("change", function() {
   preview.style.backgroundColor = this.value; 
});


//range change

document.getElementById("range1").addEventListener("change", function() {
     hair.style.width = this.value+"%";
    
    
});
document.getElementById("range2").addEventListener("change", function() {
    eyes.style.width = this.value+"%";
});
document.getElementById("range3").addEventListener("change", function() {
    nose.style.width = this.value+"%";
});
document.getElementById("range4").addEventListener("change", function() {
    mouth.style.width = this.value+"%";
});



//change features on click

var num = 0;

hair.addEventListener("click", function () {
    num = num +1;
    hair.src = "img/hair"+num+".png";
    if(num >= 3){
        num = 0;
    }
});
eyes.addEventListener("click", function () {
    num = num +1;
    eyes.src = "img/eyes"+num+".png";
    if(num >= 3){
        num = 0;
    }
});
nose.addEventListener("click", function () {
    num = num +1;
    nose.src = "img/nose"+num+".png";
    if(num >= 3){
        num = 0;
    }
});
mouth.addEventListener("click", function () {
    num = num +1;
    mouth.src = "img/mouth"+num+".png";
    if(num >= 3){
        num = 0;
    }
}); 



//plus button. 

function createFace() {
//    creates new div
    prevsave = document.createElement("div");
    display.appendChild(prevsave);
    prevsave.id="previewsave";
    
//    copy elements
    prevsave.style.backgroundColor = preview.style.backgroundColor;
    
    
    var prevhair = document.createElement("img");
    prevsave.appendChild(prevhair);
    
        prevhair.src = hair.src;
        prevhair.style.width = hair.style.width;
        prevhair.style.top = hair.style.top;

        prevhair.className="previtems";
    
    
    var preveyes = document.createElement("img");
    prevsave.appendChild(preveyes);
    
        preveyes.src = eyes.src;
        preveyes.style.width = eyes.style.width;
        preveyes.style.top = eyes.style.top;

        preveyes.className="previtems";
    
    
    var prevnose = document.createElement("img");
    prevsave.appendChild(prevnose);
    
        prevnose.src = nose.src;
        prevnose.style.width = nose.style.width;
        prevnose.style.top = nose.style.top;

        prevnose.className="previtems";
    
    
    var prevmouth = document.createElement("img");
    prevsave.appendChild(prevmouth);
    
        prevmouth.src = mouth.src;
        prevmouth.style.width = mouth.style.width;
        prevmouth.style.top = mouth.style.top;

        prevmouth.className="previtems";
}



//random button.

function randomFace() {
    var h = Math.round(Math.random()*2)+1;
    var e = Math.round(Math.random()*2)+1;
    var n = Math.round(Math.random()*2)+1;
    var m = Math.round(Math.random()*2)+1;
    
    hair.src = "img/hair"+h+".png";
    eyes.src = "img/eyes"+e+".png";
    nose.src = "img/nose"+n+".png";
    mouth.src = "img/mouth"+m+".png";
    
    
    var r = Math.round(Math.random()*70);
    var r2 = Math.round(Math.random()*40);
    var r3 = Math.round(Math.random()*30);
    var r4 = Math.round(Math.random()*35);

    document.getElementById("range1").value = r;
    document.getElementById("range2").value = r2;
    document.getElementById("range3").value = r3;
    document.getElementById("range4").value = r4;
    hair.style.width = document.getElementById("range1").value+"%";
    eyes.style.width = document.getElementById("range2").value+"%";
    nose.style.width = document.getElementById("range3").value+"%";
    mouth.style.width = document.getElementById("range4").value+"%";
    
    
    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);
    
     preview.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}



//Number button.

function changeType(type){
    document.getElementById("range1").type = type;
    document.getElementById("range2").type = type;
    document.getElementById("range3").type = type;
    document.getElementById("range4").type = type;
}

rangebut.addEventListener("click", function () {
    changeType("range");
});

numbut.addEventListener("click", function () {
    changeType("number");
}); 



//autobutton.
      
var autoset;
    
function autoran() {
    autoset = setInterval(function(){
    var h = Math.round(Math.random()*2)+1;
    var e = Math.round(Math.random()*2)+1;
    var n = Math.round(Math.random()*2)+1;
    var m = Math.round(Math.random()*2)+1;
        
    prevsave = document.createElement("div");
    display.appendChild(prevsave);
        prevsave.id="previewsave";
    
    var prevhair = document.createElement("img");
    prevsave.appendChild(prevhair);
        prevhair.src = "img/hair"+h+".png";
        prevhair.style.width = hair.style.width;
        prevhair.style.top = hair.style.top;
        prevhair.className="previtems";
    
    
    var preveyes = document.createElement("img");
    prevsave.appendChild(preveyes);
        preveyes.style.width = eyes.style.width;
        preveyes.style.top = eyes.style.top;
        preveyes.src = "img/eyes"+e+".png";
        preveyes.className="previtems";
    
    
    var prevnose = document.createElement("img");
    prevsave.appendChild(prevnose);
        prevnose.src = "img/nose"+n+".png";
        prevnose.style.width = nose.style.width;
        prevnose.style.top = nose.style.top;
        prevnose.className="previtems";
    
    
    var prevmouth = document.createElement("img");
    prevsave.appendChild(prevmouth);
        prevmouth.src = "img/mouth"+m+".png";
        prevmouth.style.width = mouth.style.width;
        prevmouth.style.top = mouth.style.top;
        prevmouth.className="previtems";
        
    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);
    
     prevsave.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    }, 800); 
}