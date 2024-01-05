// Pobranie elementu canvas dla wykresu tygodniowego spalonych kalorii
const ctxWeekly = document.getElementById('monthlyCaloriesChart').getContext('2d');

// Dane do wykresu tygodniowego spalonych kalorii
const dataWeekly = {
    labels: ['Tydzień 1', 'Tydzień 2', 'Tydzień 3', 'Tydzień 4'],
    datasets: [{
        label: 'Spalone kalorie',
        data: [400, 450, 500, 420], // Dane spalonych kalorii dla kolejnych tygodni
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Opcje wykresu tygodniowego spalonych kalorii
const optionsWeekly = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla tygodniowego spalonych kalorii
const weeklyWeightChart = new Chart(ctxWeekly, {
    type: 'line',
    data: dataWeekly,
    options: optionsWeekly
});
