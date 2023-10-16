const num = 10
const str = "hello world"

const obj = { name: "ingoo" }
const obj2 = { name: "web7722" }

// instanceof
// typeof

class Controller {
    name
    constructor(name) {
        this.name = name
    }

    print() {
        throw new Error("자식 클래스에서 구현하고 써라~~")
    }
}

class AuthController extends Controller {
    constructor() {
        super()
    }

    print() {}

    use(...args) {
        if (args.length === 0) throw new Error("인자값이 넘어주셈!")
        if (args.length === 1 && typeof args[0] !== "string") {
            console.log("잘 넣으셨군!")
        } else {
            throw new Error("인자값 하나인데 왜 패스만 넣냐~")
        }

        // 인자값이 하나 이니면서 혹시 그타입이 함수니 ?
        // 인자값이 두개 이상이니 ?
        console.log(args)
    }
}

class UserController extends Controller {
    constructor() {
        super()
    }
}
const authController = new AuthController()
const userController = new UserController()

authController.use(() => {})
