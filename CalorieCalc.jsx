let weightinput = document.getElementById('weight')
        .addEventListener('keydown', function(e){
    if(e.key == "Enter"){
        CalculateAvgCalories();
    }
});


function CalculateAvgCalories() {
    var f = parseInt(document.getElementsByName('input1')[0].value);
    let calorieMultiplier =0;
    let proteinMultiplier =0;
    if (document.getElementById("beginner").checked == true) {
        calorieMultiplier=25;
        proteinMultiplier=1.8
    } 
    else {
        calorieMultiplier=30;
        proteinMultiplier=2.2

    }



    var avgCalories = f*calorieMultiplier;
    var protein = f*proteinMultiplier;
    
    let ThreeHighDays = Math.round((avgCalories * (1+1/4)/10))*10;

    let FourLowDays = Math.round(((avgCalories * 7 - (ThreeHighDays*3))/4)/10)*10;
    let avgToDisplay = ((ThreeHighDays*3)+(FourLowDays*4))/7
    document.getElementsByName('displayCorrectedCalories')[0].value= avgToDisplay.toFixed(0);
    document.getElementsByName('displayProtein')[0].value= protein.toFixed(0);
    document.getElementsByName('display1')[0].value= FourLowDays.toFixed(0);
    document.getElementsByName('display2')[0].value= FourLowDays.toFixed(0);
    document.getElementsByName('display3')[0].value= FourLowDays.toFixed(0);
    document.getElementsByName('display4')[0].value= FourLowDays.toFixed(0);
    document.getElementsByName('display5')[0].value= ThreeHighDays.toFixed(0);
    document.getElementsByName('display6')[0].value= ThreeHighDays.toFixed(0);
    document.getElementsByName('display7')[0].value= ThreeHighDays.toFixed(0);





}