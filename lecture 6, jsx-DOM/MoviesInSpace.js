

let btn = document.querySelector('#MakeInSpace');
btn.addEventListener('click', () => {

let titel = document.querySelector('a').textContent;
let titel2 = document.querySelectorAll('a');


let res = titel.includes('In Space')


    if (document.querySelector('#MakeInSpace').checked==true) {
        document.querySelectorAll('a').forEach(x=>x.textContent += ' In Space')

    }

    else if(res) {
        for (const e of titel2) {
            e.innerText = e.textContent.slice(0, -9)
        }
    }
   
})


