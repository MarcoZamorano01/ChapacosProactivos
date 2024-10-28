// airQualityChart.js

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('airQualityChart').getContext('2d');

    const pollutantData = [
        {
            label: 'Material Particulado ≤ 10 micrómetros',
            value: 16.66,
            concentration: '2.6 µg/m³',
            effects: 'Las partículas más grandes pueden irritar las vías respiratorias y agravar condiciones respiratorias como el asma.'
        },
        {
            label: 'Material Particulado ≤ 2.5 micrómetros',
            value: 16.66,
            concentration: '2.33 µg/m³',
            effects: 'Estas partículas finas pueden penetrar en los pulmones, causando problemas respiratorios y cardiovasculares, además de agravar el asma.'
        },
        {
            label: 'Dióxido de Azufre',
            value: 16.66,
            concentration: '0.27 µg/m³',
            effects: 'Puede causar irritación en la garganta y los ojos, y agravar condiciones como el asma.'
        },
        {
            label: 'Dióxido de Nitrógeno',
            value: 16.66,
            concentration: '0.81 µg/m³',
            effects: 'A niveles bajos, puede causar irritación en las vías respiratorias y aumentar el riesgo de infecciones respiratorias.'
        },
        {
            label: 'Monóxido de Carbono',
            value: 16.66,
            concentration: '327.11 µg/m³',
            effects: 'A niveles altos, puede causar dolores de cabeza, mareos, náuseas y vómitos. La exposición prolongada puede provocar enfermedades cardíacas.'
        },
        {
            label: 'Ozono',
            value: 16.66,
            concentration: '26.11 µg/m³',
            effects: 'Aunque es útil en la estratosfera, a nivel del suelo puede agravar problemas respiratorios y causar irritación de garganta y dolores de cabeza.'
        }
    ];

    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: pollutantData.map(item => item.label),
            datasets: [{
                data: pollutantData.map(item => item.value),
                backgroundColor: Array(pollutantData.length).fill('#63B4B8'),
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const pollutant = pollutantData[context.dataIndex];
                            return [
                                `${pollutant.label}`,
                                `Concentración: ${pollutant.concentration}`,
                                `Efectos: ${pollutant.effects}`
                            ];
                        }
                    }
                }
            }
        }
    });
});