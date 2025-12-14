// ========================================
// Datos de las ciudades
// ========================================
const citiesData = {
  santiago: {
    name: "Santiago",
    temp: "30°C",
    status: "Soleado",
    icon: "bi-brightness-high",
    humidity: "10%",
    wind: "6 km/h",
    forecast: [
      { day: "Lunes", icon: "bi-brightness-high", temp: "23°C" },
      { day: "Martes", icon: "bi-brightness-high", temp: "22°C" },
      { day: "Miércoles", icon: "bi-cloud-sun", temp: "21°C" },
      { day: "Jueves", icon: "bi-brightness-high", temp: "24°C" },
      { day: "Viernes", icon: "bi-brightness-high", temp: "24°C" },
      { day: "Sábado", icon: "bi-brightness-high", temp: "24°C" },
      { day: "Domingo", icon: "bi-brightness-high", temp: "24°C" },
    ],
  },
  "punta-arenas": {
    name: "Punta Arenas",
    temp: "9°C",
    status: "Nublado",
    icon: "bi-cloudy-fill",
    humidity: "75%",
    wind: "25 km/h",
    forecast: [
      { day: "Lunes", icon: "bi-cloudy-fill", temp: "8°C" },
      { day: "Martes", icon: "bi-cloud-rain", temp: "7°C" },
      { day: "Miércoles", icon: "bi-cloudy-fill", temp: "9°C" },
      { day: "Jueves", icon: "bi-cloudy", temp: "10°C" },
      { day: "Viernes", icon: "bi-cloud-sun", temp: "11°C" },
      { day: "Sábado", icon: "bi-cloudy-fill", temp: "9°C" },
      { day: "Domingo", icon: "bi-cloud-rain", temp: "8°C" },
    ],
  },
  "villa-alemana": {
    name: "Villa Alemana",
    temp: "17°C",
    status: "Muy Nublado",
    icon: "bi-cloudy",
    humidity: "65%",
    wind: "12 km/h",
    forecast: [
      { day: "Lunes", icon: "bi-cloudy", temp: "16°C" },
      { day: "Martes", icon: "bi-cloud-sun", temp: "18°C" },
      { day: "Miércoles", icon: "bi-cloudy", temp: "17°C" },
      { day: "Jueves", icon: "bi-cloud-sun", temp: "19°C" },
      { day: "Viernes", icon: "bi-brightness-high", temp: "20°C" },
      { day: "Sábado", icon: "bi-brightness-high", temp: "21°C" },
      { day: "Domingo", icon: "bi-cloud-sun", temp: "19°C" },
    ],
  },
  copiapo: {
    name: "Copiapó",
    temp: "18°C",
    status: "Despejado",
    icon: "bi-sun",
    humidity: "15%",
    wind: "8 km/h",
    forecast: [
      { day: "Lunes", icon: "bi-sun", temp: "17°C" },
      { day: "Martes", icon: "bi-brightness-high", temp: "18°C" },
      { day: "Miércoles", icon: "bi-sun", temp: "19°C" },
      { day: "Jueves", icon: "bi-brightness-high", temp: "20°C" },
      { day: "Viernes", icon: "bi-sun", temp: "19°C" },
      { day: "Sábado", icon: "bi-brightness-high", temp: "18°C" },
      { day: "Domingo", icon: "bi-sun", temp: "17°C" },
    ],
  },
  valparaiso: {
    name: "Valparaíso",
    temp: "15°C",
    status: "Parcialmente nublado",
    icon: "bi-cloud-sun",
    humidity: "70%",
    wind: "15 km/h",
    forecast: [
      { day: "Lunes", icon: "bi-cloud-sun", temp: "14°C" },
      { day: "Martes", icon: "bi-cloudy", temp: "15°C" },
      { day: "Miércoles", icon: "bi-cloud-sun", temp: "16°C" },
      { day: "Jueves", icon: "bi-brightness-high", temp: "17°C" },
      { day: "Viernes", icon: "bi-cloud-sun", temp: "16°C" },
      { day: "Sábado", icon: "bi-cloudy", temp: "15°C" },
      { day: "Domingo", icon: "bi-cloud-sun", temp: "14°C" },
    ],
  },
  "la-serena": {
    name: "La Serena",
    temp: "19°C",
    status: "Soleado",
    icon: "bi-brightness-high",
    humidity: "55%",
    wind: "10 km/h",
    forecast: [
      { day: "Lunes", icon: "bi-brightness-high", temp: "18°C" },
      { day: "Martes", icon: "bi-brightness-high", temp: "19°C" },
      { day: "Miércoles", icon: "bi-cloud-sun", temp: "18°C" },
      { day: "Jueves", icon: "bi-brightness-high", temp: "20°C" },
      { day: "Viernes", icon: "bi-brightness-high", temp: "21°C" },
      { day: "Sábado", icon: "bi-cloud-sun", temp: "19°C" },
      { day: "Domingo", icon: "bi-brightness-high", temp: "20°C" },
    ],
  },
  talcahuano: {
    name: "Talcahuano",
    temp: "22°C",
    status: "Soleado",
    icon: "bi-brightness-high",
    humidity: "45%",
    wind: "9 km/h",
    forecast: [
      { day: "Lunes", icon: "bi-brightness-high", temp: "21°C" },
      { day: "Martes", icon: "bi-brightness-high", temp: "22°C" },
      { day: "Miércoles", icon: "bi-cloud-sun", temp: "20°C" },
      { day: "Jueves", icon: "bi-brightness-high", temp: "23°C" },
      { day: "Viernes", icon: "bi-brightness-high", temp: "24°C" },
      { day: "Sábado", icon: "bi-cloud-sun", temp: "22°C" },
      { day: "Domingo", icon: "bi-brightness-high", temp: "23°C" },
    ],
  },
  "los-andes": {
    name: "Los Andes",
    temp: "33°C",
    status: "Soleado",
    icon: "bi-brightness-high",
    humidity: "5%",
    wind: "4 km/h",
    forecast: [
      { day: "Lunes", icon: "bi-brightness-high", temp: "32°C" },
      { day: "Martes", icon: "bi-brightness-high", temp: "33°C" },
      { day: "Miércoles", icon: "bi-brightness-high", temp: "34°C" },
      { day: "Jueves", icon: "bi-brightness-high", temp: "33°C" },
      { day: "Viernes", icon: "bi-brightness-high", temp: "32°C" },
      { day: "Sábado", icon: "bi-cloud-sun", temp: "30°C" },
      { day: "Domingo", icon: "bi-brightness-high", temp: "31°C" },
    ],
  },
  huechun: {
    name: "Huechun",
    temp: "31°C",
    status: "Soleado",
    icon: "bi-brightness-high",
    humidity: "8%",
    wind: "5 km/h",
    forecast: [
      { day: "Lunes", icon: "bi-brightness-high", temp: "30°C" },
      { day: "Martes", icon: "bi-brightness-high", temp: "31°C" },
      { day: "Miércoles", icon: "bi-brightness-high", temp: "32°C" },
      { day: "Jueves", icon: "bi-brightness-high", temp: "31°C" },
      { day: "Viernes", icon: "bi-brightness-high", temp: "30°C" },
      { day: "Sábado", icon: "bi-cloud-sun", temp: "29°C" },
      { day: "Domingo", icon: "bi-brightness-high", temp: "30°C" },
    ],
  },
  "puerto-montt": {
    name: "Puerto Montt",
    temp: "17°C",
    status: "Parcialmente Nublado",
    icon: "bi-cloud-sun",
    humidity: "80%",
    wind: "18 km/h",
    forecast: [
      { day: "Lunes", icon: "bi-cloud-sun", temp: "16°C" },
      { day: "Martes", icon: "bi-cloudy", temp: "15°C" },
      { day: "Miércoles", icon: "bi-cloud-rain", temp: "14°C" },
      { day: "Jueves", icon: "bi-cloud-sun", temp: "16°C" },
      { day: "Viernes", icon: "bi-cloudy", temp: "17°C" },
      { day: "Sábado", icon: "bi-cloud-sun", temp: "18°C" },
      { day: "Domingo", icon: "bi-brightness-high", temp: "19°C" },
    ],
  },
};

