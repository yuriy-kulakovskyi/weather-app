feather.replace();

let D = null;

let weather = {
  "apiKey": "dea886ab571fa9ba5defd3fe2cb73358",
  fetchWeather: function(city) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="
      + city
      + "&units=metric&appid="
      + this.apiKey
    )
      .then((response) => response.json())
      .then((data) => { D = data; this.displayWeather(data, 1); });
  },
  displayWeather: function(data, DayNumber) {
    const cityname = data.city.name;
    const country = data.city.country;
    let descr = data.list[0].weather[0].main;
    // DAY 1
    let date1 = data.list[0].dt_txt;
    const description1 = data.list[0].weather[0].description;
    const temp1 = data.list[0].main.temp;
    const humidity1 = data.list[0].main.humidity;
    const speed1 = Math.round((Number(data.list[0].wind.speed) * 3.6) * 100) / 100;
    const pop1 = data.list[0].pop;
    const main1 = data.list[0].weather[0].main;
    // DAY 2
    let date2 = data.list[7].dt_txt;
    const description2 = data.list[7].weather[0].description;
    const temp2 = data.list[7].main.temp;
    const humidity2 = data.list[7].main.humidity;
    const speed2 = Math.round((Number(data.list[7].wind.speed) * 3.6) * 100) / 100;
    const pop2 = data.list[7].pop;
    const main2 = data.list[7].weather[0].main;
    // DAY 3
    let date3 = data.list[15].dt_txt;
    const description3 = data.list[15].weather[0].description;
    const temp3 = data.list[15].main.temp;
    const humidity3 = data.list[15].main.humidity;
    const speed3 = Math.round((Number(data.list[15].wind.speed) * 3.6) * 100) / 100;
    const pop3 = data.list[15].pop;
    const main3 = data.list[15].weather[0].main;
    // DAY 4
    let date4 = data.list[23].dt_txt;
    const description4 = data.list[23].weather[0].description;
    const temp4 = data.list[23].main.temp;
    const humidity4 = data.list[23].main.humidity;
    const speed4 = Math.round((Number(data.list[23].wind.speed) * 3.6) * 100) / 100;
    const pop4 = data.list[23].pop;
    const main4 = data.list[23].weather[0].main;

    let months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    function dateList(date) {
      let myarr1 = date.split(" ");
      date = myarr1[0];
      let myArr2 = date.split("-");
      let year = myArr2[0]
      let month = months[Number(myArr2[1])];
      let d = myArr2[2];
      return [d, month, year];
    }

    let arr1 = dateList(date1);
    let d = new Date(`${arr1[0]} ${arr1[1]}, ${arr1[2]}`);

    let arr2 = dateList(date2);
    let dx = new Date(`${arr2[0]} ${arr2[1]}, ${arr2[2]}`);

    let arr3 = dateList(date3);
    let dy = new Date(`${arr3[0]} ${arr3[1]}, ${arr3[2]}`);

    let arr4 = dateList(date4);
    let dz = new Date(`${arr4[0]} ${arr4[1]}, ${arr4[2]}`);

    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day1 = weekday[d.getDay()];
    let day2 = weekday[dx.getDay()];
    let day3 = weekday[dy.getDay()];
    let day4 = weekday[dz.getDay()];

    function modify(day, arr, temp, desc, main, pop, humidity, speed) {
      document.querySelector("#dayname").innerText = day;
      document.querySelector(".date-day").innerText = `${arr[0]} ${arr[1]} ${arr[2]}`;
      document.querySelector("#temp").innerText = Math.round(Number(temp)) + "°C";
      document.querySelector("#desc").innerText = desc;
      document.querySelector("#precipitation").innerText = pop + " %";
      document.querySelector("#humidity").innerText = humidity + " %";
      document.querySelector("#wind").innerText = speed + " km/h";
    }

    switch (DayNumber) {
      case 1:
        modify(day1, arr1, temp1, description1, main1, pop1, humidity1, speed1);
        descr = data.list[0].weather[0].main;
        break;
      case 2:
        modify(day2, arr2, temp2, description2, main2, pop2, humidity2, speed2);
        descr = data.list[7].weather[0].main;
        break;
      case 3:
        modify(day3, arr3, temp3, description3, main3, pop3, humidity3, speed3);
        descr = data.list[15].weather[0].main;
        break;
      case 4:
        modify(day4, arr4, temp4, description4, main4, pop4, humidity4, speed4);
        descr = data.list[20].weather[0].main;
        break;
    }

    const mainIcon = document.querySelector("#main-icon");
    switch (descr) {
      case 'Rain':
        mainIcon.innerHTML = feather.icons['cloud-rain'].toSvg();
        break;
      case 'Clear':
        mainIcon.innerHTML = feather.icons['sun'].toSvg();
        break;
      case 'Clouds':
        mainIcon.innerHTML = feather.icons['cloud'].toSvg();
        break;
      case 'Snow':
        mainIcon.innerHTML = feather.icons['cloud-snow'].toSvg();
        break;
      case 'Drizzle':
        mainIcon.innerHTML = feather.icons['cloud-drizzle'].toSvg();
        break;
      case "Thunderstorm":
        mainIcon.innerHTML = feather.icons['cloud-lightning'].toSvg();
        break;
    }

    // modifications common to all 4 days
    document.querySelector("#location").innerText = cityname + ", " + country;

    switch (main1) {
      case 'Rain':
        document.querySelector("#icon1").innerHTML = feather.icons['cloud-rain'].toSvg();
        break;
      case 'Clear':
        document.querySelector("#icon1").innerHTML = feather.icons['sun'].toSvg();
        break;
      case 'Clouds':
        document.querySelector("#icon1").innerHTML = feather.icons['cloud'].toSvg();
        break;
      case 'Snow':
        document.querySelector("#icon1").innerHTML = feather.icons['cloud-snow'].toSvg();
        break;
      case 'Drizzle':
        document.querySelector("#icon1").innerHTML = feather.icons['cloud-drizzle'].toSvg();
        break;
      case "Thunderstorm":
        document.querySelector("#icon1").innerHTML = feather.icons['cloud-lightning'].toSvg();
        break;
    }
    document.querySelector("#d1").innerText = day1.substr(0, 3);
    document.querySelector("#t1").innerText = Math.round(Number(temp1)) + "°C";

    switch (main2) {
      case 'Rain':
        document.querySelector("#icon2").innerHTML = feather.icons['cloud-rain'].toSvg();
        break;
      case 'Clear':
        document.querySelector("#icon2").innerHTML = feather.icons['sun'].toSvg();
        break;
      case 'Clouds':
        document.querySelector("#icon2").innerHTML = feather.icons['cloud'].toSvg();
        break;
      case 'Snow':
        document.querySelector("#icon2").innerHTML = feather.icons['cloud-snow'].toSvg();
        break;
      case 'Drizzle':
        document.querySelector("#icon2").innerHTML = feather.icons['cloud-drizzle'].toSvg();
        break;
      case "Thunderstorm":
        document.querySelector("#icon2").innerHTML = feather.icons['cloud-lightning'].toSvg();
        break;
    }
    document.querySelector("#d2").innerText = day2.substr(0, 3);
    document.querySelector("#t2").innerText = Math.round(Number(temp2)) + "°C";

    switch (main3) {
      case 'Rain':
        document.querySelector("#icon3").innerHTML = feather.icons['cloud-rain'].toSvg();
        break;
      case 'Clear':
        document.querySelector("#icon3").innerHTML = feather.icons['sun'].toSvg();
        break;
      case 'Clouds':
        document.querySelector("#icon3").innerHTML = feather.icons['cloud'].toSvg();
        break;
      case 'Snow':
        document.querySelector("#icon3").innerHTML = feather.icons['cloud-snow'].toSvg();
        break;
      case 'Drizzle':
        document.querySelector("#icon3").innerHTML = feather.icons['cloud-drizzle'].toSvg();
        break;
      case "Thunderstorm":
        document.querySelector("#icon3").innerHTML = feather.icons['cloud-lightning'].toSvg();
        break;
    }
    document.querySelector("#d3").innerText = day3.substr(0, 3);
    document.querySelector("#t3").innerText = Math.round(Number(temp3)) + "°C";

    switch (main4) {
      case 'Rain':
        document.querySelector("#icon4").innerHTML = feather.icons['cloud'].toSvg();
        break;
      case 'Clear':
        document.querySelector("#icon4").innerHTML = feather.icons['sun'].toSvg();
        break;
      case 'Clouds':
        document.querySelector("#icon4").innerHTML = feather.icons['cloud'].toSvg();
        break;
      case 'Snow':
        document.querySelector("#icon4").innerHTML = feather.icons['cloud-snow'].toSvg();
        break;
      case 'Drizzle':
        document.querySelector("#icon4").innerHTML = feather.icons['cloud-drizzle'].toSvg();
        break;
      case "Thunderstorm":
        document.querySelector("#icon4").innerHTML = feather.icons['cloud-lightning'].toSvg();
        break;
    }
    document.querySelector("#d4").innerText = day4.substr(0, 3);
    document.querySelector("#t4").innerText = Math.round(Number(temp4)) + "°C";

    document.querySelector(".container").classList.remove("Loading");
    document.querySelector(".wrapper").style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + cityname + "')";
  },

  search: function () {
    this.fetchWeather(document.querySelector(".searchBar").value);
  },

};

