module.exports = options => {
    
    return async (req, res, next) => {
        // 转换小写单数到大写复数
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../models/${modelName}`)
        next()
    }
}