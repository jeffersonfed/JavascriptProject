let country = document.getElementsByClassName('country');
let zone = ['Asia/Jakarta'];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function inputText(country,i) {
    let region = new Date().toLocaleString('en-US', { timeZone: zone[i] });
    region = new Date(region);
    y = region.getFullYear();
    m = months[region.getMonth()];
    d = region.getDate();
    h = region.getHours();
    mn = region.getMinutes();
    s = region.getSeconds();
    (h < 10) ? h = "0" + h: h;
    (m < 10) ? m = "0" + m: m;
    (s < 10) ? s = "0" + s: s;
    
    let countryDate = country.getElementsByClassName('date')[0];
    let countryTime = country.getElementsByClassName('time')[0];
    countryDate.innerText = d +" "+ m +". "+ y;
    countryTime.innerText = h +":"+ mn +":"+ s;
}
function timezone() {
    for (let i = 0; i < zone.length; i++) {
        inputText(country[i],i);
    }
}
timezone();
setInterval(timezone, 1000);