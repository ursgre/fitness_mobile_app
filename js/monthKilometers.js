// Pobranie elementu canvas dla wykresu przebiegniętych kilometrów miesięcznie
const ctxMonthlyDistance = document.getElementById('monthlyDistanceChart').getContext('2d');

// Dane do wykresu przebiegniętych kilometrów miesięcznie
const dataMonthlyDistance = {
    labels: ['Tydzień 1', 'Tydzień 2', 'Tydzień 3', 'Tydzień 4'], // Oznaczenia tygodni w miesiącu
    datasets: [{
        label: 'Przebiegnięte kilometry',
        data: [25, 28, 30, 27], // Dane przebiegniętych kilometrów dla kolejnych tygodni w miesiącu
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: false // To display only the line without background fill
    }]
};

// Opcje wykresu przebiegniętych kilometrów miesięcznie
const optionsMonthlyDistance = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla przebiegniętych kilometrów miesięcznie
const monthlyDistanceChart = new Chart(ctxMonthlyDistance, {
    type: 'line',
    data: dataMonthlyDistance,
    options: optionsMonthlyDistance
});
