// Pobranie elementu canvas dla wykresu tętna rocznego
const ctxYearlyPulse = document.getElementById('yearlyPulseChart').getContext('2d');

// Dane do wykresu tętna rocznego (dla najwyższego tętna w poszczególnych miesiącach)
const dataYearlyPulse = {
    labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'], // Etykiety dla miesięcy
    datasets: [{
        label: 'Najwyższe tętno',
        data: [90, 120, 100, 90, 95, 110, 105, 100, 98, 105, 115, 105], // Dane najwyższego tętna dla poszczególnych miesięcy
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: false // Aby wyświetlić tylko linię bez wypełnienia tła
    }]
};

// Opcje wykresu tętna rocznego
const optionsYearlyPulse = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla tętna rocznego
const yearlyPulseChart = new Chart(ctxYearlyPulse, {
    type: 'line',
    data: dataYearlyPulse,
    options: optionsYearlyPulse
});
