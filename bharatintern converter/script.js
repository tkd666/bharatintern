function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const unitType = document.getElementById("unitType").value;
    let result;

    if (unitType === "celsius") {
        result = (inputTemp * 9 / 5) + 32;
        document.getElementById("result").innerText = `${inputTemp} °C is equal to ${result.toFixed(2)} °F`;
    } else if (unitType === "fahrenheit") {
        result = (inputTemp - 32) * 5 / 9;
        document.getElementById("result").innerText = `${inputTemp} °F is equal to ${result.toFixed(2)} °C`;
    } else {
        document.getElementById("result").innerText = "Invalid input";
    }
}
