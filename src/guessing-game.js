class GuessingGame {
	constructor() {}

	setRange(min, max) {
		this.minNum = min;
		this.maxNum = max;
	}

	guess() {
		return Math.round((this.minNum + this.maxNum) / 2)
	}

	lower() {
		this.maxNum = Math.round((this.minNum + this.maxNum) / 2);
	}

	greater() {
		this.minNum = Math.round((this.minNum + this.maxNum) / 2);
	}
}

module.exports = GuessingGame;