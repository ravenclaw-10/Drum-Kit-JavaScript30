document.addEventListener("keypress",function(e){
    const audio=document.querySelector(`audio[data-key="${e.key}"]`);
    const key=document.querySelector(`.key[data-key="${e.key}"]`);
    if (!audio) return; 
    audio.currentTime=0;
    audio.play();
    key.classList.add("playing");

    function removeTransition(e){
        console.log(e);
        if (e.propertyName !== "transform") return;
        this.classList.remove("playing");
    }
    const keys=document.querySelectorAll(".key");
    for(var i=0;i<keys.length;i++){
        console.log(keys[i]);
        keys[i].addEventListener("transitionend",removeTransition);
    }


});
