// Pobranie elementu canvas dla wykresu tygodniowego przewyższeń
const ctxWeeklyElevation = document.getElementById('monthlyElevationChart').getContext('2d');

// Dane do wykresu tygodniowego przewyższeń
const dataWeeklyElevation = {
    labels: ['Tydzień 1', 'Tydzień 2', 'Tydzień 3', 'Tydzień 4'],
    datasets: [{
        label: 'Przewyższenia (metry)',
        data: [50, 70, 40, 60], // Dane przewyższeń dla kolejnych tygodni
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Opcje wykresu tygodniowego przewyższeń
const optionsWeeklyElevation = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla tygodniowych przewyższeń
const weekElevationChart = new Chart(ctxWeeklyElevation, {
    type: 'line',
    data: dataWeeklyElevation,
    options: optionsWeeklyElevation
});
