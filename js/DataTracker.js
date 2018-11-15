export default class DataTracker {
    constructor(dataset, type) {
        this.dataset = dataset;
        this.type = type;
    }

    insert(value) {
        let data = {};
        data.dataValue = value;
        this.dataset.push(data);
    }

    render() {
        const domSection = document.getElementById('stats');
        while(domSection.lastElementChild) domSection.lastElementChild.remove();

        const dom = document.getElementById('stats-template').content.cloneNode(true);
        const h2 = dom.querySelector('h2');
        const ul = dom.querySelector('ul');

        this.dataset.forEach(entry => {
            let date = new Date(entry.dt_txt).toLocaleDateString();
            const li = document.createElement('li');
            li.textContent = `${entry.main.temp}\xB0 Fahrenheit on ${date}`;
            ul.appendChild(li);
        });

        if(this.type === '6:00:00 AM') h2.textContent = 'Morning Temperatures (6AM)';
        if(this.type === '12:00:00 PM') h2.textContent = 'Day Temperatures (6AM)';
        if(this.type === '6:00:00 PM') h2.textContent = 'Night Temperatures (6PM)';
        return dom;
    }
}