function changeColor(){
    var red = Math.floor(Math.random() *256);
    var green = Math.floor(Math.random() *256)
    var blue = Math.floor(Math.random() *256)
    document.querySelector('body').style.backgroundColor = `rgb(${red},${green},${blue})`;
    // document.querySelector("body").style.backgroundColor ="red";
};