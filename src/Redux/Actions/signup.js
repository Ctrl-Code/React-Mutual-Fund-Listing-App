const signup = {

    types: {
        setName: "signup-setName",
        setEmail: "signup-setEmail",
        setPassword: "signup-setPassword",
        setGender: "signup-setGender",
        setDob: "signup-setDob",
    },

    setName: function (name) {
        return {
            type: this.types.setName,
            name,
        }
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
    },

    setGender: function (gender) {
        return {
            type: this.types.setGender,
            gender,
        }
    },

    setDob: function (dob) {
        return {
            type: this.types.setDob,
            dob,
        }
    },
}

export default signup;