document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("inputField");
    const calculateButton = document.querySelector(".inputButtonSection button:first-child");
    const resetButton = document.querySelector(".inputButtonSection button:last-child");
    const areaResult = document.getElementById("area-result");
    const perimeterResult = document.getElementById("perimeter-result");

    calculateButton.addEventListener("click", function () {
        const side = parseFloat(inputField.value);

        if (isNaN(side) || side <= 0) {
            alert("Masukkan panjang sisi yang valid.");
            return;
        }

        const area = side * side;
        const perimeter = side * 4;

        areaResult.textContent = area.toFixed(2);
        perimeterResult.textContent = perimeter.toFixed(2);
    });

    resetButton.addEventListener("click", function () {
        inputField.value = "";
        areaResult.textContent = "";
        perimeterResult.textContent = "";
    });
});