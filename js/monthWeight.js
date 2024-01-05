// Pobranie elementu canvas dla wykresu miesięcznego
const ctxMonthly = document.getElementById('weightChart').getContext('2d');

// Dane do wykresu miesięcznego
const dataMonthly = {
    labels: ['Tydzień 1', 'Tydzień 2', 'Tydzień 3', 'Tydzień 4'],
    datasets: [{
        label: 'Waga',
        data: [70, 69, 68, 65], // Dane wagi dla kolejnych tygodni
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Kolor wypełnienia obszaru wykresu
        borderColor: 'rgba(54, 162, 235, 1)', // Kolor linii wykresu
        borderWidth: 1
    }]
};

// Opcje wykresu miesięcznego
const optionsMonthly = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla miesiąca
const weightChart = new Chart(ctxMonthly, {
    type: 'line',
    data: dataMonthly,
    options: optionsMonthly
});

// Pobranie elementu canvas dla wykresu tygodniowego
const ctxWeekly = document.getElementById('weekWeight').getContext('2d');