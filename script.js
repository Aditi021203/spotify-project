console.log("welcome to spotify");
//Initialize the Variables
let songIndex=0;
let audioElement= new Audio('song1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songs=[
    {songName:"Closer",filePath:"song1.mp3",coverPath:"cover/1.jpg"},
     {songName:"PicturePerfect",filePath:"song2.mp3",coverPath:"cover/1.jpg"},
      {songName:"Flames",filePath:"song3.mp3",coverPath:"cover/1.jpg"},
       {songName:"Be yours",filePath:"song4.mp3",coverPath:"cover/1.jpg"},
        {songName:"Zara Zara",filePath:"song5.mp3",coverPath:"cover/1.jpg"},
         {songName:"Salam-e-ishq",filePath:"song7.mp3",coverPath:"cover/1.jpg"},
]

//audioElement.play();
//handle play pause button
masterplay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0)
    { 
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})


//event listner
audioElement.addEventListener('timeupdate',()=>{
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
})

