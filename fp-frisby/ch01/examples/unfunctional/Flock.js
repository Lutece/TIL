class Flock {
    constructor(n) {
        this.seagulls = n;
    }

    conjoin(other) {
        this.seagulls += other.seagulls;
        return this;
    }

    breed(other) {
        this.seagulls = this.seagulls * other.seagulls;
        return this;
    }
}

module.exports = Flock;