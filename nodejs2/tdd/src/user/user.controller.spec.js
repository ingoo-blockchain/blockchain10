const controller = require('./user.controller')
describe('User Controller', () => {
    it('create 함수를 가지고있는가?', () => {
        expect(typeof controller.create).toBe('function')
    })

    it('controller create 실행시, model.create가 실행되는가?', () => {})
})
