'use strict';

const server = require('../server.js');
const supertest = require('supertest');

const mockRequest = supertest(server);

describe('Express server', () => {
  test('Should return `thanks` on a GET to /', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toEqual(200);
  });
});