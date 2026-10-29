const router = require('express').Router()
const Category = require('../models/Category')

router.get('/', async (req, res) => {
    try {
        const allCategories = await Category.find()
        res.render('category/category-list.ejs', { categories: allCategories })
    } catch (err) {
        console.log('ERROR: ' + err)
    }
})

router.get('/new', async (req, res) => {
    res.render('category/create-category.ejs')
})

router.post('/', async (req, res) => {
    try {
        const createCategory = Category.create({
            categoryName: req.body.categoryName
        })
        res.redirect('/categories')
    } catch (err) {
        console.log('ERROR: ' + err)
    }
})


module.exports = router