window.onload = function() {
    // Obtendo a data atual
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('pt-BR', options);
    
    // Atualizando o elemento HTML com a data atual
    document.getElementById('currentDate').textContent += formattedDate;



    

    // Valores Floripa
    var displayValue =	16.9	;
    var placakitValue =	20.0	;
    var otd2hValue =	75.4	;
    var ectValue =	2.9	;
    var otd48hValue =	93.8	;
    var bounceValue =	0.0	;
    var t3Value =	100.0	;
    var b3Value =	0.0	;
    var osatValue =	98.8	;

// Valores Goiania
var displayValue_goiania =	7.6	;
    var placakitValue_goiania =	14.5	;
    var otd2hValue_goiania =	68.6	;
    var otd48hValue_goiania =	98.3	;
    var bounceValue_goiania =	0.0	;
    var t3Value_goiania =	97.1	;
    var b3Value_goiania =	2.9	;
    var osatValue_goiania =	96.4	;
 

   /* var placakitValue = 11.1;
    var otd2hValue = 69.1;
    var otd48hValue = 97.5;
    var bounceValue = 0.0;
    var t3Value = 66.7;
    var b3Value = 33.3;
    var osatValue = 66.66; */
//
    var displayGoal = 23.5;
    var placakitGoal = 16.5;
    var otd2hGoal = 64.0;
    var otd48hGoal = 95.8;
    var bounceGoal = 3.0;
    var t3Goal = 91.7;
    var b3Goal = 3.7;
    var osatGoal = 91.7;

    // Função para aplicar classe de cor com base na comparação com a meta
    /*function applyColorClass(value, goal, elementId) {
        var element = document.getElementById(elementId);
        if (value > goal) {
            element.classList.add('negative');
        } else if (value < goal) {
            element.classList.add('positive');
        }
    }*/

    // Aplicando cores para as métricas
    /*applyColorClass(displayValue, displayGoal, 'display');
    applyColorClass(placakitValue, placakitGoal, 'placakit');
    applyColorClass(bounceValue, bounceGoal, 'bounce');
    applyColorClass(b3Value, b3Goal, 'b3');
    applyColorClass(osatValue, osatGoal, 'osat');*/

    // Aplicando cor para display de acordo com a regra especificada
    var displayElement = document.getElementById('display');
    if (displayValue >= displayGoal) {
        displayElement.classList.add('negative');
    } else if (displayValue <= displayGoal) {
        displayElement.classList.add('positive');
    }

    // Aplicando cor para placakit de acordo com a regra especificada
    var placakitElement = document.getElementById('placakit');
    if (placakitValue > placakitGoal) {
        placakitElement.classList.add('negative');
    } else if (placakitValue <= placakitGoal) {
        placakitElement.classList.add('positive');
    }

    // Aplicando cor para OTD2h de acordo com a regra especificada
    var otd2hElement = document.getElementById('otd2h');
    if (otd2hValue >= otd2hGoal) {
        otd2hElement.classList.add('positive');
    } else if (otd2hValue < otd2hGoal) {
        otd2hElement.classList.add('negative');
    }

    // Aplicando cor para OTD48h de acordo com a regra especificada
    var otd48hElement = document.getElementById('otd48h');
    if (otd48hValue >= otd48hGoal) {
        otd48hElement.classList.add('positive');
    } else if (otd48hValue < otd48hGoal) {
        otd48hElement.classList.add('negative');
    }

    // Aplicando cor para bounce de acordo com a regra especificada
    var bounceElement = document.getElementById('bounce');
    if (bounceValue > bounceGoal) {
        bounceElement.classList.add('negative');
    } else if (bounceValue < bounceGoal) {
        bounceElement.classList.add('positive');
    }

    // Aplicando cor para t3 de acordo com a regra especificada
    var t3Element = document.getElementById('t3');
    if (t3Value >= t3Goal) {
        t3Element.classList.add('positive');
    } else if (t3Value < t3Goal) {
        t3Element.classList.add('negative');
    }

    // Aplicando cor para b3 de acordo com a regra especificada
    var b3Element = document.getElementById('b3');
    if (b3Value <= b3Goal) {
        b3Element.classList.add('positive');
    } else if (b3Value < b3Goal) {
        b3Element.classList.add('negative');
    }
    
    // Aplicando cor para osat de acordo com a regra especificada
    var osatElement = document.getElementById('osat');
    if (osatValue > osatGoal) {
        osatElement.classList.add('positive');
    } else if (osatValue < osatGoal) {
        osatElement.classList.add('negative');
    }

    

    

              
    
    
    document.getElementById("display").textContent = `${displayValue}%`;
document.getElementById("placakit").textContent = `${placakitValue}%`;
document.getElementById("otd2h").textContent = `${otd2hValue}%`;
document.getElementById("otd48h").textContent = `${otd48hValue}%`; 
document.getElementById("bounce").textContent = `${bounceValue}%`;
document.getElementById("t3").textContent = `${t3Value}%`; 
document.getElementById("b3").textContent = `${b3Value}%`;
document.getElementById("osat").textContent = `${osatValue}`;


var displayElement = document.getElementById('display_goiania');
    if (displayValue >= displayGoal) {
        displayElement.classList.add('negative');
    } else if (displayValue <= displayGoal) {
        displayElement.classList.add('positive');
    }

    // Aplicando cor para placakit de acordo com a regra especificada
    var placakitElement = document.getElementById('placakit_goiania');
    if (placakitValue > placakitGoal) {
        placakitElement.classList.add('negative');
    } else if (placakitValue <= placakitGoal) {
        placakitElement.classList.add('positive');
    }

    // Aplicando cor para OTD2h de acordo com a regra especificada
    var otd2hElement = document.getElementById('otd2h_goiania');
    if (otd2hValue >= otd2hGoal) {
        otd2hElement.classList.add('positive');
    } else if (otd2hValue < otd2hGoal) {
        otd2hElement.classList.add('negative');
    }

    // Aplicando cor para OTD48h de acordo com a regra especificada
    var otd48hElement = document.getElementById('otd48h_goiania');
    if (otd48hValue >= otd48hGoal) {
        otd48hElement.classList.add('positive');
    } else if (otd48hValue < otd48hGoal) {
        otd48hElement.classList.add('negative');
    }

    // Aplicando cor para bounce de acordo com a regra especificada
    var bounceElement = document.getElementById('bounce_goiania');
    if (bounceValue > bounceGoal) {
        bounceElement.classList.add('negative');
    } else if (bounceValue < bounceGoal) {
        bounceElement.classList.add('positive');
    }

    // Aplicando cor para t3 de acordo com a regra especificada
    var t3Element = document.getElementById('t3_goiania');
    if (t3Value >= t3Goal) {
        t3Element.classList.add('positive');
    } else if (t3Value < t3Goal) {
        t3Element.classList.add('negative');
    }

    // Aplicando cor para b3 de acordo com a regra especificada
    var b3Element = document.getElementById('b3_goiania');
    if (b3Value <= b3Goal) {
        b3Element.classList.add('positive');
    } else if (b3Value < b3Goal) {
        b3Element.classList.add('negative');
    }
    
    // Aplicando cor para osat de acordo com a regra especificada
    var osatElement = document.getElementById('osat_goiania');
    if (osatValue > osatGoal) {
        osatElement.classList.add('positive');
    } else if (osatValue < osatGoal) {
        osatElement.classList.add('negative');
    }





document.getElementById("display_goiania").textContent = `${displayValue_goiania}%`;
document.getElementById("placakit_goiania").textContent = `${placakitValue_goiania}%`;
document.getElementById("otd2h_goiania").textContent = `${otd2hValue_goiania}%`;
document.getElementById("otd48h_goiania").textContent = `${otd48hValue_goiania}%`; 
document.getElementById("bounce_goiania").textContent = `${bounceValue_goiania}%`;
document.getElementById("t3_goiania").textContent = `${t3Value_goiania}%`; 
document.getElementById("b3_goiania").textContent = `${b3Value_goiania}%`;
document.getElementById("osat_goiania").textContent = `${osatValue_goiania}`;

}