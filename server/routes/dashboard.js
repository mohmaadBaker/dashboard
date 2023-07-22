const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth')
const dashbordController = require('../controllers/dashboardController')
router.get('/dashboard', isLoggedIn, dashbordController.dashboard)
router.get('/dashboard/item/:id', isLoggedIn, dashbordController.dashboardViewNote)
router.put('/dashboard/item/:id', isLoggedIn, dashbordController.dashboardUpdateNote)
router.delete('/dashboard/item-delete/:id', isLoggedIn, dashbordController.dashboardDeleteNote)
router.get('/dashboard/add', isLoggedIn, dashbordController.dashboardAddNote)
router.post('/dashboard/add', isLoggedIn, dashbordController.dashboardAddNoteSubmit)
router.get('/dashboard/search', isLoggedIn, dashbordController.dashboardSearch)
router.post('/dashboard/search', isLoggedIn, dashbordController.dashboardSearchSubmit)





module.exports = router