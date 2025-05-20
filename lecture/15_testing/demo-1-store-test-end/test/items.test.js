import { assert } from 'chai'
import request from 'supertest'

// I want to test items.js, so I import it (indirectly through app.js)
import app from '../app.js'

describe('Items integration test (with database)', () => {
    it('should get items from the db for GET items', async () => {
        const res = await request(app).get('/items')

        assert.equal(res.statusCode, 200)
        assert.equal(res.type, 'application/json')

        assert.isArray(res.body)
        assert.include(res.body[0], {
            name: "apple",
            price: 2.99
        })
    })
})