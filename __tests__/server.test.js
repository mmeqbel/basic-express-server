'use strict';
const superTest = require('supertest');
const server = require('../src/server.js');
const request = superTest(server.server);



describe('Server', () => {
  it('404 on a bad route', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);//404 on a bad route
  });
  it('404 on a bad method', async () => {
    const response = await request.put('/foo');
    expect(response.status).toEqual(404);//404 on a bad route
  });
  it('500 if no name in the query string', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);//500 if no name in the query string
  });
  it('handle working routes', async () => {
    const response = await request.get('/person').query({name:'name'});
    expect(response.status).toEqual(200);//200 if the name is in the query string
    expect(JSON.parse(response.text)).toEqual({name:'name'});//given an name in the query string, the output object is correct
  });

});