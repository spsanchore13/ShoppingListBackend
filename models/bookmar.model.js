const { Schema, model } = require('mongoose')

const bookmarkSchema = new Schema({
    title: { type: 'string', required: true },
    quantity: { type: 'number', required: true },
    priority: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string', required: true }
}, { timestamps: true })

const BookmarkModel = model("bookmark", bookmarkSchema)

module.exports = { BookmarkModel }