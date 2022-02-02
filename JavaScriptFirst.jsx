

// let input = prompt("write something!")
// alert(input);


let string = "Skriv ett JavaScript-program som läser in en text från användaren (med prompt). Och sedan visar upp (med alert) följande information om texten.";
//1
let count =0;
for (const e of string) {
    if(e!==' '&&e!=='('&&e!==')'&&e!=='.'){
        count++;
    }
}
// alert(count);
//2
count =0;
for (const e of string) {
    if(e==='a'||e==='e'||e==='i'||e==='o'||e==='u'||e==='y'||e==='å'||e==='ä'||e==='ö' ? true : false){
        count++;
    }
}
// alert(count);
//3
let array=string.split('.');
// alert(array.length-1)
//5
let wordsTemp = string.replace(/[().]/g,'');
let words = wordsTemp.split(' ');

count =0;
let wordLength = 0;
for (const e of words) {
    
    count++;
    wordLength += e.length;
}

// alert(wordLength/count)

//7

wordsT = string.replace(/[(). -]/g,'').toLowerCase();
let words1 = wordsT.split('');
words1.sort();
let letter;
let most =0;
let instans =1;

for (let i = 0; i < words1.length-1; i++) {
    
    if (words1[i]===words1[i+1]) {
        instans++;
    }
    else if (instans>most) {
        most=instans;
        letter=words1[i]; 
        instans=1;       
    }
    else{
        instans=1;
    }
    
}

alert(letter +'   '+most);


