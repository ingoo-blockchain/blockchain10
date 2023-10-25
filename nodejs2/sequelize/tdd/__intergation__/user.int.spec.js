const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../src/entity')

beforeAll(async ()=>{
    console.log(sequelize)
    await sequelize.sync({force:true})
})

describe('통합테스트 userController', ()=>{

    it('POST /users', async ()=> {
        const body = {id:'web7722',pw:'1234',name:'ingoo'}
        const response = await request(app)
                            .post('/users')
                            .set('Content-type','application/json')
                            .send(body)
        console.log(response)
        // expect(response.text).toBe("{\"id\":\"web7722\",\"pw\":\"1234\",\"name\":\"ingoo\",\"updatedAt\":\"2023-10-25T06:24:58.110Z\",\"createdAt\":\"2023-10-25T06:24:58.110Z\"}")
    })
})

