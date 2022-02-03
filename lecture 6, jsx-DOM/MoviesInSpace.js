

let btn = document.querySelector('#MakeInSpace');
debugger
btn.addEventListener('click', () => {
debugger
    if (document.querySelector('#MakeInSpace').checked==true) {
        document.querySelectorAll('a').forEach(x=>x.textContent += ' In Space')

    } else {
        document.querySelectorAll('a').forEach(x=>x.textContent -= ' In Space')

    }
   
})


