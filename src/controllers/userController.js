const User = require('../models/User');
const bcrypt = require('bcrypt');

const hanldeRegisterUser = async (req, res) => {
    try {

        const data = { ...req.body }
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(req.body.password, salt)
        const newUser = await new User({ ...data, password: hashed })
        await newUser.save()

        res.status(200).json({
            message: 'Create user success...',
        })

    } catch (err) {
        console.log(err)
        res.status(403).json({
            err: 'err',
            message: 'Error form sever...'
        })
    }
}

const handleUpdateUser = async (req, res) => {
    try {

        const data = { ...req.body }
        await User.updateOne({ _id: req.params.id }, data)

        res.status(200).json({
            message: 'Update user success...',
        })

    } catch (error) {
        console.log(error)
        res.status(403).json({
            err: 'err',
            message: 'Error form sever...'
        })
    }
}

const handleLoginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            res.status(404).json({
                message: "Email wrong!!"
            })
        }

        const isValidPassword = await bcrypt.compare(req.body.password, user.password)
        if (!isValidPassword) {
            res.status(404).json({
                message: "Password wrong!!"
            })
        }

        res.status(200).json({
            message: 'Login success...',
            user
        })

    } catch (err) {
        console.log(err)
        res.status(403).json({
            err: 'err',
            message: 'Error form sever...'
        })
    }
}

const handleGetAllUser = async (req, res) => {
    try {

        const users = await User.find({})

        if (users) {
            res.status(200).json({
                message: 'Update user success...',
                users: users
            })

        }

    } catch (error) {
        console.log(error)
        res.status(403).json({
            err: 'err',
            message: 'Error form sever...'
        })
    }
}

const handleGetUserById = async (req, res) => {
    try {
        const id = req.params.id
        if (!id) {
            res.status(500).json({
                message: "Missing params... "
            })
        }

        const user = await User.findOne({ _id: id })

        if (user) {
            res.status(200).json({
                message: "Get user success!!",
                user: user
            })
        }

    } catch (error) {
        console.log(error)
        res.status(403).json({
            err: 'err',
            message: 'Error form sever...'
        })
    }
}

const handleAddToCart = async (req, res) => {
    try {
        const id = req.params.id
        await User.updateOne({ _id: id }, { ...req.body })

        res.status(200).json({
            message: 'add success'
        })
    } catch (error) {
        console.log(error)
        res.status(403).json({
            err: 'err',
            message: 'Error form sever...'
        })
    }
}


//admin

const handleCreateAdmin = async (req, res) => {
    try {

        const data = { ...req.body }
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(req.body.password, salt)
        const newUser = await new User({ ...data, password: hashed, admin: true })
        await newUser.save()

        res.status(200).json({
            message: 'Create user success...',
        })

    } catch (err) {
        console.log(err)
        res.status(403).json({
            err: 'err',
            message: 'Error form sever...'
        })
    }
}

const handleLogin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, admin: true })

        if (!user) {
            res.status(404).json({
                message: "Email wrong!!",
                error: 1
            })
        }

        const isValidPassword = await bcrypt.compare(req.body.password, user.password)
        if (!isValidPassword) {
            res.status(404).json({
                message: "Password wrong!!",
                error: 1
            })
        }

        res.status(200).json({
            message: 'Login success...',
            user: { ...user, password: 0 }
        })

    } catch (err) {
        console.log(err)
        res.status(403).json({
            err: 'err',
            message: 'Error form sever...'
        })
    }
}

const handleGetAllAdmins = async (req, res) => {
    try {
        const allAdmins = await User.find({ admin: true }).select("-password")
        if (allAdmins) {
            res.status(200).json({
                message: 'Get all admins success...',
                admins: allAdmins
            })
        }
    } catch (err) {
        console.log(err)
        res.status(403).json({
            err: 'err',
            message: 'Error form sever...'
        })
    }
}

const handleEditAdmin = async (req, res) => {
    try {
        const id = req.params.id
        await User.updateOne({ _id: id }, req.body)

        res.status(200).json({
            message: "Edit admin success!!!"
        })
    } catch (err) {
        console.log(err)
        res.status(403).json({
            err: 'err',
            message: 'Error form sever...'
        })
    }
}

const handleGetAdminById = async (req, res) => {
    try {
        const id = req.params.id
        const admin = await User.findOne({ _id: id }).select('-password')

        if (admin) {
            res.status(200).json({
                message: "Get admin success...",
                admin
            })
        }
    } catch (err) {
        console.log(err)
        res.status(403).json({
            err: 'err',
            message: 'Error form sever...'
        })
    }
}

const handleDeleteAdmin = async (req, res) => {
    try {

        const id = req.params.id

        const response = await User.deleteOne({ _id: id, admin: true })
        if (response) {
            res.status(200).json({
                message: "Delete admin success...",
            })
        }

    } catch (err) {
        console.log(err)
        res.status(403).json({
            err: 'err',
            message: 'Error form sever...'
        })
    }
}

module.exports = {
    hanldeRegisterUser,
    handleUpdateUser,
    handleLoginUser,
    handleGetAllUser,
    handleGetUserById,
    handleCreateAdmin,
    handleLogin,
    handleGetAllAdmins,
    handleEditAdmin,
    handleGetAdminById,
    handleDeleteAdmin,
    handleAddToCart
}