export default class DataTracker {
    constructor(dataset, type) {
        this.dataset = dataset;
        this.type = type;
        this.sorted = this.dataset.sort((a, b) => a.main.temp - b.main.temp);
    }

    insert(value) {
        let data = {};
        data.dataValue = value;
        this.dataset.push(data);
    }

    render(weatherData = this.dataset) {
        const domSection = document.getElementById('stats');
        while(domSection.lastElementChild) domSection.lastElementChild.remove();

        const dom = document.getElementById('stats-template').content.cloneNode(true);
        const h2 = dom.querySelector('h2');
        const ul = dom.querySelector('ul');

        weatherData.forEach(data => {
            let date = new Date(data.dt_txt).toLocaleDateString();
            const li = document.createElement('li');
            li.textContent = `${data.main.temp}\xB0 Fahrenheit on ${date}`;
            ul.appendChild(li);
        });

        if(this.type === '6:00:00 AM') h2.textContent = 'Morning Temperatures (6AM)';
        if(this.type === '12:00:00 PM') h2.textContent = 'Day Temperatures (12PM)';
        if(this.type === '6:00:00 PM') h2.textContent = 'Night Temperatures (6PM)';

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
        console.log(mode);
    }
}