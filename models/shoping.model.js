const { Schema, model } = require('mongoose')

const shopingSchema = new Schema({
    title: { type: 'string', required: true },
    quantity: { type: 'number', required: true },
    priority: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string', required: true }
}, { timestamps: true })

const ShoppingListModel = model("item", shopingSchema)

module.exports = { ShoppingListModel }