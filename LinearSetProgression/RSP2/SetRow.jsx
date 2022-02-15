




document.querySelector("#startWeightBtn").addEventListener("click", setStartingWeight);
document.querySelector("#createBtn").addEventListener("click", createTable);


function setStartingWeight(){

    document.querySelector('#noNum').innerHTML = '';
    let startingWeight = document.querySelector('#startWeight').value;   
    let isEmpty = document.querySelector('table').rows[2].cells[1].textContent;
    
    if (!parseInt(isEmpty)) {
        for (let i = 3; i <= 7; i++) {
            document.querySelector('table').rows[i].cells[1].textContent = startingWeight;
        }

        document.querySelector('#firstTotal').innerHTML = startingWeight*5;

        var d = new Date(); 
	var date = d.toISOString().slice(0,10);
    document.querySelector('thead').rows[1].cells[2].textContent = date;
    }
    let eName = document.querySelector('#exercise').value;
    document.querySelector('#exerciseName').innerHTML = eName;

    let parent = document.querySelector('#start')
    while (parent.firstChild) { 
        parent.removeChild(parent.firstChild); 
    }
    
}

let workoutCounter =1;
function createTable() {       

    let isEmpty = document.querySelector('table').rows[3].cells[1].textContent;  

    if (!parseInt(isEmpty)) {
        document.querySelector('#noNum').innerHTML = 'Set start weight';
        return;
    }
    document.querySelector('#noNum').innerHTML = '';
    
    let newTable = document.querySelector('table').cloneNode(true);
    let weight=[];
    let reps=[];
    let totalKg =0;
    for (let i = 3; i < newTable.rows.length; i++) {

        weight[i-2] = Number(newTable.rows[i].cells[1].textContent);
        reps[i-2] = newTable.rows[i].cells[2].children[0].value;
        //check if input is empty
        if (!parseInt(reps[i-2])) {
            document.querySelector('#noNum').innerHTML = 'Fill in reps for every set!';
            return;
        }
        //add weight if true
        if (reps[i-2]>5) {
            newTable.rows[i].cells[1].textContent = weight[i-2] + 5;
        }
        //set input to empty in new table
        newTable.rows[i].cells[2].children[0].value ='';  
        
        totalKg += Number(newTable.rows[i].cells[1].textContent);
        
    }

    var d = new Date(); 
	var date = d.toISOString().slice(0,10);
    newTable.rows[1].cells[2].textContent = date;

    newTable.rows[1].cells[1].textContent = totalKg;

    workoutCounter++;
    newTable.rows[1].cells[0].textContent = workoutCounter;

    let parent = document.querySelector('#column1');
    parent.insertBefore(newTable,parent.firstChild);
}
