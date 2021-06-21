const location_val = document.getElementById("location");
const temp_val = document.getElementById("temp_val");
const temp = document.getElementById("temp");
const api = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Allahabad,India&appid=82f55c1c332de85e5fa7eb1dcb5c731e&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            temp_val.innerText = data.main.temp - 4 + "°C";
            location_val.innerText = data.sys.country + "," + data.name;
            temp.innerText = `Temp mini ${data.main.temp_min} || Temp max${data.main.temp_max}`;
        })
        .catch(rejected => {
            console.log(rejected);
        });
}
api()