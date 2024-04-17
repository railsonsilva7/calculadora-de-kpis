window.onload = function() {
    // Obtendo a data atual
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('pt-BR', options);
    
    // Atualizando o elemento HTML com a data atual
    document.getElementById('currentDate').textContent += formattedDate;



    

    // Comparando os valores com suas metas

    var displayValue =	11.1	;
    var placakitValue =	11.1	;
    var otd2hValue =	69.1	;
    var otd48hValue =	97.5	;
    var bounceValue =	0.0	;
    var t3Value =	66.7	;
    var b3Value =	33.3	;
    var osatValue =	66.7	;




    

   /* var placakitValue = 11.1;
    var otd2hValue = 69.1;
    var otd48hValue = 97.5;
    var bounceValue = 0.0;
    var t3Value = 66.7;
    var b3Value = 33.3;
    var osatValue = 66.66; */
//
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
    if (otd48hValue > otd48hGoal) {
        otd2hElement.classList.add('positve');
    } else if (otd48hValue < otd48hGoal) {
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

    // Aplicando cor para osat de acordo com a regra especificada
    var otd2hElement = document.getElementById('bounce');
    if (bounceValue > bounceGoal) {
        otd2hElement.classList.add('positive');
    } else if (otd2hValue < otd2hGoal) {
        otd2hElement.classList.add('negative');
        
    }
    
    document.getElementById("display").textContent = `${displayValue}%`;
document.getElementById("placakit").textContent = `${placakitValue}%`;
document.getElementById("otd2h").textContent = `${otd2hValue}%`;
document.getElementById("otd48h").textContent = `${otd48hValue}%`; 
document.getElementById("bounce").textContent = `${bounceValue}%`;
document.getElementById("t3").textContent = `${t3Value}%`; 
document.getElementById("b3").textContent = `${b3Value}%`;
document.getElementById("osat").textContent = `${osatValue}`;

}