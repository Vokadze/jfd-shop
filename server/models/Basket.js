const {Schema, model} = require("mongoose");

const schema = new Schema({
    name: {
        type: String,
        require: true
    },
    prodNum: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    category: {type: Schema.Types.ObjectId, ref: "Category"},
    image: {
        type: String
    },
    rate: {
        type: String
    },
    count: {
        type: Number
    },
    countPay: {
        type: Number
    }
}, {
    timestamps: {createdAt: "created_at"}
})

module.exports = model("Basket", schema)