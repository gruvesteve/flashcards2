function shuffle(array){
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0 ){     /*Imens det er elementer igjen å sortere*/
        //Velg et gjenstående element
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
        //Bytt ut elementet med det nåværende elementet
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;   
}
//array = ["a","b","c","d"];      //Definerer arrayen som skal bli shufflet

//console.log(array)
//console.log(shuffle(array))

let ord = {
    'Mat':'Shíwù 食物',
    'I dag':'Jīntiān 今天',
    'I morgen':'Míngtiān 明天',
    'Når':'Shénme shíhòu 什么时候',
    'Universitet':'Dàxué 大学',
    'Bank':'Yínháng 银行',
    'Bokhandel':'Shūdiàn 书店',
    'Søndag':'Xīngqírì 星期日',
}
let data = Object.entries(ord)

console.log(shuffle(data))