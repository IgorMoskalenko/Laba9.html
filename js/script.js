var userlogin = prompt("Введіть ваш логін");
    document.getElementById("username").innerText = userlogin;
var UserNumber,  UserScore = 0;
var PcNumber, PcScore = 0;
var round = 0;

var cards = {
     2:{ // valt
        0: "img/JD.png",
        1: "img/JH.png",
        2: "img/JC.png",
        3: "img/JS.png"
    },
    3:{ // queen
        0: "img/QS.png",
        1: "img/QC.png",
        2: "img/QH.png",
        3: "img/QD.png"
    },
    4:{ // king
        0: "img/KD.png",
        1: "img/KH.png",
        2: "img/KC.png",
        3: "img/KS.png"
    },
    6:{ 
        0: "img/6S.png",
        1: "img/6C.png",
        2: "img/6H.png",
        3: "img/6D.png"
    },
    7:{ 
        0: "img/7D.png",
        1: "img/7H.png",
        2: "img/7S.png",
        3: "img/7C.png"
    },
    8:{ 
        0: "img/8S.png",
        1: "img/8C.png",
        2: "img/8H.png",
        3: "img/8D.png"
    },
    9:{ 
        0: "img/9D.png",
        1: "img/9H.png",
        2: "img/9C.png",
        3: "img/9S.png"
    },
    10:{ 
        0: "img/10S.png",
        1: "img/10C.png",
        2: "img/10H.png",
        3: "img/10D.png"
    },
    11:{ // tyz
        0: "img/AD.png",
        1: "img/AH.png",
        2: "img/AC.png",
        3: "img/AS.png"
    },
};

function Vuvod() {
    var vuvod;
    do {
        vuvod = Math.floor(Math.random() * 10 + 2);
    } 
    while (vuvod ==5);
    return vuvod;
    }



function start(){
    if(round == 3){
                if(UserScore < PcScore){
            alert("Нажаль цей компудахтер виявився сильним(( Ви програли\uD83D\uDE14\uD83D\uDE14\uD83D\uDE14");
                location.reload();
                return;
    }else if(UserScore > PcScore){
        alert("Вітаємо!! Ви перемогли цього бота\uD83D\uDCAA\uD83D\uDCAA\uD83D\uDCAA\uD83C\uDF8A\uD83C\uDF8A\uD83C\uDF8A");
            location.reload();
            return;
    }
    } 

    UserNumber = Vuvod();
    PcNumber = Vuvod();
    document.getElementById("usercard").src = cards[UserNumber][Math.floor(Math.random() * 4)];
    document.getElementById("pccard").src = cards[PcNumber][Math.floor(Math.random() * 4)];
    document.getElementById("vashschet").innerText = UserScore += UserNumber;
    document.getElementById("pcschet").innerText = PcScore += PcNumber;
    round++;
    document.getElementById("RoundCnt").innerText = `Спроба ${round} з 3`;
}