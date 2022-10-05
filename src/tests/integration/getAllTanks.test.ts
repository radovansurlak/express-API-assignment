/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';
import supertest from 'supertest';
import { Tank } from '../../interfaces/Tank';
import { TankModel } from '../../models/Tank';
import { app } from '../../server';
import { ADMIN_USER } from '../utils/users';

const TEST_TANK = {
  heightInCm: 100,
  volumeInLiters: 100,
  segments: [
    {
      startHeightInCm: 100,
      endHeightInCm: 50,
      volumePerCmInLiters: 1.5,
    },
    {
      startHeightInCm: 50,
      endHeightInCm: 0,
      volumePerCmInLiters: 0.5,
    },
  ],
};

test('GET /getAllTanks', async () => {
  const testTank = await TankModel.create(TEST_TANK);

  const authToken = await supertest(app)
    .post('/login')
    .set('Accept', 'application/json')
    .send({ username: ADMIN_USER.username, password: ADMIN_USER.password })
    .expect(200)
    .then((response) => response.body.data.authToken as string);

  expect(authToken).toBeDefined();

  await supertest(app)
    .get('/getAllTanks')
    .set('Authorization', `Bearer ${authToken}`)
    .expect(200)
    .then((response) => {
      expect(response.body.data.allTanks).toBeDefined();
      const createdTank = response.body.data.allTanks.find(
        (tank: Tank & mongoose.Document) =>
          tank._id.toString() === testTank._id.toString(),
      );
      expect(createdTank._id.toString()).toBe(testTank._id.toString());
      expect(createdTank).toBeDefined();
    });
});
