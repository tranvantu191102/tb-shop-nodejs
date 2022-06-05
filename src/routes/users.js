const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')
// user
router.post('/user/register-user', userController.hanldeRegisterUser)
router.post('/user/login', userController.handleLoginUser)
router.put('/user/update-user/:id', userController.handleUpdateUser)
router.get('/user/get-all-user', userController.handleGetAllUser)
router.get('/user/get-user-by-id/:id', userController.handleGetUserById)
router.post('/user/add-to-cart/:id', userController.handleAddToCart)


// admin
router.post('/admin/create-admin', userController.handleCreateAdmin)
router.post('/login', userController.handleLogin)
router.get('/admin/get-all-admins', userController.handleGetAllAdmins)
router.get('/admin/get-admin-by-id/:id', userController.handleGetAdminById)
router.put('/admin/edit-admin/:id', userController.handleEditAdmin)
router.delete('/admin/delete-admin/:id', userController.handleDeleteAdmin)

// product



module.exports = router
