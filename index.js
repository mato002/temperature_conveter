const celsiusEL = document.getElementById("celsius")
const fahrenheitEL  = document.getElementById("fahrenheit")
const kelvinEL = document.getElementById("kelvin")

function computeTemp(event){
    const currentValue = +event.target.value

    switch (event.target.name){
        case "celsius":
            kelvinEL.value = (currentValue + 273.32)
            fahrenheitEL = (currentValue * 1.8 + 32)
            break;
            case "fahrenheit":
                celsiusEL.value = ((currentValue - 32) /1.8)
                kelvinEL.value = ((currentValue -32)/ 1.8 + 273.32)
                break;
                case "kelvin":
                    celsiusEL.value = (currentValue - 273.32) 
                    fahrenheitEL.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
                    break;
                    default:
                        break;


    }
}