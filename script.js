const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const btn = document.getElementById("btn");
const time = document.getElementById("time");
const icon = document.getElementById("icon");

let data;
const apiKey = "a4a3c59e3aba4aea837155332242103";
const getData = async (event) => {
  event.preventDefault();

  const city = inputBox.value.toLowerCase();
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const fetchData = await fetch(url);
  const orgData = await fetchData.json();
  data = orgData;
  console.log(data);

  if (data.error) {
    alert("Please Enter Valid City Name");
    return;
  }

  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  temperature.innerHTML = data.current.temp_c;
  humidity.innerHTML = data.current.humidity;
  wind.innerHTML = data.current.wind_kph;
  pressure.innerHTML = data.current.pressure_mb;
  time.innerHTML = data.location.localtime;
  icon.src = data.current.condition.icon;

  if (data.current.temp_c > 30) {
    document.body.style.background = "url('https://media.istockphoto.com/id/1240767070/photo/wooden-floor-beside-green-rice-field-in-the-morning-with-sunray.webp?b=1&s=170667a&w=0&k=20&c=HnSFSu_xqI0T_-x_ClCUaLpRpKinSQ2AYvU7V_eripk=') no-repeat";
    document.body.style.backgroundSize = "cover";
} else if (data.current.temp_c < 30 && data.current.temp_c > 5) {
    document.body.style.background = "url('https://img.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg') no-repeat";
    document.body.style.backgroundSize = "cover";
} else if (data.current.temp_c <= 10){
    document.body.style.background = "url('https://t4.ftcdn.net/jpg/01/30/24/67/360_F_130246761_XVWbg4AGgGu7SlcKi2QPR23J03U710mP.jpg') no-repeat";
    document.body.style.backgroundSize = "cover";
}

if (data.current.temp_c > 30) {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(paragraph => {
      paragraph.style.color = "blue";
      paragraph.style.fontWeight = "bold";

  });
}

if (data.current.temp_c < 10) {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(paragraph => {
      paragraph.style.color = "red";
      paragraph.style.fontWeight = "bold";

  });
}

if (data.current.temp_c < 20) {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(paragraph => {
      paragraph.style.color = "green";
      paragraph.style.fontWeight = "bold";

  });
}
  
};