document.querySelector(".search").addEventListener("click", function () { 
  document.querySelector("#menu").style.display = 'none';
  document.querySelector(".wrapper").style.filter = 'blur(0)';
  weather.search(); 
});

document.querySelector(".searchBar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
    document.querySelector("#menu").style.display = 'none';
    document.querySelector(".wrapper").style.filter = 'blur(0)';
  }
});

document.querySelector("#item1").addEventListener("click", function () { weather.displayWeather(D, 1) });
document.querySelector("#item2").addEventListener("click", function () { weather.displayWeather(D, 2) });
document.querySelector("#item3").addEventListener("click", function () { weather.displayWeather(D, 3) });
document.querySelector("#item4").addEventListener("click", function () { weather.displayWeather(D, 4) });

fetch("https://ipinfo.io/json?token=fb647754b01fa3")
.then((response) => response.json())
.then((jsonResponse) => {
  weather.fetchWeather(jsonResponse.city);
})

document.querySelector(".location-button").onclick = () => {
  document.querySelector("#menu").style.display = 'flex';
  document.querySelector(".wrapper").style.filter = 'blur(10px)';
}

document.querySelector(".cross").onclick = () => {
  document.querySelector("#menu").style.display = 'none';
  document.querySelector(".wrapper").style.filter = 'blur(0)';
}