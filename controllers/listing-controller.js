const router = require('express').Router()
const Category = require('../models/Category')
const Listing = require('../models/Listing')
const User = require('../models/User')
const { route } = require('./category-controller')

router.get('/', async (req, res) => {
    try {
        const allListings = await Listing.find()
        res.render('listing/listing-list.ejs', { listings: allListings })
    } catch (err) {
        console.log('ERROR: ' + err)
    }
})


router.get('/new', async (req, res) => {
    try {
        const allUsers = await User.find()
        const allCategories = await Category.find()
        res.render('listing/create-listing.ejs', { users: allUsers, categories: allCategories })
    } catch (err) {
        console.log('ERROR: ' + err)
    }
})

router.post('/', async (req, res) => {
    try {
        const createListing = Listing.create({
            streetAddress: req.body.streetAddress,
            city: req.body.city,
            price: req.body.price,
            size: req.body.size,
            owner: req.body.owner,
            category: req.body.category
        })

        res.redirect('/listings/' +(await createListing)._id)
    } catch (err) {
        console.log('ERROR: ' + err)
    }
})

router.get('/:listingId', async (req, res)=>{
    const foundListing = await Listing.findById(req.params.listingId)
    res.render('listing-details.ejs', {listing: foundListing})
})

module.exports = router
