window.onload = function() {
    // Obtendo a data atual
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('pt-BR', options);
    
    // Atualizando o elemento HTML com a data atual
    document.getElementById('currentDate').textContent += formattedDate;

    // Comparando os valores com suas metas
    var displayValue = 13.7;
    var placakitValue = 15.7;
    var otd2hValue = 68.6;
    var otd48hValue = 96.1;
    var bounceValue = 0.0;
    var t3Value = 0.0;
    var b3Value = 100.0;
    var osatValue = 0;

    var displayGoal = 24.0;
    var placakitGoal = 15.6;
    var otd2hGoal = 65.0;
    var otd48hGoal = 96.0;
    var bounceGoal = 4.0;
    var t3Goal = 91.1;
    var b3Goal = 4.0;
    var osatGoal = 92.0;

    // Função para aplicar classe de cor com base na comparação com a meta
    function applyColorClass(value, goal, elementId) {
        var element = document.getElementById(elementId);
        if (value > goal) {
            element.classList.add('negative');
        } else if (value < goal) {
            element.classList.add('positive');
        }
    }

    // Aplicando cores para as métricas
    applyColorClass(displayValue, displayGoal, 'display');
    applyColorClass(placakitValue, placakitGoal, 'placakit');
    applyColorClass(bounceValue, bounceGoal, 'bounce');
    applyColorClass(b3Value, b3Goal, 'b3');
    applyColorClass(osatValue, osatGoal, 'osat');

    // Aplicando cor para OTD2h de acordo com a regra especificada
    var otd2hElement = document.getElementById('otd2h');
    if (otd2hValue > otd2hGoal) {
        otd2hElement.classList.add('positive');
    } else if (otd2hValue < otd2hGoal) {
        otd2hElement.classList.add('negative');
    }

    // Aplicando cor para OTD48h de acordo com a regra especificada
    var otd2hElement = document.getElementById('otd48h');
    if (otd2hValue > otd2hGoal) {
        otd2hElement.classList.add('positive');
    } else if (otd2hValue < otd2hGoal) {
        otd2hElement.classList.add('negative');
    }

    // Aplicando cor para t3 de acordo com a regra especificada
    var otd2hElement = document.getElementById('t3');
    if (otd2hValue > otd2hGoal) {
        otd2hElement.classList.add('negative');
    } else if (otd2hValue < otd2hGoal) {
        otd2hElement.classList.add('positive');
    }
    // Aplicando cor para osat de acordo com a regra especificada
    var otd2hElement = document.getElementById('osat');
    if (otd2hValue > otd2hGoal) {
        otd2hElement.classList.add('negative');
    } else if (otd2hValue < otd2hGoal) {
        otd2hElement.classList.add('positive');
    }
}