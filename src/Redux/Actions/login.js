const login = {

    types: {
        setUsername: "login-setUsername",
        setPassword: "login-setPassword",
    },

    setUsername: function (username) {
        return {
            type: this.types.setUsername,
            username,
        }
    },

    setPassword: function (password) {
        return {
            type: this.types.setPassword,
            password,
        }
    }
}

export default login;