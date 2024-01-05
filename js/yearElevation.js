// Pobranie elementu canvas dla wykresu przewyższeń w bieganiu
const ctxRunningElevation = document.getElementById('yearlyElevationChart').getContext('2d');

// Dane do wykresu przewyższeń w bieganiu (dla przewyższeń w poszczególnych miesiącach)
const dataRunningElevation = {
    labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'], // Etykiety dla miesięcy
    datasets: [{
        label: 'Przewyższenia',
        data: [150, 180, 160, 140, 155, 170, 165, 160, 158, 165, 175, 165], // Dane przewyższeń dla poszczególnych miesięcy
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false // Aby wyświetlić tylko linię bez wypełnienia tła
    }]
};

// Opcje wykresu przewyższeń w bieganiu
const optionsRunningElevation = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla przewyższeń w bieganiu
const runningElevationChart = new Chart(ctxRunningElevation, {
    type: 'line',
    data: dataRunningElevation,
    options: optionsRunningElevation
});
