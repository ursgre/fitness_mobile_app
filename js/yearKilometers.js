// Pobranie elementu canvas dla wykresu przebiegniętych kilometrów rocznie
const ctxYearlyDistance = document.getElementById('yearlyDistanceChart').getContext('2d');

// Dane do wykresu przebiegniętych kilometrów rocznie
const dataYearlyDistance = {
    labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'], // Oznaczenia miesięcy w roku
    datasets: [{
        label: 'Przebiegnięte kilometry',
        data: [150, 160, 170, 165, 180, 175, 185, 190, 195, 180, 170, 160], // Dane przebiegniętych kilometrów dla poszczególnych miesięcy
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false // To display only the line without background fill
    }]
};

// Opcje wykresu przebiegniętych kilometrów rocznie
const optionsYearlyDistance = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla przebiegniętych kilometrów rocznie
const yearlyDistanceChart = new Chart(ctxYearlyDistance, {
    type: 'line',
    data: dataYearlyDistance,
    options: optionsYearlyDistance
});
