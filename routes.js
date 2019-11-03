const express = require('express');
const Price = require('./PriceCalculator');

const route = express();

route.get('/product/1', (req, res) => {
  const priceCalculator = new Price(2000);
  // Database component gets product details from the database. For simplicity, we'll skip this.
  // Analytic component tracks user.
  const product = { name: 'T-Shirt', shipping: priceCalculator.shippingFee(), total: priceCalculator.getTotal() };
  return res.json(product);
});

module.exports = route;
