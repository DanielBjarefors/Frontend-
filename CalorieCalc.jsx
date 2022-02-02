


function add() {
    var f = parseInt(document.getElementsByName('input1')[0].value);
    var result = f*25;
    var result2 = f*2.2;
    let ThreeHighDays = result * (1+1/4)
    let FourLowDays = (result * 7 - (ThreeHighDays*3))/4

    document.getElementsByName('displayCalories')[0].value= result.toFixed(0);
    document.getElementsByName('displayProtein')[0].value= result2.toFixed(0);
    document.getElementsByName('display1')[0].value= FourLowDays.toFixed(0);
    document.getElementsByName('display2')[0].value= FourLowDays.toFixed(0);
    document.getElementsByName('display3')[0].value= FourLowDays.toFixed(0);
    document.getElementsByName('display4')[0].value= FourLowDays.toFixed(0);
    document.getElementsByName('display5')[0].value= ThreeHighDays.toFixed(0);
    document.getElementsByName('display6')[0].value= ThreeHighDays.toFixed(0);
    document.getElementsByName('display7')[0].value= ThreeHighDays.toFixed(0);





}