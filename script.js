window.onload = function() {
    // Obtendo a data atual
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('pt-BR', options);
    
    // Atualizando o elemento HTML com a data atual
    document.getElementById('currentDate').textContent += formattedDate;



    

    // Comparando os valores com suas metas

    var displayValue =	8.2	;
    var placakitValue =	14.4	;
    var otd2hValue =	68.0	;
    var ectValue =	4.4	
    var otd48hValue =	97.9	;
    var bounceValue =	4.1	;
    var t3Value =	94.3	;
    var b3Value =	2.9	;
    var osatValue =	95.0	;




 

   /* var placakitValue = 11.1;
    var otd2hValue = 69.1;
    var otd48hValue = 97.5;
    var bounceValue = 0.0;
    var t3Value = 66.7;
    var b3Value = 33.3;
    var osatValue = 66.66; */
//
    var displayGoal = 23.0;
    var placakitGoal = 14.7;
    var otd2hGoal = 66.0;
    var otd48hGoal = 96.3;
    var ectGoal = 3.0 ;
    var bounceGoal = 3.9;
    var t3Goal = 91.3;
    var b3Goal = 3.9;
    var osatGoal = 92.0;

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



    // Aplicando cor para ect de acordo com a regra especificada
    var ectElement = document.getElementById('ect');
    if (ectValue > ectGoal) {
        ectElement.classList.add('negative');
    } else if (ectValue <= ectGoal) {
        ectElement.classList.add('positive');
    }


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
    } else if (b3Value > b3Goal) {
        b3Element.classList.add('negative');
    }
    
    // Aplicando cor para osat de acordo com a regra especificada
    var osatElement = document.getElementById('osat');
    if (osatValue > osatGoal) {
        osatElement.classList.add('positive');
    } else if (osatValue < osatGoal) {
        osatElement.classList.add('negative');
    }

    

    

              
    
    document.getElementById("ect").textContent = `${ectValue}`; 
    document.getElementById("display").textContent = `${displayValue}%`;
document.getElementById("placakit").textContent = `${placakitValue}%`;
document.getElementById("otd2h").textContent = `${otd2hValue}%`;
document.getElementById("otd48h").textContent = `${otd48hValue}%`; 
document.getElementById("bounce").textContent = `${bounceValue}%`;
document.getElementById("t3").textContent = `${t3Value}%`; 
document.getElementById("b3").textContent = `${b3Value}%`;
document.getElementById("osat").textContent = `${osatValue}`;

}