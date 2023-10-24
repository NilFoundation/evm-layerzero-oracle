
class Placeholder {

    active = true;

    constructor(activeStatus) {
        this.setStatus(activeStatus);
    }

    verify() {}

    isActive() {
        return this.active;
    }

    preprocess(consensusData) {
        return consensusData;
    }
    
    setStatus(activeStatus) {
        this.active = activeStatus;
    }
}

module.exports = Placeholder;
