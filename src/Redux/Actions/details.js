const details = {

    types: {
        setApiData: "details-setApiData",
    },

    setApiData: function (data) {
        return {
            type: this.types.setApiData,
            data,
        }
    },
}

export default details;