export default class DataTracker {
    constructor(dataset, type) {
        this.dataset = dataset;
        this.type = type;
        this.sorted = this.dataset.sort((a, b) => a.main.temp - b.main.temp);
    }

    render(weatherData = this.dataset) {
        const dom = document.getElementById('stats-template').content.cloneNode(true);
        const h2 = dom.querySelector('h2');
        const ul = dom.querySelector('ul');

        weatherData.forEach(data => {
            let date = new Date(data.dt_txt).toLocaleDateString();
            const li = document.createElement('li');

            if(this.type === 'humidity') {
                li.textContent = `${data.main.humidity}% humidity on ${date}`;
                h2.textContent = 'Humidity (12PM)';
            }
            else {
                li.textContent = `${data.main.temp}\xB0 Fahrenheit on ${date}`;
                if(this.type === '6:00:00 AM') h2.textContent = 'Morning Temperatures (6AM)';
                else if(this.type === '12:00:00 PM') h2.textContent = 'Day Temperatures (12PM)';
                else h2.textContent = 'Night Temperatures (6PM)';
            }

            ul.appendChild(li);
        });

        return dom;
    }

    showMin() {
        const min = [];
        min.push(this.sorted[0]);

        const minValue = this.render(min);
        return minValue;
    }

    showMax() {
        const max = [];
        max.push(this.sorted[this.sorted.length - 1]);

        const maxValue = this.render(max);
        return maxValue;
    }

    showMean() {
        const total = this.dataset.reduce((a, c) => a + c.main.temp, 0);
        const mean = total / this.dataset.length;
        
        const p = document.createElement('p');
        p.textContent = mean;
        return p;
    }

    showMode() {
        const mode = [];
        for(let i = 0; i < this.dataset.length - 1; i++) {
            if(this.dataset[i].main.temp === this.dataset[i + 1].main.temp) {
                mode.push(this.dataset[i], this.dataset[i + 1]);
            }
        }
    }
}