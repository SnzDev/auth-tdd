const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');
describe('User', () => {
    beforeEach(async () => { await truncate() });

    it('should encrypt user password', async () => {
        const user = await User.create({
            name: 'John',
            email: "john@test.com",
            password: 'password',
        })
        
        const compare_password_hash = await bcrypt.compare('password', user.password_hash)

        expect(compare_password_hash).toBe(true);
    })
})