const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

// Örnek veri (Statik JSON objesi)
const fakeWeatherData = {
  "İstanbul": { temperature: 19, condition: "Güneşli", humidity: 58 },
  "Ankara": { temperature: 16, condition: "Parçalı Bulutlu", humidity: 45 },
  "İzmir": { temperature: 22, condition: "Açık", humidity: 51 },
  "Bursa": { temperature: 17, condition: "Yağmurlu", humidity: 72 }
};

weatherForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const city = cityInput.value.trim();
  const data = fakeWeatherData[city];

  if (data) {
    weatherResult.innerHTML = `
      <h2>${city}</h2>
      <p><strong>Sıcaklık:</strong> ${data.temperature}°C</p>
      <p><strong>Durum:</strong> ${data.condition}</p>
      <p><strong>Nem:</strong> %${data.humidity}</p>
    `;
  } else {
    weatherResult.innerHTML = `<p style="color:red;">Şehir bulunamadı. Lütfen geçerli bir şehir girin.</p>`;
  }

  cityInput.value = '';
});