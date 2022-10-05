/* eslint-disable import/no-extraneous-dependencies */
import supertest from 'supertest';
import { UserModel } from '../../models/User';
import { app } from '../../server';
import { ADMIN_USER } from '../utils/users';

test('POST /login', async () => {
  await UserModel.create(ADMIN_USER);

  const response = await supertest(app)
    .post('/login')
    .set('Accept', 'application/json')
    .send({ username: ADMIN_USER.username, password: ADMIN_USER.password });
  expect(response.status).toEqual(200);
  expect(response.body.data.authToken).toBeDefined();
});
