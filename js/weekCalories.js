// Pobranie elementu canvas dla wykresu spalonych kalorii tygodniowo
const ctxWeeklyCalories = document.getElementById('weeklyCaloriesChart').getContext('2d');

// Dane do wykresu spalonych kalorii tygodniowo
const dataWeeklyCalories = {
    labels: ['Dzień 1', 'Dzień 2', 'Dzień 3', 'Dzień 4', 'Dzień 5', 'Dzień 6', 'Dzień 7'],
    datasets: [{
        label: 'Spalone kalorie',
        data: [250, 300, 280, 320, 270, 310, 290], // Dane spalonych kalorii dla kolejnych dni w tygodniu
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false // To display only the line without background fill
    }]
};

// Opcje wykresu spalonych kalorii tygodniowo
const optionsWeeklyCalories = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla spalonych kalorii tygodniowo
const weeklyCaloriesChart = new Chart(ctxWeeklyCalories, {
    type: 'line',
    data: dataWeeklyCalories,
    options: optionsWeeklyCalories
});
