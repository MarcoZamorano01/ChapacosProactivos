// airGauges.js

document.addEventListener('DOMContentLoaded', async () => {

    const response = await fetch('https://api.openweathermap.org/data/2.5/air_pollution?lat=-17.756265975159483&lon=-63.17339502264172&appid=284ea7c439250f0d65037a7487873e3f');
    const data = await response.json();
    const components = data.list[0].components;
    const aqi = data.list[0].main.aqi;

    // Función para determinar la calidad del aire basada en el valor AQI
    const getAirQuality = (aqi) => {
        const qualities = {
            1: { text: 'Excelente', color: '#63B4B8' },
            2: { text: 'Buena', color: '#A9E4D7' },
            3: { text: 'Regular', color: '#D0C7DD' },
            4: { text: 'Mala', color: '#664E88' },
            5: { text: 'Muy Mala', color: '#4B3869' }
        };
        return qualities[aqi] || qualities[1];
    };

    // Configuración base para los gráficos
    const createGaugeOptions = (title, value, maxValue) => {
        const quality = getAirQuality(aqi);
        return {
            series: [Math.min((value / maxValue) * 100, 100)],
            chart: {
                type: 'radialBar',
                height: 200,
                offsetY: -10,
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#e7e7e7",
                        strokeWidth: '97%',
                        margin: 5
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: -2,
                            fontSize: '16px',
                            formatter: function(val) {
                                return value.toFixed(2) + ' µg/m³';
                            }
                        }
                    }
                }
            },
            grid: {
                padding: {
                    top: -10
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    shadeIntensity: 0.4,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 53, 91]
                },
                colors: [quality.color]
            },
            labels: [title]
        };
    };

    // Crear gráficos para cada contaminante
    const gaugeConfigs = [
        { id: 'coGauge', title: 'CO', value: components.co, maxValue: 1000 },
        { id: 'noGauge', title: 'NO', value: components.no, maxValue: 100 },
        { id: 'no2Gauge', title: 'NO₂', value: components.no2, maxValue: 100 },
        { id: 'o3Gauge', title: 'O₃', value: components.o3, maxValue: 100 },
        { id: 'so2Gauge', title: 'SO₂', value: components.so2, maxValue: 100 },
        { id: 'pm25Gauge', title: 'PM2.5', value: components.pm2_5, maxValue: 50 },
        { id: 'pm10Gauge', title: 'PM10', value: components.pm10, maxValue: 100 },
        { id: 'nh3Gauge', title: 'NH₃', value: components.nh3, maxValue: 100 }
    ];

    gaugeConfigs.forEach(config => {
        const chart = new ApexCharts(
            document.querySelector(`#${config.id}`), 
            createGaugeOptions(config.title, config.value, config.maxValue)
        );
        chart.render();

        // Actualizar el valor y la calidad del aire debajo del gráfico
        const cardElement = document.querySelector(`#${config.id}`).closest('.gauge-card');
        const valueElement = cardElement.querySelector('.gauge-value');
        const qualityElement = cardElement.querySelector('.gauge-quality');
        
        valueElement.textContent = `${config.value.toFixed(2)} µg/m³`;
        qualityElement.textContent = getAirQuality(aqi).text;
        qualityElement.style.color = getAirQuality(aqi).color;
    });
});