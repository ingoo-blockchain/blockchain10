const userService = require("./user.service")

exports.getLogin = (req, res) => {
    res.render("login.html")
}

exports.getLogout = (req, res) => {
    // res.setHeader("Set-Cookie", `token=; Max-Age=0; domain=127.0.0.1; path=/;`)
    res.clearCookie("token") // cookie를 지우는건 알겠어 어떻게 지우는지 원리를 파악해봐야함.
    res.redirect("/")
}

exports.postLogin = async (req, res, next) => {
    try {
        const { user_id, user_pw } = req.body
        const result = await userService.postLogin(user_id, user_pw)
        if (!result.isLogin) return res.redirect("/")

        // res.setHeader("Set-Cookie", `token=${result.data}; Max-Age=${60 * 10}; domain=127.0.0.1; path=/;`)
        res.cookie("token", result.data, (maxAge = 60 * 10), (domain = "127.0.0.1"), (path = "/"))
        res.redirect("/")
    } catch (err) {
        next()
    }
}
