window.addEventListener("load", () => {
    const timeOut = setTimeout(montreLa, 2000);
});

function montreLa(){
    var montre = document.getElementById("titre");
    montre.style.display = "block";
}

var image1 = document.getElementById("watchOne");

image1.addEventListener( 'click', () =>{
    image1.style.width = '600px';
    image1.style.height = '300px';
});

var image2 = document.getElementById("watchTwo");

image2.addEventListener( 'click', () =>{
    image2.style.width = '600px';
    image2.style.height = '300px';
});

var image3 = document.getElementById("watchThree");

image3.addEventListener( 'click', () =>{
    image3.style.width = '600px';
    image3.style.height = '300px';
});
