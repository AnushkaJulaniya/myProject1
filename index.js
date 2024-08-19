const testimonial=[
    {
        name: "Kamlesh Bhaiya",
        photoUrl :"img6.jpg" ,
        text: "Rupiya pesa kuch na chahu, bole meri rakhi hai, aashirwaad mile bhaiya ka,bas itna hi kafi hai."
  , imgUrl:"girls6.jpg"
    },
    {
        name:"Rajiv Bhaiya",
        photoUrl:"img3.jpg",
        text:"Rakhi ka tyohaar hai ,rakhi bandhvane ko bhai bhi taiyaar hai,bhai bola bahena ab to rakhi bandh do Bahena boli kalai piche karo pehle rupee hajaar do."
  ,imgUrl:"girls7.jpg"
    },
    {
        name:"Ashish Bhaiya",
        photoUrl:"img5.jpg",
        text:"Bhaiya tum jiyo hajaaro saal mile success tumhe har baar khushiyo ki ho tumpe bochar yehi prarthana hum karte hai baar baar.",
        imgUrl:"girls9.jpg"
    },

    {
        name:"Dishang Bhaiya",
        photoUrl:"img4.jpg",
        text: "Ghar me chahe bhai kitna bhi bada ho ghar ki Hitler to Bhen hi hoti hai .",
        imgUrl:"girls5.jpg"
    },
    {
        name:"Utsav Bhaiya",
        photoUrl:"img7.jpg",
        text: "Mere bhai jesa na hai na hoga koi duja, man kare hai bhaiya me ud kar pass tere aa jau ,lekar balaiyaa me vaari vaari jau",     imgUrl:"girls.jpg"
    },
    {
        name:"Divang Bhaiya",
        photoUrl:"img8.jpg",
        text: "Dur ho kitna , utna hi pass lagta hai Mere bhai hi hai jo Dhur se bhi mera khyal rakhta hai .",
        imgUrl:"girls10.jpg"
    },
    {
        name:"Anchit Bhaiya",
        photoUrl:"img1.jpg",
        text: "Khul ke jina sikhata hai ,pareshaniyon se kese nipta jae ye bhai hi sikhata hai,.vo bhai hai jo khud se pehle bhen ki fikar karta hai.",
         imgUrl:"girls1.jpg"
    },
    {
        name:"Akshat",
        photoUrl:"img2.jpg",
        text: "Bhai vo hai jo apka remote chin le Aur fir channel vahi chalaye jo use pasand ho,vo pagal hai,nadan hai ,thoda murkh hai,vo bhai hai mera bda.",
        imgUrl:"girls4.jpg"
    }
];
//declare that element which want to change concurrently

const img1 = document.querySelector(".user-img");
const text1 = document.querySelector(".text");
const username = document.querySelector(".username");
const girlImg = document.querySelector(".girls");
let index =0;
 

function updateTestimonial(){
    const { name, photoUrl, text,imgUrl} = testimonial[index];
    img1.src = photoUrl;
    text1.innerText = text;
    username.innerText = name;
    girlImg.src =imgUrl;
    index++;
    if(index === testimonial.length){
        index=0;
    }
    setTimeout(()=>{
        updateTestimonial();
    },5000);
}
updateTestimonial();

const backgroundMusic = document.getElementById('backgroundMusic');
var icon= document.getElementById("bodyImg");
icon.onclick=function(){
    if(backgroundMusic.paused){
    backgroundMusic.play();
    icon.src="rakhiMusic/pause.mp3";
    }
    else{
        backgroundMusic.pause();
    icon.src="rakhiMusic/play.mp3";

    }
}



// .addEventListener('play', function() {
//     console.log('Music is playing');
// });

// document.getElementById("backgroundMusic").addEventListener('pause', function() {
//     console.log('Music is paused');
// });

// Play or pause the music
// function toggleMusic() {
//     if (backgroundMusic.paused) {
//         backgroundMusic.play();
//     } else {
//         backgroundMusic.pause();
//     }
// }

// Event to toggle music (e.g., on button click)
document.querySelector('.toggle-music-btn').addEventListener('click', toggleMusic);