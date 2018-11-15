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
        const dom = document.getElementById('stats-template').content;
        const h2 = dom.querySelector('h2');
        const ul = dom.querySelector('ul');

        this.dataset.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = entry.main.temp;
            ul.appendChild(li);
        });

        if(this.type === '6:00:00 AM') h2.textContent = 'Morning Temperatures';
        return dom;
    }
}