const { Router } = require('express')
const { ShopingController } = require('../controllers/shopinglist.controller')
const routeShopingList = Router()


routeShopingList.get('/', ShopingController.GetList)
routeShopingList.post('/', ShopingController.PostList)
routeShopingList.delete('/:id', ShopingController.DeleteList)

module.exports = { routeShopingList }