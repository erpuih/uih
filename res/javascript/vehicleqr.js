document.addEventListener("DOMContentLoaded", function () {
    let jsVehicleID = new URLSearchParams(window.location.search).get("queryVehicleID");
    let jsTargetlink = "https://7mm987ks-7000.asse.devtunnels.ms/3/Vehicle/Detail?queryVehicleID=" + jsVehicleID;
    document.getElementById("idAVehicleID").href = jsTargetlink;
});