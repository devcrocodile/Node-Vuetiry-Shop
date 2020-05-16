const request = require('supertest');
const { expect } = require('chai');
const knex = require('../db/knex');
const app = require('../app');
const fixtures = require('./fixtures');

describe('CRUD Kernels', () => {
    before((done) => {
        knex.migrate
            .latest()
            .then(() => {
                return knex.seed.run();
            })
            .then(() => done())
            .catch((error) => {
                console.log(`error in before test`);
                done(error);
            });
    });

    it('List all records', (done) => {
        request(app)
            .get('/api/v1/kernels')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
                expect(response.body).to.deep.equal(fixtures.kernels);
                done();
            })
            .catch((error) => {
                console.log(`error in all records test`);
                done(error);
            });
    });

    it('List record by id 1', (done) => {
        request(app)
            .get('/api/v1/kernels/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal(fixtures.kernels[0]);
                done();
            })
            .catch((error) => {
                console.log(`error in record by id 1 test`);
                done(error);
            });
    });

    it('List record by id 4', (done) => {
        request(app)
            .get('/api/v1/kernels/4')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal(fixtures.kernels[3]);
                done();
            })
            .catch((error) => {
                console.log(`error in record by id 4 test`);
                done(error);
            });
    });

    it('Add a record', (done) => {
        request(app)
            .post('/api/v1/kernels')
            .send(fixtures.kernel)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                fixtures.kernel.id = response.body.id;
                expect(response.body).to.deep.equal(fixtures.kernel);
                done();
            })
            .catch((error) => {
                console.log(`error in add record test`);
                done(error);
            });
    });

    it('Update a record', (done) => {
        fixtures.kernel.rating = 6;
        request(app)
            .put('/api/v1/kernels/11')
            .send(fixtures.kernel)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal(fixtures.kernel);
                done();
            })
            .catch((error) => {
                console.log(`error in update record test`);
                done(error);
            });
    });

    it('Deletes a record', (done) => {
        request(app)
            .delete('/api/v1/kernels/11')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal({
                    deleted: true
                });
                done();
            })
            .catch((error) => {
                console.log(`error in delete record test`);
                done(error);
            });
    });
});
