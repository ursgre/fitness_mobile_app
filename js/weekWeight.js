// Pobranie elementu canvas dla wykresu tygodniowego
const ctxWeek = document.getElementById('weekWeight').getContext('2d');

// Dane do wykresu tygodniowego
const dataWeek = {
    labels: ['Dzień 1', 'Dzień 2', 'Dzień 3', 'Dzień 4', 'Dzień 5', 'Dzień 6', 'Dzień 7'],
    datasets: [{
        label: 'Waga',
        data: [66.5, 66, 65.5, 65.2, 65.1, 65, 65], // Dane wagi dla kolejnych dni w tygodniu
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

// Opcje wykresu tygodniowego
const optionsWeek = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla tygodnia
const weekWeightChart = new Chart(ctxWeek, {
    type: 'line',
    data: dataWeek,
    options: optionsWeek
});
