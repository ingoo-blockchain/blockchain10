const UserService = require('./user.service')

describe('user Service', ()=>{

    let userService = null
    let User = {
        create:jest.fn()
    }

    beforeEach(()=>{
        userService = new UserService(User)
    })

    describe('createUser', ()=>{
        it('성공 부분',async ()=>{
            User.create.mockResolvedValue({id:'web7722',name:'ingoo'})
            const dto = {id:"web7722", pw:'1234', name:'ingoo'}
            const responseBody = await userService.createUser(dto)
            
            expect(User.create).toBeCalledWith(dto)
            expect(responseBody).toEqual({id:'web7722',name:'ingoo'})
        })

        it('실패 부분', async ()=>{
            User.create.mockRejectedValue(new Error('User Error'))
            const dto = {id:"web7722", pw:'1234', name:'ingoo'}
            expect(async ()=> await userService.createUser(dto) ).rejects.toThrowError('User Error')
        })
    })
})