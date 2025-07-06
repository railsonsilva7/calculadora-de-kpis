window.onload = function() {
    // Atualiza a data atual no elemento, se existir
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('pt-BR', options);
    var dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.textContent += formattedDate;
    }

    // Valores dos KPIs
    var kpis = {
        display: { value: 16.9, goal: 23.5 },
        placakit: { value: 20.0, goal: 16.5 },
        otd2h: { value: 75.4, goal: 64.0 },
        otd48h: { value: 93.8, goal: 95.8 },
        bounce: { value: 0.0, goal: 3.0 },
        t3: { value: 100.0, goal: 91.7 },
        b3: { value: 0.0, goal: 3.7 },
        osat: { value: 98.8, goal: 91.7 }
    };

    // Função para atualizar valor e cor do KPI
    function updateKPI(id, value, goal, positiveIfHigher) {
        var el = document.getElementById(id);
        if (!el) return;
        el.textContent = `${value}%`;
        el.classList.remove('positive', 'negative');
        if (positiveIfHigher === undefined) positiveIfHigher = true;
        if (positiveIfHigher) {
            if (value >= goal) {
                el.classList.add('positive');
            } else {
                el.classList.add('negative');
            }
        } else {
            if (value <= goal) {
                el.classList.add('positive');
            } else {
                el.classList.add('negative');
            }
        }
    }

    // Atualiza todos os KPIs
    updateKPI('display', kpis.display.value, kpis.display.goal, false);
    updateKPI('placakit', kpis.placakit.value, kpis.placakit.goal, false);
    updateKPI('otd2h', kpis.otd2h.value, kpis.otd2h.goal, true);
    updateKPI('otd48h', kpis.otd48h.value, kpis.otd48h.goal, true);
    updateKPI('bounce', kpis.bounce.value, kpis.bounce.goal, false);
    updateKPI('t3', kpis.t3.value, kpis.t3.goal, true);
    updateKPI('b3', kpis.b3.value, kpis.b3.goal, false);
    updateKPI('osat', kpis.osat.value, kpis.osat.goal, true);
};