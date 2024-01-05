// Pobranie elementu canvas dla wykresu tętna miesięcznego
const ctxMonthlyPulse = document.getElementById('monthlyPulseChart').getContext('2d');

// Dane do wykresu tętna miesięcznego (dla najwyższego tętna)
const dataMonthlyPulse = {
    labels: ['Tydzień 1', 'Tydzień 2', 'Tydzień 3', 'Tydzień 4'], // Możesz dostosować etykiety do odpowiednich tygodni w miesiącu
    datasets: [{
        label: 'Najwyższe tętno',
        data: [90, 120, 100, 90], // Dane najwyższego tętna dla kolejnych tygodni w miesiącu
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: false // To display only the line without background fill
    }]
};

// Opcje wykresu tętna miesięcznego
const optionsMonthlyPulse = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla tętna miesięcznego
const monthlyPulseChart = new Chart(ctxMonthlyPulse, {
    type: 'line',
    data: dataMonthlyPulse,
    options: optionsMonthlyPulse
});
