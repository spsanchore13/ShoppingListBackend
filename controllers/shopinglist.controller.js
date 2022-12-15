const { ShoppingListModel } = require('../models/shoping.model')

const GetList = async (req, res) => {
    const data = await ShoppingListModel.find()
    // console.log(data)
    res.status(200).send(data)
}

const PostList = async (req, res) => {
    const date = new Date().toLocaleString().replace(',', '')
    const list = new ShoppingListModel({ ...req.body, date })
    list.save()
    res.status(200).send(list)
}

const DeleteList = async (req, res) => {
    // console.log(req.params)
    const list = await ShoppingListModel.deleteOne({ _id: req.params.id })
    res.send(200).send({ "message": "delete one successfully" })
}


const ShopingController = { GetList, PostList, DeleteList }

module.exports = { ShopingController }