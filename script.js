const norsk = document.querySelector('#norsk');              //Under henter koden inn objecter fra HTML filen og gir de variabelnavn/pointers i JS
const kinesisk = document.querySelector('#kinesisk');
const overskrift1 = document.querySelector('.overskrift1')
const overskrift2 = document.querySelector('.overskrift2')
const snukortet = document.querySelector('.snuKortetKnapp');
const neste = document.querySelector('.nesteKortKnapp');
const byttom = document.querySelector('.endreKortKnapp');
const restartKnapp = document.querySelector('.restartKnapp')
let a = 0;
let valg = 0;           //Telleren som viser om de kinesiske eller norske glosene er synelige


//Under definerers et objekt som inneholder setninger/ord på norsk og på kinesisk
let ord = {
    'Mat':'Shíwù 食物',
    'I dag':'Jīntiān 今天',
    'I morgen':'Míngtiān 明天',
    'Når':'Shénme shíhòu 什么时候',
    'Universitet':'Dàxué 大学',
    'Bank':'Yínháng 银行',
    'Bokhandel':'Shūdiàn 书店',
    'Søndag':'Xīngqírì 星期日',
    'Dyr':'Guì 贵',
    'Billig':'Piányi 便宜',
    'Gal':'Fēng 疯',
    'Ordbok':'Cídian 词典',
    'Avis':'Bàozhi 报纸',
    'Barn':'Háizi 孩子'
}
let data = Object.entries(ord)      //Denne funksjonen gjør det lettere å søke gjennom objektet ved å i praksis gjøre objektet om til en array som inneholder to sett med verdier

function shuffle(array){        //Følgende funksjon omstokker alle ordene og deres oversettelse i arrayen 'data'. Flashcardsa vil derfor få en ny tilfeldig rekkefølge hver gang nettsiden lastes inn
    let currentIndex = array.length, randomIndex;       //Her defineres currentIndex som lengden av arrayen. Og variablen randomIndex introduseres men defineres ikke enda
   
    while (currentIndex != 0 ){     //Imens det er elementer igjen å sortere
        randomIndex = Math.floor(Math.random()*currentIndex);   //Velg et gjenstående element
        currentIndex--;     //Gjør gjenstående Index 1 verdi mindre
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];  //Bytt ut elementet med det nåværende elementet
    }
    return array;   
}
shuffle(data)

byttom.addEventListener('click', function(){ //Hver gang knappen blir trykket på skifter displayet mellom å vise kinesisk og norsk øverst
    valg++
    velgNesteKort()
    kinesisk.style.visibility = 'hidden';
})

function velgNesteKort(){       //Denne funksjonen velger det neste ordet i arrayen
    let ord = data[a];
    if (a<data.length){
        if (valg % 2==0){           //Hvis telleren 'valg' er et partall kommer det norske ordet øverst
            overskrift1.innerHTML = 'Norsk:'
            overskrift2.innerHTML = 'Kinesisk:'
            norsk.innerHTML = ord[0];
            kinesisk.innerHTML = ord[1];
        }
        else{                       //Hvis telleren 'valg' er et oddetall kommer det kinesiske ordet øverst
            overskrift1.innerHTML = 'Kinesisk:'
            overskrift2.innerHTML = 'Norsk:'
            norsk.innerHTML = ord[1];
            kinesisk.innerHTML = ord[0];
        }
        a++
    }
    else {
        restartKnapp.style.visibility = 'visible'       //Restartknappen blir kun synlig når det ikke er fler ord å vise fra objektet
    }
}

snukortet.addEventListener('click', function() {
    kinesisk.style.visibility = 'visible';
})

restartKnapp.addEventListener('click',function(){
    location.reload()               //Når restartknappen blir trykket laster den inn siden på nytt og danner med det en ny tilfeldig rekkefølge av ordene i objektet
})

neste.addEventListener('click', function() {
    velgNesteKort();
    kinesisk.style.visibility = 'hidden';
})