// ========================================
// Funciones de almacenamiento
// ========================================

/**
 * Guarda la ciudad seleccionada en sessionStorage
 * @param {string} cityId - ID de la ciudad seleccionada
 */
function saveCityToStorage(cityId) {
  sessionStorage.setItem("selectedCity", cityId);
}

/**
 * Obtiene la ciudad seleccionada desde sessionStorage
 * @returns {string} - ID de la ciudad (default: 'santiago')
 */
function getCityFromStorage() {
  return sessionStorage.getItem("selectedCity") || "santiago";
}

// ========================================
// Función principal de carga de detalle
// ========================================

/**
 * Carga la información detallada de una ciudad
 * @param {string} cityId - ID de la ciudad a cargar
 */
function loadCityDetail(cityId) {
  const city = citiesData[cityId];

  if (!city) {
    console.error("Ciudad no encontrada:", cityId);
    return;
  }

  // Actualizar información principal
  document.getElementById("detail-city").textContent = city.name;
  document.getElementById("detail-status").textContent = city.status;
  document.getElementById("detail-temp").textContent = city.temp;
  document.getElementById("detail-humidity").textContent = city.humidity;
  document.getElementById("detail-wind").textContent = city.wind;

  // Actualizar icono
  const iconElement = document.getElementById("detail-icon");
  iconElement.className = `detail-card__icon bi ${city.icon}`;

  // Cargar pronóstico semanal
  loadWeeklyForecast(city.forecast);
}

/**
 * Carga el pronóstico semanal en la lista
 * @param {Array} forecast - Array de objetos con el pronóstico
 */
function loadWeeklyForecast(forecast) {
  const forecastList = document.getElementById("forecast-list");
  forecastList.innerHTML = "";

  forecast.forEach((day) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
      <i class="bi ${day.icon} me-2"></i>
      <strong>${day.day}:</strong> ${day.temp}
    `;
    forecastList.appendChild(li);
  });
}

// ========================================
// Inicialización de eventos
// ========================================

/**
 * Inicializa todos los eventos cuando el DOM está listo
 */
function initializeApp() {
  // Si estamos en la página de detalle
  if (document.getElementById("detail-city")) {
    const selectedCity = getCityFromStorage();
    loadCityDetail(selectedCity);
  }

  // Si estamos en la página principal
  if (document.querySelector(".places")) {
    initializePlaceCards();
  }
}

/**
 * Inicializa los eventos de las tarjetas de ciudades
 */
function initializePlaceCards() {
  const detailLinks = document.querySelectorAll(".place-card__link");

  detailLinks.forEach((link) => {
    link.addEventListener("click", handleCityClick);
  });
}

/**
 * Maneja el click en una tarjeta de ciudad
 * @param {Event} e - Evento de click
 */
function handleCityClick(e) {
  e.preventDefault();

  // Obtener el data-city del card padre
  const card = this.closest(".place-card");
  const cityId = card.getAttribute("data-city");

  if (cityId) {
    // Guardar ciudad seleccionada
    saveCityToStorage(cityId);

    // Navegar a la página de detalle
    window.location.href = "./detalle.html";
  } else {
    console.error("No se encontró el atributo data-city");
  }
}

// ========================================
// Evento de carga del DOM
// ========================================

document.addEventListener("DOMContentLoaded", initializeApp);
