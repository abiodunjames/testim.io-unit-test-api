const request = require('supertest');
const app = require('../routes');

describe('GET /product/1', () => {
  it('returns a json response containing the product', () => request(app)
    .get('/product/1')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.shipping).toBe(400);
      expect(response.body.total).toBe(2400);
    }));
});
