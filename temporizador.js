const nextPromotionDate = new Date(2023, 7, 1);

function updateCountdown() {
const currentDate = new Date();
const difference = nextPromotionDate - currentDate;

// Cálculos para obtener los días restantes
const millisecondsPerDay = 24 * 60 * 60 * 1000;
const daysRemaining = Math.floor(difference / millisecondsPerDay);

// Actualizar el elemento del contador
const countdownElement = document.getElementById('countdown');
countdownElement.textContent = `${daysRemaining} días hasta la próxima promo` ;
}

// Actualizar el temporizador cada segundo
setInterval(updateCountdown, 1000);