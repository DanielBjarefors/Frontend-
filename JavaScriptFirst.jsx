

// let input = prompt("write something!")
// alert(input);


let string = "Skriv ett JavaScript-program som läser in en text från användaren (med prompt). Och sedan visar upp (med alert) följande information om texten.";

let count =0;
for (const e of string) {
    if(e!==' '&&e!=='('){
        count++;
    }
}
alert(count);

count =0;
for (const e of string) {
    if(e==='a'||e==='e'||e==='i'||e==='o'||e==='u'||e==='y'||e==='å'||e==='ä'||e==='ö' ? true : false){
        count++;
    }
}
alert(count);

let array=string.split('.');
alert(array.length-1)