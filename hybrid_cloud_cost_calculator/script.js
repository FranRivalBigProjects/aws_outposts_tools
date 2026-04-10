function calc(){
let onprem=parseFloat(document.getElementById('a').value)||0;
let cloud=parseFloat(document.getElementById('b').value)||0;
let distance=parseFloat(document.getElementById('c').value)||0;

let total = onprem + cloud;
let latency = distance * 0.02;

let level = total < 1000 ? "Low hybrid cost ✅" :
            total < 5000 ? "Moderate cost ⚖️" :
            "High hybrid cost ⚠️";

let insights = "";
if(distance > 1000) insights += "High latency risk. Use edge closer.<br>";
if(cloud > onprem) insights += "Cloud dominates. Optimize usage.<br>";
if(onprem > cloud) insights += "On-prem heavy. Consider cloud shift.<br>";

document.getElementById('result').innerHTML =
"Total Cost: $" + total.toFixed(2) + "<br><br>" +
"Estimated Latency (ms): " + latency.toFixed(2) + "<br><br>" +
level + "<br><br>" + insights;
}
