const rotate = document.getElementById("rotate-screen");
const intro = document.getElementById("intro-screen");

const verifyBtn =
document.getElementById("verify-btn");

const birthdayCode =
document.getElementById("birthday-code");

const wrongMessage =
document.getElementById("wrong-message");

const wrongMessages = [

"เอ... แน่ใจหรือเปล่าน้า",

"คนสำคัญของวันนี้ใช่คนนี้จริง ๆ ไหมนะ",

"ทำไมถึงกรอกผิดล่ะ (｡•̀ ⤙ •́ ｡ꐦ) !!!",

"ตำรวจไซเบอร์มาลงด่วน มีผู้บุกรุก !!! 🚨",

"เดี๋ยวก่อนนะคะ นี่มันเริ่มน่าสงสัยแล้ว",

"หรือว่ากำลังมีคนแอบอ้างเป็นพี่เพลงอยู่กันแน่นะ",

"ฮื่อ... ตอบผิดจริง ๆ น่ะเหรอคะ (˚ ˃̣̣̥⌓˂̣̣̥  )づ♡",

"ฮึ่ม คำถามนี้ไม่น่ายากขนาดนั้นนี่นา",

"ระบบตรวจสอบตัวตนเริ่มทำงานอย่างหนัก ⚠️",

"ไม่เป็นไรค่ะ ลองใหม่อีกทีเนอะ เน่ยังเชื่อในตัวพี่เพลงอยู่น้า"

];

let wrongCount = 0;

/* =========================
   ENTER INTRO
========================= */

setTimeout(() => {

    rotate.classList.add("hide");

    setTimeout(() => {

        intro.classList.add("show");

        setTimeout(() => {

            intro.classList.add("open"); 

        }, 1800);

    }, 1800);

}, 2500);

/* =========================
   INTRO → CAKE
========================= */

verifyBtn.onclick = () => {

    const code =
    birthdayCode.value.trim();

    if(code === "2406"){

        intro.classList.remove("show");

        setTimeout(() => {

            cakeScene.classList.add("show");

            startCakeScene();

        },1200);

    }

    else{

        wrongCount++;

        const randomMessage =

        wrongMessages[
            Math.floor(
                Math.random() *
                wrongMessages.length
            )
        ];

        wrongMessage.textContent =
        randomMessage;

        birthdayCode.value = "";

    }

};

birthdayCode.addEventListener(
"keydown",
(e)=>{

    if(e.key==="Enter"){

        verifyBtn.click();

    }

});

/* =========================
   CAKE SCENE
========================= */

const cakeScene = document.getElementById("cake-scene");
const cakeDark = document.getElementById("cake-dark");
const cakeLight = document.getElementById("cake-light");
const focusBlur = document.getElementById("focus-blur");

const flame = document.getElementById("flame");
const glow = document.getElementById("candle-glow");
const lensFlare = document.getElementById("lens-flare");
const smoke = document.getElementById("smoke");

/* =========================
   START CAKE SCENE
========================= */

function startCakeScene(){

    cakeScene.classList.add("show");

    focusBlur.classList.add("show");

    flame.classList.remove("show");
    glow.classList.remove("show");
    lensFlare.classList.remove("show");
    cakeLight.classList.remove("show");


    setTimeout(() => {

        flame.classList.add("show");
        glow.classList.add("show");
        cakeLight.classList.add("show");

        setTimeout(() => {
            lensFlare.classList.add("show");
        }, 150);
    }, 2000);

    setTimeout(() => {
            focusBlur.classList.remove("show");
    }, 2000);
    setTimeout(() => {
            focusBlur.classList.remove("show");
    }, 2000);

    setTimeout(() => {
        wishScreen.classList.add("show");
    }, 6000);

    setTimeout(() => {

        document.getElementById("wish-text");

        wishScreen.style.cursor = "pointer";
        enableBlow();

    }, 6000);
}

/* =========================
   WISH FLOW 
========================= */

const wishScreen = document.createElement("div");

wishScreen.id = "wish-screen";

wishScreen.innerHTML = `
    <div class="wish-box">

        <h2 id="wish-title">
            ตั้งจิตอธิษฐาน
        </h2>
        <p id="wish-text">
            ก่อนเป่าเทียน ลองขอพรในใจสักนิดนะคะ<br>
            (แตะตรงไหนก็ได้เพื่อเป่าเทียน)</p>

    </div>
`;

document.body.appendChild(wishScreen);

function showWish(){

    wishScreen.classList.add("show");

    setTimeout(() => {
        showSecondLine();
    }, 100);
}

function blowOutCandle(){

    wishScreen.classList.add("hide-out");
    setTimeout(() => {
    wishScreen.classList.remove("show");
}, 800);

    flame.style.animation = "flameOut 0.6s ease-out forwards";

    flame.style.transition = "0.8s ease";
    glow.style.transition = "1s ease";

    flame.classList.add("burst");
    flame.style.animation = "flameOut 1.2s ease-out forwards";

    flame.style.opacity = 0;
    glow.style.opacity = 0;

    flame.style.animation = "flameOut .75s ease-out forwards";

    startSmoke();

    smoke.style.animation = "smokeRise 3s ease-out forwards";

    setTimeout(() => {
    showBirthdayCard();
}, 4200);
}

function enableBlow(){

    document.addEventListener(
        "click",
        blowOutCandle,
        { once:true }
    );
}

function startSmoke(){

    const smokes = document.querySelectorAll(".smoke");

    smokes.forEach((s, i) => {

        s.style.animation =
        `smokeRise 2.8s ease-out forwards`;

        s.style.animationDelay = `${i * 0.6}s`;

    });
}

const cardOverlay = document.getElementById("card-overlay");

const closeCard = document.getElementById("close-card");

function showBirthdayCard(){

    cardOverlay.classList.add("show");
}

closeCard.addEventListener("click", () => {

    cardOverlay.classList.remove("show");

    setTimeout(() => {

        showEnding();

    }, 500);

});

const replayCard = document.getElementById("replay-card");

const ending = document.getElementById("ending-message");

function showEnding(){

    ending.classList.add("show");

    setTimeout(() => {

        replayCard.classList.add("show");

    }, 1000);

}

replayCard.addEventListener("click", () => {

    ending.classList.remove("show");

    cardOverlay.classList.add("show");

});

closeCard.addEventListener("click", () => {

    cardOverlay.classList.remove("show");

    if(!ending.classList.contains("show")){

        setTimeout(() => {

            ending.classList.add("show");

        }, 500);

    }

});