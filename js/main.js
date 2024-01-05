function redirectToProfile() {
    window.location.href = "profile.html";
}

function redirectToHome() {
    window.location.href = "home.html";
}

function redirectToLogin() {
    window.location.href = "login.html";
}

//wykresy:

// Pobranie elementu canvas
const ctx = document.getElementById('weightChart').getContext('2d');

// Dane do wykresu miesięcznie
const data = {
    labels: ['Tydzień 1', 'Tydzień 2', 'Tydzień 3', 'Tydzień 4'],
    datasets: [{
        label: 'Waga',
        data: [70, 69, 68, 65], // Dane wagi dla kolejnych tygodni
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Kolor wypełnienia obszaru wykresu
        borderColor: 'rgba(54, 162, 235, 1)', // Kolor linii wykresu
        borderWidth: 1
    }]
};

// Opcje wykresu
const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Utworzenie wykresu typu liniowego
const weightChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});
