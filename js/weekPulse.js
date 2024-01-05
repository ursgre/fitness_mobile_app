// Pobranie elementu canvas dla wykresu tętna tygodniowego
const ctxWeeklyPulse = document.getElementById('weeklyPulseChart').getContext('2d');

// Dane do wykresu tętna tygodniowego (dla najwyższego tętna)
const dataWeeklyPulse = {
    labels: ['Dzień 1', 'Dzień 2', 'Dzień 3', 'Dzień 4', 'Dzień 5', 'Dzień 6', 'Dzień 7'],
    datasets: [{
        label: 'Najwyższe tętno',
        data: [100, 110, 105, 115, 120, 118, 112], // Dane najwyższego tętna dla kolejnych dni w tygodniu
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false // To display only the line without background fill
    }]
};

// Opcje wykresu tętna tygodniowego
const optionsWeeklyPulse = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla tętna tygodniowego
const weeklyPulseChart = new Chart(ctxWeeklyPulse, {
    type: 'line',
    data: dataWeeklyPulse,
    options: optionsWeeklyPulse
});
