export default class DataTracker {
    constructor(name) {
        this.name = name;
        this.dataset = [];
    }

    insert(value) {
        let data = {};
        data.dataValue = value;
        this.dataset.push(data);
    }
}