
let audioelement=new Audio(one);

let songIndex=0;
let masterplay=document.getElementById('masterplay');
let progress=document.getElementById('range');
let gif=document.getElementById('gifim');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let masterSongName = document.getElementById('masterSongName');


let songs=[
    {songname: "Baarish lete aana - Darshan Raval", filepath: one,coverpath: one_c},
    {songname: "Bekhayali - kabir singh", filepath: two,coverpath: two_c},
    {songname: "Bhula Diya - Darshan raval", filepath: three,coverpath: three_c},
    {songname: "Odhani - Darshan Raval", filepath: four,coverpath: four_c},
]

songitem.forEach((element,i)=>{
    console.log(element,i);

    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;

})


masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
               gif.style.opacity=1;
                masterplay.classList.add('fa-pause-circle');


    }else{
        audioelement.pause();
        gif.style.opacity=0;
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
})

audioelement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');



    pro=parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(pro);
    progress.value=pro;


})
progress.addEventListener('change',()=>
{
    audioelement.currentTime=progress.value*audioelement.duration/100;
})



const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('play')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('play')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
console.log(songIndex);

        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `/static/mp3/${songIndex+1}.mp3`;

        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        let masterSongName = document.getElementById('masterSongName');
        masterSongName.innerHTML=songs[songIndex].songname;
    })
})

// document.getElementById('0').addEventListener('click',(e)=>{
//     audio=document.getElementById("one_audio");
//     audio.play();
// })

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=3){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioelement.src = `/static/mp3/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    let masterSongName = document.getElementById('masterSongName');
    masterSongName.innerHTML=songs[songIndex].songname;

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioelement.src = `/static/mp3/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    let masterSongName = document.getElementById('masterSongName');
    masterSongName.innerHTML=songs[songIndex].songname;
})