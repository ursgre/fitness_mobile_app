// Pobranie elementu canvas dla wykresu rocznego
const ctxYearly = document.getElementById('yearlyWeightChart').getContext('2d');

// Dane do wykresu rocznego
const dataYearly = {
    labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
    datasets: [{
        label: 'Waga',
        data: [105, 102, 100, 97, 92, 88, 85, 80, 75, 70, 68, 65], // Dane wagi dla kolejnych miesięcy
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Opcje wykresu rocznego
const optionsYearly = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla roku
const yearlyWeightChart = new Chart(ctxYearly, {
    type: 'line',
    data: dataYearly,
    options: optionsYearly
});
