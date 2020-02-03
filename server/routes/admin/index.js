module.exports = app => {
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const AdminUser = require('../../models/AdminUser')
    const router = express.Router({
        mergeParams: true
    })
    // const req.Model = require('../../models/req.Model')
    // 创建资源
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    // 更新资源
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    // 删除资源
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })
    // 资源列表
    router.get('/', async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请先登录')
        const { id } = jwt.verify(token, app.get('secret'))
        assert(id, 401, '请先登录')
        req.user = await AdminUser.findById(id)
        assert(req.user, 401, '请先登录')
        await next()
    }, async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(items)
    })
    // 资源详情
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        // 转换小写单数到大写复数
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)

    // npm i multer  文件上传 中间件接口

    const multer = require('multer')
    const upload = multer({ dest: __dirname + './../../uploads' })
    app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })


    // login
    app.post('/admin/api/login', async (req, res) => {
        const { username, password } = req.body

        // 1. 根据用户名找密码
        const user = await AdminUser.findOne({ username }).select('+password')
        assert(user, 422, '用户名不存在')
        // if (!user) {
        //     return res.status(422).send({
        //         message: '用户名不存在'
        //     })
        // }
        // 2.校验密码
        const isValid = require('bcryptjs').compareSync(password, user.password)
        assert(isValid, 422, '密码错误')

        // if (!isValid) {
        //     return res.status(422).send({
        //         message: '密码错误'
        //     })
        // }

        // 3.返回token
        const token = jwt.sign({ id: user._id }, app.get('secret'))
        res.send({token})
    })

    // 错误处理函数
    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}
