export default class DataTracker {
    constructor(dataset) {
        this.dataset = dataset;
    }

    insert(value) {
        let data = {};
        data.dataValue = value;
        this.dataset.push(data);
    }

    render() {
        const dom = document.getElementById('stats-template').content;
        const ul = dom.querySelector('ul');
        this.dataset.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = entry.main.temp;
            ul.appendChild(li);
        });
        return dom;
    }
}