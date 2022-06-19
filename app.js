const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    /*
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
    */
    h1.classList.toggle(clickedClass);
    console.log(h1.classList)
}
/*
function handleMouseEnter(){
    console.log("mouse is here");
}

function handleMouseLeave(){
    console.log("mouse is leave");
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
*/
h1.addEventListener("click", handleTitleClick);
