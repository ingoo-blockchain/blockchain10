const UserController = require('./user.controller')
const http = require('node-mocks-http')


describe('create',()=>{
    const service = {
        createUser:jest.fn()
    }
    let req,res,next
    const controller = new UserController(service)

    beforeEach(()=>{
        req = http.createRequest()
        res = http.createResponse()
        next = jest.fn()
    })

    it('create 함수를 가지고있는가 ?',()=>{
        expect(typeof controller.create).toBe('function')
    })

    it('create 함수에서 service 를 실행하는가 ?',async ()=>{
        req.body = {id:'web7722', pw:'1234',name:'ingoo'}
        await controller.create(req,res,next)
        expect(controller.service.createUser).toBeCalled()
        expect(controller.service.createUser).toBeCalledWith({id:'web7722', pw:'1234',name:'ingoo'})
    })

    it('응답이 잘도착하는가',async ()=>{
        const response = Promise.resolve({id:1})
        service.createUser.mockReturnValue(response)
        
        await controller.create(req,res,next)
        expect(res.statusCode).toBe(201)
        expect(res._isEndCalled()).toBe(true)
        expect(res._getJSONData()).toStrictEqual({id:1})

       
    })
    it('예외처리가 잘되었는가 ?',async ()=>{
        const err = {message:'error..'}
        service.createUser.mockReturnValue(Promise.reject(err))
        await controller.create(req,res,next)
        expect(next).toBeCalledWith(err)
    })
})