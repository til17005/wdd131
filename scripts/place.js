const temp = 65;
const wind = 5;

if (temp <= 50 && wind > 3) {
    function calculateWindChill(temp, wind) {
        return (35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16))).toFixed(2);
    }

    document.getElementById("windchill").textContent = calculateWindChill(temp, wind);
} else {
    document.getElementById("windchill").textContent = "N/A";
}