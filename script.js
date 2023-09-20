let resultId=document.getElementById('resultcontainer');
const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celtofah = (cel) => {
        let fahrenheit = Math.round((cel * 9 /5)+32);
        return fahrenheit;
    }

    const fahtocel = (fah) => {
        let Celsius = Math.round((fah-32)*5/9);
        return Celsius;
    }

    let result;
    
    if(valueTemp == 'cel'){
        result = celtofah(numberTemp);
        resultId.innerHTML = `= ${result}Fahrenheit &#176`;
        // console.log(result);
    }   else {
        result = fahtocel(numberTemp);
        resultId.innerHTML = `= ${result}Celsius`;   
    }

}