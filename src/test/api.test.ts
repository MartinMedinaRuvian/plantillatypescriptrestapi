import request from 'supertest';

import app from '../server';

describe("GET /", () => {
    /**
     * Testing get all user endpoint
     */
    it('response with json and 200 OK', done => {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
})
