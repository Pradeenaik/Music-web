let progress=document.querySelector("#progress");
let song=document.querySelector("#song");
let ctr=document.querySelector("#ctrlIcn");

song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}
function playPause(){
    if(ctr.classList.contains("fa-pause")){
        song.pause();
        ctr.classList.remove("fa-pause");
        ctr.classList.add("fa-play");
    }
    else{
        song.play();
        ctr.classList.remove("fa-play");
        ctr.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(() => {
        progress.value=song.currentTime;
    }, 500);
}

progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    ctr.classList.add("fa-pause");
    ctr.classList.remove("fa-play");
}
console.dir(song);