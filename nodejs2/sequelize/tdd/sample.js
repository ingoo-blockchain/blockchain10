const UserController = require('./src/user/user.controller') // {} -> function
const service = require('./src/user/user.service') // {}

describe('User Controller', ()=>{
    const mockFn = jest.fn()
    const service = {
        createUser:jest.fn()
    }
    
    const controller = new UserController(service) // {create:()=>{}}
    it('Create 메서드가 존재합니까?', ()=>{
        expect(typeof controller.create).toBe('function')
    }) 

    it('Create 메서드에서 Service.createUser가 호출됩니까?', ()=>{
        controller.create()
        expect(controller.service.createUser).toBeCalled()
    })

    it('mock 함수 알아보기', ()=>{
        console.log(typeof mockFn)
        mockFn('인자값~~~~~~')

        expect(mockFn).toBeCalledWith('인자값~~~~~~')
        expect(mockFn).toBeCalled()

        // map
    })
})


