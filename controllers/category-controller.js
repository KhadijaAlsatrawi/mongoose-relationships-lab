const router = require('express').Router()
const Category = require('../models/Category')

router.get('/', async (req, res) => {
    const allCategories = await Category.find()
    res.render('category/category-list.ejs', { categories: allCategories })
})

router.get('/new', async (req, res) => {
    res.render('category/create-category.ejs')
})

router.post('/', async (req, res) => {
    const createCategory = Category.create({
        categoryName: req.body.categoryName
    })
    res.redirect('/categories')
})


module.exports = router