const request = require('supertest')

const app = require('../../src/app')
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Authentication', () => {
    beforeEach(async () => { await truncate() })
    it('should authenticate with valid credentials', async () => {

        const user = await User.create({
            name: 'John',
            email: 'john@example.com',
            password: 'password'
        });

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: "password",
            })

        expect(response.status).toBe(200);
    })

    it('should not authenticate with invalid credentials', async () => {

        const user = await User.create({
            name: 'John',
            email: 'john@example.com',
            password: 'password'
        });

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: "qwerty",
            })

        expect(response.status).toBe(401);
    })
}
);