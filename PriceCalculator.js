class PriceCalculator {
  /**
   * @param {Int} basePrice
   */
  constructor(basePrice) {
    this.basePrice = basePrice;
  }

  getTotal() {
    return this.basePrice + this.shippingFee();
  }

  shippingFee() {
    return this.basePrice * (20 / 100);
  }
}

module.exports = PriceCalculator;
