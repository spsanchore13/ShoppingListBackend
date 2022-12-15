const { BookmarkModel } = require('../models/bookmar.model')
const { ShoppingListModel } = require('../models/shoping.model')

const GetList = async (req, res) => {
    const data = await BookmarkModel.find()
    res.status(200).send(data)
}

const PostList = async (req, res) => {
    const { id } = req.params

    const note = await ShoppingListModel.findById(id)
    const { title, description, quantity, priority, date } = note
    const list = new BookmarkModel({ title, description, quantity, priority, date })
    list.save()
    await ShoppingListModel.deleteOne({ _id: id })
    res.status(200).send(list)
}

const DeleteList = async (req, res) => {
    // console.log(req.params)
    const list = await BookmarkModel.deleteOne({ _id: req.params.id })
    res.send(200).send({ "message": "delete one successfully" })
}

const BookmarkListController = { GetList, PostList, DeleteList }

module.exports = { BookmarkListController }