const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Activity, conn } = require('../../src/db.js');

const agent = session(app);
const activity = {
  id: 'f946b09a-9e4b-11ed-a8fc-0242ac120002',
  name: 'futsal',
  difficult: 1,
  duration: 1,
  season: 'verano'
};

describe('Activity routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Activity.sync({ force: true })
    .then(() => Activity.create(activity)));
  describe('POST /activity', () => {
    
    it('tira error si falta un parámetro', () =>
      agent.post('/activity')
        .send({
            name: 'futsal',
            difficult: 1,
            season: 'verano',
            idPais: ['ARG']
        })
        .expect(404)
    );
  });
});