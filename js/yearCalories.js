// Pobranie elementu canvas dla wykresu spalonych kalorii rocznych
const ctxYearlyCalories = document.getElementById('yearlyCaloriesChart').getContext('2d');

// Dane do wykresu spalonych kalorii rocznych (dla spalonych kalorii w poszczególnych miesiącach)
const dataYearlyCalories = {
    labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'], // Etykiety dla miesięcy
    datasets: [{
        label: 'Spalone kalorie',
        data: [400, 450, 500, 480, 550, 600, 590, 580, 560, 530, 490, 470], // Dane spalonych kalorii dla poszczególnych miesięcy
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false // Aby wyświetlić tylko linię bez wypełnienia tła
    }]
};

// Opcje wykresu spalonych kalorii rocznych
const optionsYearlyCalories = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego dla spalonych kalorii rocznych
const yearlyCaloriesChart = new Chart(ctxYearlyCalories, {
    type: 'line',
    data: dataYearlyCalories,
    options: optionsYearlyCalories
});
