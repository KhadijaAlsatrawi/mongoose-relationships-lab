const router = require('express').Router()
const Category = require('../models/Category')
const Listing = require('../models/Listing')
const User = require('../models/User')

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

        res.redirect('/listings/' + (await createListing)._id)
    } catch (err) {
        console.log('ERROR: ' + err)
    }
})

router.get('/:listingId', async (req, res) => {
    const foundListing = await Listing.findById(req.params.listingId).populate('owner').populate('category')
    res.render('listing/listing-details.ejs', { listing: foundListing })
})

router.get('/:listingId/edit', async (req, res) => {
    const foundListing = await Listing.findById(req.params.listingId)
    const allUsers = await User.find()
    const allCategories = await Category.find()
    res.render('listing/edit-lising.ejs', { listing: foundListing, users: allUsers, categories: allCategories})
})

router.put('/:listingId/edit', async (req, res)=>{
    const updatedListing = await Listing.findByIdAndUpdate(req.params.listingId,{
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        price: req.body.price,
        size: req.body.size,
        owner: req.body.owner,
        category: req.body.category
    })
    res.redirect('/Listings/'+ updatedListing._id)
})

router.delete('/:listingId/delete', async (req, res)=>{
    await Listing.findByIdAndDelete(req.params.listingId)
    res.redirect('/listings')
})

module.exports = router
