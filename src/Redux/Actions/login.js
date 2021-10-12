const login = {

    types: {
        setEmail: "login-setEmail",
        setPassword: "login-setPassword",
    },

    setEmail: function (email) {
        return {
            type: this.types.setEmail,
            email,
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