  
document.querySelector("button").addEventListener("keypress", CreateTable);

function CreateTable() {    
    document.querySelector('#noNum').innerHTML = '';
    let newTable = document.querySelector('table').cloneNode(true);
    let weight=[];
    let reps=[];

    for (let i = 1; i < newTable.rows.length; i++) {

        weight[i-1] = newTable.rows[i].cells[1].textContent;
        reps[i-1] = newTable.rows[i].cells[2].children[0].value;

        if (!parseInt(reps[i-1])) {
            document.querySelector('#noNum').innerHTML = 'Fill in reps for every set!';
            return;
        }
        if (reps[i-1]>5) {
            newTable.rows[i].cells[1].textContent = Number(weight[i-1]) + 5;
        }

        newTable.rows[i].cells[2].children[0].value ='';        
    }

    let parent = document.querySelector('#column');
    parent.insertBefore(newTable,parent.firstChild);


}
