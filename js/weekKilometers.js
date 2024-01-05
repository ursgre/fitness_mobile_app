// Pobranie elementu canvas dla wykresu przebiegniętych kilometrów tygodniowo
const ctxWeeklyDistance = document.getElementById('weeklyDistanceChart').getContext('2d');

// Dane do wykresu przebiegniętych kilometrów tygodniowo
const dataWeeklyDistance = {
    labels: ['Dzień 1', 'Dzień 2', 'Dzień 3', 'Dzień 4', 'Dzień 5', 'Dzień 6', 'Dzień 7'],
    datasets: [{
        label: 'Przebiegnięte kilometry',
        data: [3, 4, 5, 3.5, 6, 5.5, 4.5], // Dane przebiegniętych kilometrów dla kolejnych dni w tygodniu
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: false // To display only the line without background fill
    }]
};

// Opcje wykresu przebiegniętych kilometrów tygodniowo
const optionsWeeklyDistance = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla przebiegniętych kilometrów tygodniowo
const weeklyDistanceChart = new Chart(ctxWeeklyDistance, {
    type: 'line',
    data: dataWeeklyDistance,
    options: optionsWeeklyDistance
});
