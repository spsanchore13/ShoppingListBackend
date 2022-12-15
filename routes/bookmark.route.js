const { Router } = require('express')
const { BookmarkListController } = require('../controllers/bookmark.controller')
const routeBookmark = Router()


routeBookmark.get('/', BookmarkListController.GetList)
routeBookmark.post('/:id', BookmarkListController.PostList)
routeBookmark.delete('/:id', BookmarkListController.DeleteList)

module.exports = { routeBookmark }