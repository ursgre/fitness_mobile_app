// Pobranie elementu canvas dla wykresu przewyższeń w bieganiu
const ctxWeeklyElevation = document.getElementById('weeklyElevationChart').getContext('2d');

// Dane do wykresu przewyższeń w bieganiu
const dataWeeklyElevation = {
    labels: ['Dzień 1', 'Dzień 2', 'Dzień 3', 'Dzień 4', 'Dzień 5', 'Dzień 6', 'Dzień 7'],
    datasets: [{
        label: 'Przewyższenia (metry)',
        data: [50, 70, 40, 60, 55, 80, 45], // Dane przewyższeń dla kolejnych dni w tygodniu
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false // Aby wyświetlić tylko linię bez wypełnienia tła
    }]
};

// Opcje wykresu przewyższeń w bieganiu
const optionsWeeklyElevation = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla przewyższeń w bieganiu
const weeklyElevationChart = new Chart(ctxWeeklyElevation, {
    type: 'line',
    data: dataWeeklyElevation,
    options: optionsWeeklyElevation
});
