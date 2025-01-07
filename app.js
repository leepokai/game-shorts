let typing_title = document.querySelector("#typing-title");
document.addEventListener('DOMContentLoaded', function(){
    let text = "Welcome to Game Shorts!!!"
    let index = 0;
    console.log("hello");
    typing_title.innerText="";
    for(let i=0; i<text.length; i++){
        setTimeout(() => {
            typing_title.innerText += text.charAt(index);
            index++;
        }, 100 * i);
    }
    //typing_title.innerText="";
})